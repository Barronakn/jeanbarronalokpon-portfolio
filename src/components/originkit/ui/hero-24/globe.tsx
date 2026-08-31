import { useEffect, useRef, useState } from "react";
import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    SphereGeometry,
    MeshBasicMaterial,
    Color,
    Mesh,
    Group,
    InstancedMesh,
    Matrix4,
    Raycaster,
    Vector2,
    TubeGeometry,
    CatmullRomCurve3,
    Vector3,
    CanvasTexture,
} from "three";
import { geoEquirectangular, geoPath } from "d3-geo";

// Module-level cache for GeoJSON land data — fetched once, reused across mounts
let cachedLandData = null;
let landDataPromise = null;
const LAND_DATA_URL = "https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/50m/physical/ne_50m_land.json";

function fetchLandData() {
    if (cachedLandData) return Promise.resolve(cachedLandData);
    if (landDataPromise) return landDataPromise;
    landDataPromise = fetch(LAND_DATA_URL)
        .then((res) => {
            if (!res.ok) throw new Error("Failed to load land data");
            return res.json();
        })
        .then((data) => {
            cachedLandData = data;
            return data;
        });
    return landDataPromise;
}

function parseColorToRgba(input) {
    if (!input || input.trim() === "") return { r: 0, g: 0, b: 0, a: 0 };
    const str = input.trim();
    const rgbaMatch = str.match(
        /rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(?:,\s*([\d.]+)\s*)?\)/i
    );
    if (rgbaMatch) {
        return {
            r: Math.max(0, Math.min(255, parseFloat(rgbaMatch[1]))) / 255,
            g: Math.max(0, Math.min(255, parseFloat(rgbaMatch[2]))) / 255,
            b: Math.max(0, Math.min(255, parseFloat(rgbaMatch[3]))) / 255,
            a: rgbaMatch[4] !== undefined ? Math.max(0, Math.min(1, parseFloat(rgbaMatch[4]))) : 1,
        };
    }
    const hex = str.replace(/^#/, "");
    if (hex.length === 8) {
        return { r: parseInt(hex.slice(0, 2), 16) / 255, g: parseInt(hex.slice(2, 4), 16) / 255, b: parseInt(hex.slice(4, 6), 16) / 255, a: parseInt(hex.slice(6, 8), 16) / 255 };
    }
    if (hex.length === 6) {
        return { r: parseInt(hex.slice(0, 2), 16) / 255, g: parseInt(hex.slice(2, 4), 16) / 255, b: parseInt(hex.slice(4, 6), 16) / 255, a: 1 };
    }
    if (hex.length === 4) {
        return { r: parseInt(hex[0] + hex[0], 16) / 255, g: parseInt(hex[1] + hex[1], 16) / 255, b: parseInt(hex[2] + hex[2], 16) / 255, a: parseInt(hex[3] + hex[3], 16) / 255 };
    }
    if (hex.length === 3) {
        return { r: parseInt(hex[0] + hex[0], 16) / 255, g: parseInt(hex[1] + hex[1], 16) / 255, b: parseInt(hex[2] + hex[2], 16) / 255, a: 1 };
    }
    return { r: 0, g: 0, b: 0, a: 1 };
}

function mapLinear(value, inMin, inMax, outMin, outMax) {
    if (inMax === inMin) return outMin;
    return outMin + ((value - inMin) / (inMax - inMin)) * (outMax - outMin);
}

function mapSpeedUiToInternal(ui) {
    return ui === 0 ? 0 : mapLinear(Math.max(0, Math.min(10, ui)), 0, 10, 0, 0.9);
}
function mapDensityUiToSpacing(ui) {
    return mapLinear(Math.max(1, Math.min(10, ui)), 1, 10, 24, 8);
}
function mapScaleUiToMultiplier(ui) {
    return mapLinear(Math.max(1, Math.min(20, ui)), 1, 20, 0.2, 2);
}
function mapDotSizeUiToMultiplier(ui) {
    return mapLinear(Math.max(1, Math.min(10, ui)), 1, 10, 0.1, 0.5);
}
function mapMarkerDotSizeUiToMultiplier(ui) {
    return mapLinear(Math.max(0, Math.min(100, ui)), 0, 100, 0.1, 2.5);
}
function normalizeSmoothing(ui) {
    return Math.max(0, Math.min(1, ui / 10));
}
function mapDragSpeedUiToSensitivity(ui) {
    return mapLinear(Math.max(0, Math.min(10, ui)), 0, 10, 0.001, 0.02);
}
function mapDetailToStepSize(ui) {
    return mapLinear(Math.max(1, Math.min(10, ui)), 1, 10, 10, 1);
}

