import { useMemo } from "react";
import Globe from "./globe";

// Preload land data on module import so it's ready when Globe mounts
const LAND_DATA_URL = "https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/50m/physical/ne_50m_land.json";
fetch(LAND_DATA_URL).catch(() => {});

const ACCENT = "#ff8a3d";

const GLOBE_DOTS = { color: ACCENT, size: 5, density: 8, allDots: false };
const GLOBE_STYLE = { width: "100%", height: "100%" };
const GLOBE_MARKERS = { markers: [], color: "#00f7ff", size: 40 };

export const MediaGlobe = () => {
  const dots = useMemo(() => GLOBE_DOTS, []);
  const style = useMemo(() => GLOBE_STYLE, []);
  const markerConfig = useMemo(() => GLOBE_MARKERS, []);

  return (
    <Globe
      scale={9.7}
      stopOnHover
      initialLatitude={23}
      initialLongitude={-23}
      fill="dots"
      dots={dots}
      showOutline
      outlineColor={ACCENT}
      showGrid
      graticuleColor={ACCENT}
      oceanColor="#101216"
      markerConfig={markerConfig}
      style={style}
    />
  );
};