function simplifyRing(ring, detail) {
    if (ring.length < 2) return ring;
    if (detail >= 10) return ring;
    const stepSize = Math.max(1, Math.floor(mapDetailToStepSize(detail)));
    const simplified = [ring[0]];
    for (let i = stepSize; i < ring.length - 1; i += stepSize) {
        simplified.push(ring[Math.min(i, ring.length - 1)]);
    }
    const last = ring[ring.length - 1];
    const first = ring[0];
    if (Math.abs(last[0] - first[0]) >= 1e-4 || Math.abs(last[1] - first[1]) >= 1e-4) {
        simplified.push(last);
    }
    return simplified.length >= 2 ? simplified : ring;
}

function latLngToPosition(lat, lng) {
    const latRad = (lat * Math.PI) / 180;
    const lngRad = (lng * Math.PI) / 180;
    return {
        x: Math.cos(latRad) * Math.sin(lngRad),
        y: Math.sin(latRad),
        z: Math.cos(latRad) * Math.cos(lngRad),
    };
}

function latLngToSpherePos(lat, lng, globeRadius) {
    const pos = latLngToPosition(lat, lng);
    return new Vector3(pos.x * globeRadius, pos.y * globeRadius, pos.z * globeRadius);
}

function positionsToPoints(positions) {
    const points = [];
    for (let i = 0; i < positions.length; i += 3) {
        points.push(new Vector3(positions[i], positions[i + 1], positions[i + 2]));
    }
    return points;
}

function makeTubeCurve(points, globeRadius, outlineWidth) {
    if (points.length < 2) return null;
    if (points[0].distanceTo(points[points.length - 1]) > 0.001) {
        points = [...points, points[0].clone()];
    }
    if (points.length < 2) return null;
    const curve = new CatmullRomCurve3(points);
    const radius = (outlineWidth / 10) * 0.01;
    return new TubeGeometry(curve, points.length * 2, radius, 8, false);
}

export default function Globe({
    speed = 2,
    smoothing = 8,
    dots = { color: "#ffffff", size: 5, density: 8, allDots: false },
    fill = "dots",
    fillColor = "#ffffff",
    scale = 8,
    stopOnHover = true,
    markerConfig = { markers: [], color: "#00f7ff", size: 40 },
    direction = "left",
    initialLatitude = 23,
    initialLongitude = -23,
    oceanColor = "#000000",
    outlineColor = "#ffffff",
    showOutline = true,
    graticuleColor = "#D4D4D4",
    showGrid = true,
    outlineWidth = 1,
    dragSpeed = 5,
    detail = 5,
    style,
}) {
    const containerRef = useRef(null);
    const [, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const dotColor = dots.color;
    const dotSize = dots.size;
    const density = dots.density;
    const allDots = dots.allDots;
    const gridWidth = 1;
    const smoothingN = normalizeSmoothing(smoothing);

    const baseRotationSpeed = mapSpeedUiToInternal(speed);
    const rotationSpeed = direction === "left" ? -baseRotationSpeed : baseRotationSpeed;
    const dotSpacing = mapDensityUiToSpacing(density);
    const dotSizeMultiplier = mapDotSizeUiToMultiplier(dotSize);
    const markerRadiusMultiplier = mapMarkerDotSizeUiToMultiplier(markerConfig.size);
    const scaleMultiplier = mapScaleUiToMultiplier(scale);

    useEffect(() => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        const containerWidth = container.clientWidth || container.offsetWidth || 800;
        const containerHeight = container.clientHeight || container.offsetHeight || 600;

        // --- Scene setup ---
        const scene = new Scene();
        const camera = new PerspectiveCamera(50, containerWidth / containerHeight, 0.1, 1e3);
        const globeRadius = scaleMultiplier;
        camera.position.set(0, 0, 2.5 / scaleMultiplier);
        camera.lookAt(0, 0, 0);

        const renderer = new WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(containerWidth, containerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.outputColorSpace = "srgb";
        const canvas = renderer.domElement;
        Object.assign(canvas.style, { position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" });
        container.appendChild(canvas);
        renderer.render(scene, camera);

        // --- Colors ---
        const resolvedOceanColor = oceanColor;
        const resolvedOutlineColor = outlineColor;
        const resolvedDotColor = dotColor;
        const resolvedMarkerColor = markerConfig.color;
        const resolvedGraticuleColor = graticuleColor;
        const resolvedFillColor = fillColor;
        const oceanRgba = parseColorToRgba(resolvedOceanColor);
        const outlineRgba = parseColorToRgba(resolvedOutlineColor);
        const dotRgba = parseColorToRgba(resolvedDotColor);
        const graticuleRgba = parseColorToRgba(resolvedGraticuleColor);
        const fillRgba = parseColorToRgba(resolvedFillColor);

        // --- Ocean sphere ---
        const oceanMesh = new Mesh(
            new SphereGeometry(globeRadius, 64, 64),
            new MeshBasicMaterial({ color: new Color(resolvedOceanColor || "#000"), transparent: oceanRgba.a < 1 || oceanRgba.a === 0, opacity: oceanRgba.a })
        );
        scene.add(oceanMesh);

        // --- Globe outline ring ---
        if (showOutline && outlineColor && outlineRgba.a > 0) {
            const outlinePositions = [];
            for (let i = 0; i <= 128; i++) {
                const angle = (i / 128) * Math.PI * 2;
                outlinePositions.push(Math.cos(angle) * globeRadius, Math.sin(angle) * globeRadius, 0);
            }
            const points = positionsToPoints(outlinePositions);
            if (points.length >= 2) {
                points.push(points[0].clone());
                const mat = new MeshBasicMaterial({ color: new Color(resolvedOutlineColor), transparent: outlineRgba.a < 1, opacity: outlineRgba.a });
                const geo = makeTubeCurve(points, globeRadius, outlineWidth);
                if (geo) scene.add(new Mesh(geo, mat));
            }
        }

        // --- Groups ---
        const continentOutlineGroup = new Group();
        const graticuleGroup = new Group();
        const globeGroup = new Group();

        // --- Graticule grid ---
        if (showGrid && resolvedGraticuleColor && graticuleRgba.a > 0) {
            const mat = new MeshBasicMaterial({ color: new Color(resolvedGraticuleColor || "#fff"), transparent: graticuleRgba.a < 1, opacity: graticuleRgba.a });
            const gridSpacing = 15;
            for (let lat = -90; lat <= 90; lat += gridSpacing) {
                const positions = [];
                for (let i = 0; i <= 64; i++) {
                    const lng = (i / 64) * 360 - 180;
                    const p = latLngToPosition(lat, lng);
                    positions.push(p.x * globeRadius, p.y * globeRadius, p.z * globeRadius);
                }
                if (positions.length >= 6) {
                    const geo = makeTubeCurve(positionsToPoints(positions), globeRadius, gridWidth);
                    if (geo) { const m = new Mesh(geo, mat); m.renderOrder = 0; graticuleGroup.add(m); }
                }
            }
            for (let lng = -180; lng < 180; lng += gridSpacing) {
                const positions = [];
                for (let i = 0; i <= 64; i++) {
                    const lat = (i / 64) * 180 - 90;
                    const p = latLngToPosition(lat, lng);
                    positions.push(p.x * globeRadius, p.y * globeRadius, p.z * globeRadius);
                }
                if (positions.length >= 6) {
                    const geo = makeTubeCurve(positionsToPoints(positions), globeRadius, gridWidth);
                    if (geo) { const m = new Mesh(geo, mat); m.renderOrder = 0; graticuleGroup.add(m); }
                }
            }
        }

        // --- Globe group assembly ---
        globeGroup.rotation.y = (initialLongitude * Math.PI) / 180;
        globeGroup.rotation.x = (initialLatitude * Math.PI) / 180;
        globeGroup.add(oceanMesh);
        if (showGrid && graticuleColor && graticuleRgba.a > 0) globeGroup.add(graticuleGroup);
        globeGroup.add(continentOutlineGroup);
        scene.add(globeGroup);

        // --- Markers ---
        let markerMeshes = [];
        function updateMarkers() {
            markerMeshes.forEach((m) => globeGroup.remove(m));
            markerMeshes = [];
            if (markerConfig.markers && markerConfig.markers.length > 0) {
                const size = 0.01 * markerRadiusMultiplier;
                const geo = new SphereGeometry(size, 16, 16);
                const col = resolvedMarkerColor ? new Color(resolvedMarkerColor) : new Color(1, 1, 1);
                markerConfig.markers.forEach((marker) => {
                    if (!marker || typeof marker.lat !== "number" || typeof marker.lng !== "number") return;
                    const p = latLngToSpherePos(marker.lat, marker.lng, globeRadius);
                    const m = new Mesh(geo, new MeshBasicMaterial({ color: col }));
                    m.position.copy(p);
                    globeGroup.add(m);
                    markerMeshes.push(m);
                });
            }
        }

        // --- Load world data ---
        let dotInstances = null;
        const loadWorldData = async () => {
            try {
                setIsLoading(true);
                const landFeatures = await fetchLandData();

                // Clear old outlines
                while (continentOutlineGroup.children.length > 0) {
                    continentOutlineGroup.remove(continentOutlineGroup.children[0]);
                }

                // Continent outlines
                if (showOutline && outlineColor && outlineRgba.a > 0) {
                    const outlineMat = new MeshBasicMaterial({ color: new Color(resolvedOutlineColor), transparent: outlineRgba.a < 1, opacity: outlineRgba.a, depthTest: true, depthWrite: true });
                    landFeatures.features.forEach((feature) => {
                        const ft = (feature.properties?.featurecla || feature.properties?.type || "").toLowerCase();
                        const fn = (feature.properties?.name || "").toLowerCase();
                        if (ft.includes("graticule") || ft.includes("grid") || ft.includes("line") || fn.includes("graticule") || fn.includes("grid") || fn.includes("line")) return;
                        const geometry = feature.geometry;
                        if (!geometry || !geometry.coordinates) return;
                        const processRing = (ring) => {
                            if (ring.length < 2) return;
                            const positions = [];
                            simplifyRing(ring, detail).forEach((coord) => {
                                const p = latLngToPosition(coord[1], coord[0]);
                                positions.push(p.x * globeRadius, p.y * globeRadius, p.z * globeRadius);
                            });
                            if (positions.length >= 6) {
                                const geo = makeTubeCurve(positionsToPoints(positions), globeRadius, outlineWidth);
                                if (geo) { const m = new Mesh(geo, outlineMat); m.renderOrder = 0; continentOutlineGroup.add(m); }
                            }
                        };
                        if (geometry.type === "Polygon" && geometry.coordinates.length > 0) processRing(geometry.coordinates[0]);
                        else if (geometry.type === "MultiPolygon") geometry.coordinates.forEach((poly) => { if (poly.length > 0) processRing(poly[0]); });
                    });

                    // Bitmap for dot placement
                    const bitmapWidth = 2048, bitmapHeight = 1024;
                    const offscreenCanvas = document.createElement("canvas");
                    offscreenCanvas.width = bitmapWidth;
                    offscreenCanvas.height = bitmapHeight;
                    const ctx = offscreenCanvas.getContext("2d", { willReadFrequently: true });
                    if (!ctx) throw new Error("Canvas not supported");
                    const bitmapProjection = geoEquirectangular().fitSize([bitmapWidth, bitmapHeight], { type: "Sphere" });
                    const bitmapPathGenerator = geoPath().projection(bitmapProjection).context(ctx);
                    ctx.fillStyle = "#000";
                    ctx.fillRect(0, 0, bitmapWidth, bitmapHeight);
                    ctx.fillStyle = "#fff";
                    ctx.beginPath();
                    landFeatures.features.forEach((f) => bitmapPathGenerator(f));
                    ctx.fill();
                    const pixels = ctx.getImageData(0, 0, bitmapWidth, bitmapHeight).data;
                    const isOnLand = (lng, lat) => {
                        const x = Math.round(((lng + 180) / 360) * bitmapWidth) % bitmapWidth;
                        const y = Math.round(((90 - lat) / 180) * bitmapHeight);
                        const cy = Math.max(0, Math.min(bitmapHeight - 1, y));
                        return pixels[(cy * bitmapWidth + x) * 4] > 128;
                    };

                    if (fill === "solid") {
                        const texW = 1024, texH = 512;
                        const fillCanvas = document.createElement("canvas");
                        fillCanvas.width = texW; fillCanvas.height = texH;
                        const fctx = fillCanvas.getContext("2d");
                        const img = fctx.createImageData(texW, texH);
                        const data = img.data;
                        const fr = Math.round(fillRgba.r * 255), fg = Math.round(fillRgba.g * 255), fb = Math.round(fillRgba.b * 255), fa = Math.round((fillRgba.a || 1) * 255);
                        for (let ty = 0; ty < texH; ty++) {
                            for (let tx = 0; tx < texW; tx++) {
                                let lng = ((tx / texW) - 0.25) * 360;
                                lng = ((((lng + 180) % 360) + 360) % 360) - 180;
                                const lat = ((ty / texH) - 0.5) * 180;
                                const onLand = allDots || isOnLand(lng, lat);
                                const idx = (ty * texW + tx) * 4;
                                if (onLand) { data[idx] = fr; data[idx + 1] = fg; data[idx + 2] = fb; data[idx + 3] = fa; }
                                else { data[idx + 3] = 0; }
                            }
                        }
                        fctx.putImageData(img, 0, 0);
                        const tex = new CanvasTexture(fillCanvas);
                        tex.flipY = false; tex.needsUpdate = true;
                        dotInstances = new Mesh(new SphereGeometry(globeRadius * 1.002, 64, 64), new MeshBasicMaterial({ map: tex, transparent: true }));
                        globeGroup.add(dotInstances);
                    } else {
                        const dotCoordinates = [];
                        const baseStep = dotSpacing * 0.08;
                        for (let lat = -90; lat <= 90; lat += baseStep) {
                            const cosLat = Math.cos((Math.abs(lat) * Math.PI) / 180);
                            const lngStep = cosLat > 0.01 ? baseStep / Math.max(0.3, cosLat) : 360;
                            for (let lng = -180; lng < 180; lng += lngStep) {
                                if (allDots || isOnLand(lng, lat)) dotCoordinates.push([lng, lat]);
                            }
                        }
                        if (dotCoordinates.length > 0) {
                            const geo = new SphereGeometry(0.01 * dotSizeMultiplier, 4, 4);
                            const mat = new MeshBasicMaterial({ color: resolvedDotColor ? new Color(resolvedDotColor) : new Color(0.6, 0.6, 0.6), transparent: dotRgba.a < 1 || dotRgba.a === 0, opacity: dotRgba.a });
                            const instanced = new InstancedMesh(geo, mat, dotCoordinates.length);
                            const matrix = new Matrix4();
                            dotCoordinates.forEach(([lng, lat], i) => {
                                const p = latLngToPosition(lat, lng);
                                matrix.makeScale(1, 1, 1);
                                matrix.setPosition(p.x * globeRadius, p.y * globeRadius, p.z * globeRadius);
                                instanced.setMatrixAt(i, matrix);
                            });
                            instanced.instanceMatrix.needsUpdate = true;
                            dotInstances = instanced;
                            globeGroup.add(dotInstances);
                        }
                    }

                    updateMarkers();
                    renderer.render(scene, camera);
                    setIsLoading(false);
                }
            } catch (err) {
                setError("Failed to load land map data");
                setIsLoading(false);
            }
        };

        // --- Animation ---
        const initialLongitudeRad = (initialLongitude * Math.PI) / 180;
        const initialLatitudeRad = (initialLatitude * Math.PI) / 180;
        const rotation = { x: initialLongitudeRad, y: initialLatitudeRad };
        const targetRotation = { x: initialLongitudeRad, y: initialLatitudeRad };
        const velocity = { x: 0, y: 0 };
        let isDragging = false;
        let isHovering = false;
        let lastMouseX = 0, lastMouseY = 0;
        let animationFrameId = null;
        const lerpFactor = smoothingN === 0 ? 1 : mapLinear(smoothingN, 0, 1, 0.4, 0.03);
        const velocityDecay = mapLinear(smoothingN, 0, 1, 0.7, 0.96);

        const animate = () => {
            let needsRender = false;
            const threshold = 0.01;
            if (!isDragging && rotationSpeed !== 0 && (!stopOnHover || !isHovering)) {
                targetRotation.x += rotationSpeed * 0.01;
            }
            if (!isDragging && smoothingN > 0) {
                if (Math.abs(velocity.x) > threshold || Math.abs(velocity.y) > threshold) {
                    targetRotation.x += velocity.x;
                    targetRotation.y += velocity.y;
                    targetRotation.y = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, targetRotation.y));
                    velocity.x *= velocityDecay;
                    velocity.y *= velocityDecay;
                } else { velocity.x = 0; velocity.y = 0; }
            }
            const dx = targetRotation.x - rotation.x;
            const dy = targetRotation.y - rotation.y;
            if (Math.abs(dx) > threshold || Math.abs(dy) > threshold || rotationSpeed !== 0 || isDragging) {
                rotation.x += dx * lerpFactor;
                rotation.y += dy * lerpFactor;
                rotation.y = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, rotation.y));
                needsRender = true;
            }
            if (needsRender || rotationSpeed !== 0 || isDragging) {
                globeGroup.rotation.y = rotation.x;
                globeGroup.rotation.x = rotation.y;
                renderer.render(scene, camera);
            }
            const hasVelocity = Math.abs(velocity.x) > threshold || Math.abs(velocity.y) > threshold;
            const hasLerpDelta = Math.abs(dx) > threshold || Math.abs(dy) > threshold;
            if (isDragging || rotationSpeed !== 0 || hasVelocity || hasLerpDelta) {
                animationFrameId = requestAnimationFrame(animate);
            } else { animationFrameId = null; }
        };

        const startAnimation = () => { if (animationFrameId === null) animationFrameId = requestAnimationFrame(animate); };
        if (rotationSpeed !== 0) startAnimation();

        // --- Mouse handlers ---
        const handleMouseDown = (event) => {
            isDragging = true; velocity.x = 0; velocity.y = 0;
            lastMouseX = event.clientX; lastMouseY = event.clientY;
            startAnimation();
            const handleMove = (e) => {
                const s = mapDragSpeedUiToSensitivity(dragSpeed);
                velocity.x = (e.clientX - lastMouseX) * s * 0.3;
                velocity.y = (e.clientY - lastMouseY) * s * 0.3;
                targetRotation.x += (e.clientX - lastMouseX) * s;
                targetRotation.y += (e.clientY - lastMouseY) * s;
                targetRotation.y = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, targetRotation.y));
                lastMouseX = e.clientX; lastMouseY = e.clientY;
            };
            const handleUp = () => { document.removeEventListener("mousemove", handleMove); document.removeEventListener("mouseup", handleUp); isDragging = false; };
            document.addEventListener("mousemove", handleMove);
            document.addEventListener("mouseup", handleUp);
        };
        canvas.addEventListener("mousedown", handleMouseDown);

        const raycaster = new Raycaster();
        const mouse = new Vector2();
        const handleMouseMove = (event) => {
            if (!stopOnHover) return;
            const rect = canvas.getBoundingClientRect();
            mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            isHovering = raycaster.intersectObject(oceanMesh).length > 0;
        };
        canvas.addEventListener("mousemove", handleMouseMove);

        // --- Resize ---
        const resizeObserver = new ResizeObserver(() => {
            const w = container.clientWidth || container.offsetWidth || 800;
            const h = container.clientHeight || container.offsetHeight || 600;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
            camera.position.set(0, 0, 2.5 / scaleMultiplier);
            camera.lookAt(0, 0, 0);
            renderer.render(scene, camera);
        });
        resizeObserver.observe(container);

        // --- Start ---
        loadWorldData();

        // --- Cleanup ---
        return () => {
            if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
            canvas.removeEventListener("mousedown", handleMouseDown);
            canvas.removeEventListener("mousemove", handleMouseMove);
            resizeObserver.disconnect();
            renderer.dispose();
            if (container.contains(canvas)) container.removeChild(canvas);
        };
    }, [
        speed, smoothing, smoothingN, dots, fill, fillColor, allDots, density, dotSize, dotColor,
        scale, stopOnHover, markerConfig, direction, initialLatitude, initialLongitude,
        oceanColor, outlineColor, showOutline, graticuleColor, showGrid, outlineWidth,
        dragSpeed, detail, rotationSpeed, dotSpacing, dotSizeMultiplier, markerRadiusMultiplier,
        scaleMultiplier,
    ]);

    const containerStyle = { ...style, position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" };

    if (error) {
        return (
            <div style={containerStyle}>
                <div style={{ position: "relative", width: "100%", height: "100%", minWidth: 0, minHeight: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#fff", textAlign: "center", padding: "16px", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
                    <div style={{ fontSize: "16px", fontWeight: 600 }}>Error loading Earth visualization</div>
                    <div style={{ fontSize: "13px", opacity: 0.7, marginTop: "4px" }}>{error}</div>
                </div>
            </div>
        );
    }

    return <div ref={containerRef} style={containerStyle} />;
}
