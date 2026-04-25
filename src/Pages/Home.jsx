import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import logo from "../assets/img/logo.png";
import portrait from "../assets/img/Barron-transparent.png";
import cv from "../assets/img/Jean-Barron E. ALOKPON CV 2025.pdf";
import {
  content,
  navigation,
  renderBadgeParts,
  renderSocialIcon,
  socials,
} from "../data/homeContent";

const Home = () => {
  const { lang } = useParams();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectPage, setProjectPage] = useState(0);
  const [serviceIndex, setServiceIndex] = useState(1);
  const [footerHeight, setFooterHeight] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const footerRef = useRef(null);
  
  const locale = (lang === 'en' || lang === 'fr') ? lang : 'fr';

  const t = content[locale];
  const navItems = navigation[locale];
  const projectsPerPage = 2;
  const pageCount = Math.ceil(t.projects.length / projectsPerPage);
  const currentProjects = t.projects.slice(
    projectPage * projectsPerPage,
    projectPage * projectsPerPage + projectsPerPage
  );
  const featuredProject = currentProjects[0] || t.projects[0];
  const activeService = t.services[serviceIndex];
  const previousServiceIndex =
    (serviceIndex - 1 + t.services.length) % t.services.length;
  const nextServiceIndex = (serviceIndex + 1) % t.services.length;
  const getServiceOffset = (index) => {
    if (index === serviceIndex) return 0;
    if (index === previousServiceIndex) return -1;
    if (index === nextServiceIndex) return 1;
    return 2;
  };

  useEffect(() => {
    const updateFooterHeight = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
      if (!footerRef.current) return;
      setFooterHeight(desktop ? footerRef.current.offsetHeight : 0);
    };

    updateFooterHeight();

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => updateFooterHeight())
        : null;

    if (footerRef.current && resizeObserver) {
      resizeObserver.observe(footerRef.current);
    }

    window.addEventListener("resize", updateFooterHeight);

    return () => {
      window.removeEventListener("resize", updateFooterHeight);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  const ArrowUpRightIcon = ({ className = "h-4 w-4" }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );

  const ArrowLeftIcon = ({ className = "h-4 w-4" }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </svg>
  );

  const ArrowRightIcon = ({ className = "h-4 w-4" }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );

  const StarIcon = ({ className = "h-5 w-5" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="m12 3.8 2.5 5.1 5.6.8-4 3.9.9 5.5-5-2.6-5 2.6.9-5.5-4-3.9 5.6-.8L12 3.8Z" />
    </svg>
  );

  return (
    <>
    <main
      id="home"
      className="portfolio-shell relative z-10 bg-[#f8fafc] text-slate-800"
      style={{ marginBottom: isDesktop && footerHeight ? `${footerHeight}px` : undefined }}
    >
      <Analytics />

      <section className="px-4 pb-2 pt-4 sm:px-6 sm:pt-6 lg:px-8">
        <nav className="fixed left-4 right-4 top-4 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-[1.7rem] bg-[#1f1f1f]/95 px-3 py-3 text-white shadow-[0_18px_60px_rgba(15,23,42,0.12)] backdrop-blur-md sm:left-6 sm:right-6 sm:top-6 sm:rounded-[1.9rem] sm:px-6 lg:left-1/2 lg:right-auto lg:w-[calc(100%-4rem)] lg:-translate-x-1/2">
          <a href={`/${locale}#home`} className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo Jean-Barron"
              className="h-10 w-10 rounded-full bg-white/10 p-1 sm:h-11 sm:w-11"
            />
            <div>
              <span className="font-display text-base font-bold sm:text-lg">JeanBarron</span>
              <p className="hidden text-xs text-white/55 sm:block">{t.brandRole}</p>
            </div>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={`/${locale}${item.href}`}
                className={`rounded-full px-6 py-3 text-[15px] transition ${
                  index === 0
                    ? "bg-[#ff8a3d] font-semibold text-white"
                    : "text-white/80 hover:bg-white/8 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden rounded-full border border-white/10 bg-white/5 p-1 sm:flex">
              {["fr", "en"].map((lang) => (
                <button
                  key={lang}
                  type="button"
                  className={`rounded-full px-3 py-2 text-xs font-semibold uppercase transition ${
                    locale === lang
                      ? "bg-[#ff8a3d] text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                  onClick={() => navigate(`/${lang}${window.location.hash}`)}
                >
                  {lang}
                </button>
              ))}
            </div>
            <a
              href={`/${locale}#contact`}
              className="hidden items-center gap-2 rounded-full bg-[#ff8a3d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#f97822] sm:inline-flex"
            >
              {t.hireMe}
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 lg:hidden"
              aria-label="Open menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="space-y-1.5">
                <span className="block h-0.5 w-5 rounded-full bg-white" />
                <span className="block h-0.5 w-5 rounded-full bg-white" />
                <span className="block h-0.5 w-5 rounded-full bg-white" />
              </span>
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="fixed left-4 right-4 top-[5.4rem] z-40 mx-auto max-w-6xl rounded-[1.9rem] border border-slate-200 bg-white p-4 shadow-xl sm:left-6 sm:right-6 sm:top-[6.2rem] lg:hidden">
            <div className="mb-3 flex rounded-full bg-slate-100 p-1">
              {["fr", "en"].map((lang) => (
                <button
                  key={lang}
                  type="button"
                  className={`flex-1 rounded-full px-3 py-2 text-xs font-semibold uppercase transition ${
                    locale === lang
                      ? "bg-[#ff8a3d] text-white"
                      : "text-slate-600"
                  }`}
                  onClick={() => navigate(`/${lang}${window.location.hash}`)}
                >
                  {lang}
                </button>
              ))}
            </div>
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={`/${locale}${item.href}`}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-orange-50 hover:text-orange-600"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </section>

      <div className="h-[5.9rem] sm:h-[6.9rem]" />

      <section className="relative overflow-hidden px-4 pb-10 pt-8 sm:px-6 lg:px-8">
        <div className="hero-blob hero-blob-left" />
        <div className="hero-blob hero-blob-right" />
        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[0.78fr_1.44fr_0.78fr] lg:gap-6">
          <div className="order-2 hidden pt-10 md:block lg:order-1 lg:pt-[18rem]">
            <div className="max-w-[16rem]">
              <div className="mb-4 text-[#34425d]">
                <span className="font-display text-5xl leading-none">“</span>
              </div>
              <p className="text-[1.05rem] leading-8 text-slate-700">{t.heroLead}</p>
            </div>
            <span className="hero-doodle hero-doodle-left hidden lg:block" />
          </div>

          <div className="order-1 text-center lg:order-2">
            <span className="mb-4 inline-flex rounded-full border border-slate-900/60 px-5 py-2 text-sm font-medium text-slate-800">
              {t.hello}
            </span>
            <div className="relative mx-auto mt-2 flex max-w-[520px] flex-col items-center">
              <h1 className="pointer-events-none relative z-0 max-w-[18rem] font-display text-[1.5rem] font-extrabold leading-[0.98] tracking-[-0.05em] text-[#111111] sm:max-w-[22rem] sm:text-[1.95rem] md:max-w-[24rem] md:text-[2.3rem] lg:max-w-[30rem] lg:text-[3.25rem]">
                <span className="block">{t.heroTitlePrefix}</span>
                <span className="block whitespace-nowrap text-[#ff8a3d]">{t.heroTitleName},</span>
                <span className="block">{t.heroTitleSuffix}</span>
              </h1>

              <div className="relative z-10 -mt-3 flex w-full max-w-[330px] items-end justify-center sm:-mt-6 sm:max-w-[390px] md:max-w-[450px] lg:-mt-12">
                <span className="hero-doodle hero-doodle-top hidden lg:block" />
                <div className="absolute inset-x-0 bottom-0 h-[70%] rounded-t-[999px] bg-[#ffb97a]" />
                <img
                  src={portrait}
                  alt="Jean-Barron portrait"
                  className="relative z-10 max-h-[360px] object-contain drop-shadow-[0_24px_80px_rgba(15,23,42,0.16)] sm:max-h-[430px] lg:max-h-[520px]"
                />
                <div className="absolute bottom-4 left-1/2 z-20 flex w-[92%] -translate-x-1/2 flex-col rounded-[1.8rem] border border-white/50 bg-[#d76f32]/35 p-2 text-white shadow-[0_18px_60px_rgba(255,138,61,0.24)] backdrop-blur-md sm:bottom-6 sm:w-[82%] sm:flex-row sm:rounded-full">
                  <a
                    href={`/${locale}#portfolio`}
                    className="flex-1 rounded-full bg-[#ff8a3d] px-4 py-3 text-sm font-semibold transition hover:bg-[#f97822] sm:px-5"
                  >
                    <span className="inline-flex items-center gap-2">
                      {t.heroPrimaryCta}
                      <ArrowUpRightIcon className="h-4 w-4" />
                    </span>
                  </a>
                  <a
                    href={`/${locale}#contact`}
                    className="flex-1 rounded-full px-4 py-3 text-sm font-semibold transition hover:bg-white/10 sm:px-5"
                  >
                    {t.heroSecondaryCta}
                  </a>
                </div>
              </div>

              <div className="mt-6 grid w-full max-w-[26rem] grid-cols-1 gap-5 text-left md:hidden">
                <div className="mx-auto w-full max-w-[18rem]">
                  <div className="mb-3 text-[#34425d]">
                    <span className="font-display text-4xl leading-none">“</span>
                  </div>
                  <p className="text-[0.98rem] leading-7 text-slate-700">
                    {t.heroLead}
                  </p>
                </div>
                <div className="mx-auto w-full max-w-[18rem]">
                  <div className="mb-3 flex items-center gap-1 text-xl text-[#ff8a3d]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <StarIcon key={index} className="h-5 w-5" />
                    ))}
                  </div>
                  <p className="font-display text-3xl font-extrabold tracking-[-0.05em] text-[#111111]">
                    4+
                  </p>
                  <p className="mt-1 text-base font-medium leading-6 text-[#34425d]">
                    {t.heroExperience}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-3 hidden pt-10 md:block lg:flex lg:justify-end lg:pt-[18rem]">
            <div className="text-left lg:text-right">
              <div className="mb-4 flex items-center gap-1 text-2xl text-[#ff8a3d] lg:justify-end">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} className="h-6 w-6" />
                ))}
              </div>
              <p className="font-display text-4xl font-extrabold tracking-[-0.05em] text-[#111111] sm:text-[3.3rem]">
                4+
              </p>
              <p className="mt-1 text-base font-medium leading-6 text-[#34425d]">
                {t.heroExperience}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.2rem] bg-[#edf1f7] p-6 sm:gap-10 sm:rounded-[2.8rem] sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
          <div className="relative flex items-end justify-center">
            <div className="absolute bottom-8 h-[68%] w-[62%] rounded-[3rem] bg-[#ffb97a]" />
            <img
              src={portrait}
              alt="Jean-Barron"
              className="relative z-10 max-h-[360px] object-contain drop-shadow-[0_20px_70px_rgba(15,23,42,0.14)] sm:max-h-[460px] lg:max-h-[520px]"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm text-slate-400">{t.aboutDate}</p>
            <h2 className="mt-5 font-display text-[1.9rem] font-extrabold leading-[1.06] tracking-[-0.05em] text-[#34425d] sm:mt-6 sm:text-[2.5rem] lg:text-[3.4rem]">
              {t.aboutTitlePrefix}{" "}
              <span className="text-[#ff8a3d]">{t.aboutTitleAccent}</span>
              {t.aboutTitleSuffix}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-500 sm:mt-6 sm:text-lg sm:leading-8">
              {t.aboutText}
            </p>

            <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2">
              {t.metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="font-display text-4xl font-bold text-[#34425d] sm:text-5xl">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-lg text-slate-500 sm:text-xl">{metric.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-10">
              <a
                href={cv}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-[1.5rem] border border-slate-400 px-7 py-4 text-base font-semibold text-slate-900 transition hover:border-[#ff8a3d] hover:text-[#ff8a3d] sm:rounded-[1.8rem] sm:px-10 sm:py-5 sm:text-xl"
              >
                {t.aboutButton}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="dark-surface mx-4 mt-10 overflow-hidden rounded-[2.3rem] px-4 py-12 text-white sm:mx-6 sm:rounded-[3rem] sm:px-8 sm:py-14 lg:mx-8 lg:px-12"
      >
        <div className="surface-glow surface-glow-left" />
        <div className="surface-glow surface-glow-right" />
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -left-12 top-0 h-48 w-48 rounded-full bg-[#ff8a3d]/30 blur-3xl" />
          <div className="absolute right-0 top-14 h-56 w-56 rounded-full bg-[#ffd3a4]/20 blur-3xl" />
          <div className="absolute -bottom-10 left-[12%] h-56 w-56 rounded-full bg-[#ff8a3d]/16 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,transparent_46%,rgba(255,255,255,0.08)_46.5%,transparent_47%,transparent_100%)] bg-[length:38px_38px]" />
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            <h2 className="font-display text-[1.9rem] font-extrabold leading-[1.06] tracking-[-0.05em] sm:text-[2.4rem] lg:text-[3.1rem]">
              {t.servicesTitlePrefix}{" "}
              <span className="text-[#ff8a3d]">{t.servicesTitleAccent}</span>
            </h2>
            <p className="max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              {t.servicesText}
            </p>
          </div>

          <div className="mt-10 sm:mt-14">
            <div className="relative mx-auto flex min-h-[31rem] max-w-6xl items-center justify-center sm:min-h-[35rem] lg:min-h-[31rem]">
              {t.services.map((service, index) => {
                const offset = getServiceOffset(index);
                const isActive = offset === 0;

                return (
                  <article
                    key={service.title}
                    className={`glass-card group absolute w-full max-w-[16.8rem] overflow-hidden rounded-[2rem] border border-white/40 transition duration-500 sm:max-w-[20rem] sm:rounded-[2.2rem] lg:max-w-[19rem] ${
                      isActive
                        ? "z-30 scale-100 opacity-100"
                        : offset === -1
                          ? "z-20 hidden scale-[0.92] opacity-75 lg:block lg:-translate-x-[96%]"
                          : offset === 1
                            ? "z-20 hidden scale-[0.92] opacity-75 lg:block lg:translate-x-[96%]"
                            : "pointer-events-none hidden opacity-0"
                    }`}
                    style={{
                      transform:
                        isActive || typeof globalThis === "undefined"
                          ? undefined
                          : offset === -1
                            ? "translateX(-96%) scale(0.92)"
                            : offset === 1
                              ? "translateX(96%) scale(0.92)"
                              : "scale(0.8)",
                    }}
                  >
                    <div className="border-b border-white/20 px-5 py-5 sm:px-7 sm:py-6">
                      <h3 className="font-display text-[1.45rem] font-bold tracking-[-0.045em] text-white sm:text-[1.9rem]">
                        {service.title}
                      </h3>
                    </div>

                    <div className="relative px-4 pb-4 pt-8 sm:px-5 sm:pb-5 sm:pt-9">
                      <div className="absolute left-1/2 top-6 h-6 w-[82%] -translate-x-1/2 rounded-[999px] bg-white/18" />
                      <div className="absolute left-1/2 top-9 h-7 w-[88%] -translate-x-1/2 rounded-[999px] bg-white/28" />
                      <div className="relative rounded-[2rem] bg-[#f8f4ef] p-3 shadow-[0_25px_60px_rgba(0,0,0,0.28)]">
                        <div className="overflow-hidden rounded-[1.65rem] bg-white">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="h-[10rem] w-full object-cover object-top sm:h-[13rem]"
                          />
                        </div>
                        <a
                          href={service.link}
                          target="_blank"
                          rel="noreferrer"
                          className="absolute bottom-0 right-0 inline-flex h-16 w-16 translate-x-1 translate-y-2 items-center justify-center rounded-full bg-[#192742] text-[2rem] font-light text-white transition hover:bg-[#ff8a3d] sm:h-20 sm:w-20 sm:translate-x-2 sm:translate-y-3 sm:text-[2.6rem]"
                          aria-label={service.title}
                        >
                          <ArrowUpRightIcon className="h-8 w-8 sm:h-10 sm:w-10" />
                        </a>
                      </div>

                      <p className="mt-4 max-w-[85%] text-sm leading-6 text-white/72 sm:mt-5 sm:leading-7">
                        {service.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-5 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setServiceIndex(previousServiceIndex)}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/8 text-2xl text-white transition hover:border-[#ff8a3d] hover:text-[#ff8a3d]"
                aria-label="Previous service"
              >
                <ArrowLeftIcon className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-3">
                {t.services.map((service, index) => (
                  <button
                    key={service.title}
                    type="button"
                    onClick={() => setServiceIndex(index)}
                    className={`h-3 rounded-full transition ${
                      serviceIndex === index
                        ? "w-10 bg-[#ff8a3d]"
                        : "w-3 bg-white/60 hover:bg-white"
                    }`}
                    aria-label={service.title}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setServiceIndex(nextServiceIndex)}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/8 text-2xl text-white transition hover:border-[#ff8a3d] hover:text-[#ff8a3d]"
                aria-label="Next service"
              >
                <ArrowRightIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 text-center text-sm text-white/55">
              {activeService.title}
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start gap-6">
            <h2 className="max-w-xl font-display text-[1.9rem] font-extrabold leading-[1.06] tracking-[-0.05em] text-[#34425d] sm:text-[2.4rem] lg:text-[3.1rem]">
              {t.portfolioTitlePrefix} {t.portfolioTitleMiddle}{" "}
              <span className="text-[#ff8a3d]">{t.portfolioTitleAccent}</span>
            </h2>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {currentProjects.map((project) => (
              <article key={project.title} className="group">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="relative block overflow-hidden rounded-[1.6rem] bg-[#eef1f5] p-3 shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:rounded-[2rem] sm:p-4"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[15rem] w-full rounded-[1.2rem] object-cover transition duration-500 group-hover:scale-[1.02] sm:h-[20rem] sm:rounded-[1.6rem]"
                  />
                  <span className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#ff8a3d] bg-white/90 text-2xl text-[#ff8a3d] sm:right-7 sm:top-7 sm:h-14 sm:w-14 sm:text-3xl">
                    <ArrowUpRightIcon className="h-5 w-5 sm:h-7 sm:w-7" />
                  </span>
                  <span className="absolute bottom-5 left-5 font-display text-[2rem] font-bold tracking-[-0.05em] text-white sm:bottom-6 sm:left-6 sm:text-[2.8rem]">
                    {project.shortTitle}
                  </span>
                </a>
              </article>
            ))}
          </div>

          <div className="mt-7 flex items-center justify-center gap-3" aria-label={t.paginationLabel}>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-lg text-slate-700 transition hover:border-[#ff8a3d] hover:text-[#ff8a3d] disabled:cursor-not-allowed disabled:opacity-40"
              onClick={() => setProjectPage((page) => Math.max(0, page - 1))}
              disabled={projectPage === 0}
            >
              <ArrowLeftIcon className="h-4 w-4" />
            </button>
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                key={index}
                type="button"
                className={`h-3 rounded-full transition ${
                  projectPage === index
                    ? "w-10 bg-[#ff8a3d]"
                    : "w-3 bg-slate-200 hover:bg-slate-300"
                }`}
                onClick={() => setProjectPage(index)}
                aria-label={`${t.paginationLabel} ${index + 1}`}
              />
            ))}
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-lg text-slate-700 transition hover:border-[#ff8a3d] hover:text-[#ff8a3d] disabled:cursor-not-allowed disabled:opacity-40"
              onClick={() =>
                setProjectPage((page) => Math.min(pageCount - 1, page + 1))
              }
              disabled={projectPage === pageCount - 1}
            >
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {featuredProject.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#edf1f7] px-6 py-3 text-base text-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
              {t.featuredProjectLabel}
            </p>
            <a
              href={featuredProject.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-wrap items-center justify-center gap-3 font-display text-[1.45rem] font-bold leading-[1.08] tracking-[-0.05em] text-[#34425d] sm:gap-4 sm:text-[2.1rem] lg:text-[2.55rem]"
            >
              {featuredProject.title}
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#ff8a3d] text-white sm:h-14 sm:w-14">
                <ArrowUpRightIcon className="h-5 w-5 sm:h-7 sm:w-7" />
              </span>
            </a>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              {featuredProject.description}
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl p-2 lg:p-4">
          <h2 className="mb-10 text-center font-display text-[1.9rem] font-extrabold leading-[1.06] tracking-[-0.05em] text-[#34425d] sm:mb-12 sm:text-[2.4rem] lg:text-[3.1rem]">
            {t.experienceTitlePrefix}{" "}
            <span className="text-[#ff8a3d]">{t.experienceTitleAccent}</span>
          </h2>

          <div className="space-y-12 lg:hidden">
            {t.experiences.map((item, index) => (
              <article key={`${item.company}-${item.period}`} className="rounded-[1.5rem] bg-[#f7f8fb] p-5 sm:rounded-[1.75rem] sm:p-6">
                <div className="flex items-center gap-3">
                  <span
                    className={`block h-5 w-5 rounded-full border-[3px] border-white shadow-[0_0_0_2px_rgba(52,66,93,0.78)] ${
                      index === 1 ? "bg-[#1f2f49]" : "bg-[#ff8a3d]"
                    }`}
                  />
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-400">
                    {item.period}
                  </p>
                </div>
                <h3 className="mt-5 font-display text-[1.35rem] font-bold leading-[1.12] tracking-[-0.04em] text-[#34425d] sm:text-[1.55rem]">
                  {item.company}
                </h3>
                <h4 className="mt-4 font-display text-[1.28rem] font-bold leading-[1.12] tracking-[-0.04em] text-[#34425d] sm:mt-5 sm:text-[1.5rem]">
                  {item.role}
                </h4>
                <p className="mt-3 text-[0.98rem] leading-7 text-slate-500">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <div className="relative hidden lg:block">
            <div className="space-y-14">
              {t.experiences.map((item, index) => {
                const active = index === 1;
                return (
                  <article
                    key={`${item.company}-${item.period}`}
                    className="grid grid-cols-[1fr_110px_1fr] items-start gap-6"
                  >
                    <div className="pr-4">
                      <h3 className="font-display text-[1.7rem] font-bold leading-[1.1] tracking-[-0.04em] text-[#34425d]">
                        {item.company}
                      </h3>
                      <p className="mt-2 text-[1.02rem] leading-7 text-slate-400">
                        {item.period}
                      </p>
                    </div>

                    <div className="relative flex justify-center pt-2">
                      {index < t.experiences.length - 1 && (
                        <span className="pointer-events-none absolute left-1/2 top-[2.12rem] bottom-[-7.35rem] w-[2px] -translate-x-1/2 bg-[repeating-linear-gradient(to_bottom,#34425d_0_8px,transparent_8px_12px)]" />
                      )}
                      <span
                        className={`relative z-10 block h-9 w-9 rounded-full border-[5px] border-white shadow-[0_0_0_2px_rgba(52,66,93,0.85)] ${
                          active ? "bg-[#1f2f49]" : "bg-[#ff8a3d]"
                        }`}
                      />
                    </div>

                    <div className="pl-4">
                      <h3 className="max-w-[27rem] font-display text-[1.72rem] font-bold leading-[1.08] tracking-[-0.04em] text-[#34425d]">
                        {item.role}
                      </h3>
                      <p className="mt-3 max-w-[29rem] text-[1rem] leading-7 text-slate-500">
                        {item.text}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="dark-surface mx-4 mt-10 overflow-hidden rounded-[2.3rem] px-4 py-12 text-white sm:mx-6 sm:rounded-[3rem] sm:px-8 sm:py-16 lg:mx-8 lg:px-12">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-display text-[1.9rem] font-extrabold leading-[1.06] tracking-[-0.05em] sm:text-[2.4rem] lg:text-[3.1rem]">
            {t.testimonialsTitleTop}
            <span className="block">
              <span className="text-[#ff8a3d]">{t.testimonialsTitleBottom}</span>
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/80 sm:mt-6 sm:text-lg sm:leading-8">
            {t.testimonialsText}
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {t.testimonials.map((item) => (
              <article
                key={item.name + item.role}
                className="glass-card rounded-[1.7rem] p-5 text-left sm:rounded-[2rem] sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-display text-xl font-bold tracking-[-0.03em] sm:text-2xl">
                      {item.name}
                    </p>
                    <p className="text-white/70">{item.role}</p>
                  </div>
                  <span className="text-5xl leading-none text-white/20 sm:text-6xl">”</span>
                </div>
                <div className="mt-4 inline-flex items-center gap-1 text-[#ff8a3d]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon key={index} className="h-4 w-4" />
                  ))}
                  <span className="ml-1 text-sm font-medium">5.0</span>
                </div>
                <p className="mt-5 text-[0.98rem] leading-7 text-white/78 sm:text-base sm:leading-8">
                  {item.quote}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-display text-[1.9rem] font-extrabold leading-[1.06] tracking-[-0.05em] text-[#34425d] sm:text-[2.4rem] lg:text-[3.1rem]">
            {t.contactTitleTop}
            <span className="block">
              <span className="text-[#ff8a3d]">{t.contactTitleBottom}</span>
            </span>
          </h2>

          <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-3 rounded-[1.8rem] border border-slate-200 bg-white p-3 shadow-[0_15px_45px_rgba(15,23,42,0.08)] sm:mt-10 sm:flex-row sm:gap-4 sm:rounded-full">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center self-center rounded-full bg-[#ffcfab] text-[#ff8a3d] sm:h-14 sm:w-14">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 sm:h-6 sm:w-6"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </div>
            <input
              type="email"
              placeholder={t.emailPlaceholder}
              className="h-12 flex-1 rounded-full bg-transparent px-3 text-base text-slate-700 placeholder:text-slate-400 focus:outline-none sm:h-14 sm:px-2"
            />
            <a
              href="mailto:jeanbarronalokpon@gmail.com"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#ff8a3d] px-8 text-base font-semibold text-white transition hover:bg-[#f97822] sm:h-14 sm:px-10 sm:text-lg"
            >
              {t.send}
            </a>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-700 sm:gap-8">
            {t.contactBadges.map((badge) => {
              const { icon, text } = renderBadgeParts(badge);
              return (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 rounded-full bg-[#f7f8fb] px-4 py-2 text-left"
                >
                  <span className="text-base leading-none text-[#ff8a3d]">{icon}</span>
                  <span>{text}</span>
                </span>
              );
            })}
          </div>
        </div>

        <div className="marquee-band mt-16">
          <div className="marquee-track">
            <span>{t.marquee}</span>
            <span>{t.marquee}</span>
          </div>
        </div>
      </section>

    </main>

      <footer
        ref={footerRef}
        className="relative px-4 pb-6 pt-6 sm:px-6 sm:pb-8 sm:pt-8 lg:fixed lg:bottom-0 lg:left-0 lg:right-0 lg:z-0 lg:px-8 lg:pb-8 lg:pt-0"
      >
        <div className="mx-auto max-w-7xl rounded-[2.1rem] bg-[#262626] px-5 py-8 text-white sm:rounded-[2.6rem] sm:px-10 sm:py-10">
          <div className="flex flex-col gap-8 border-b border-white/12 pb-8 lg:flex-row lg:items-start lg:justify-between">
            <h2 className="font-display text-[1.9rem] font-extrabold leading-[1.06] tracking-[-0.05em] sm:text-[2.4rem] lg:text-[3.1rem]">
              {t.footerTitle}
            </h2>
            <a
              href="mailto:jeanbarronalokpon@gmail.com"
              className="inline-flex self-start items-center gap-2 rounded-full bg-[#ff8a3d] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#f97822] sm:px-8 sm:py-4 sm:text-lg"
            >
              {t.hireMe}
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-10 py-10 lg:grid-cols-[1.2fr_0.6fr_0.7fr_0.9fr]">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Logo Jean-Barron"
                  className="h-10 w-10 rounded-full bg-white/10 p-1 sm:h-11 sm:w-11"
                />
                <span className="font-display text-[1.7rem] font-bold sm:text-3xl">JBCREA</span>
              </div>
              <p className="mt-5 max-w-md text-base leading-7 text-white/72 sm:mt-6 sm:text-lg sm:leading-8">
                {t.footerDescription}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white transition hover:border-[#ff8a3d] hover:bg-[#ff8a3d]"
                    aria-label={social.label}
                    title={social.label}
                  >
                    {renderSocialIcon(social.type)}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#ff8a3d]">
                {t.footerNavigation}
              </h3>
              <div className="mt-5 grid gap-3 text-white/75">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="hover:text-white">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#ff8a3d]">
                {t.footerContact}
              </h3>
              <div className="mt-5 grid gap-3 text-white/75">
                <a href="tel:+22961225071">+229 61 22 50 71</a>
                <a href="mailto:jeanbarronalokpon@gmail.com">
                  jeanbarronalokpon@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/jean-barron-alokpon"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/jean-barron-alokpon
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#ff8a3d]">
                {t.footerNews}
              </h3>
              <div className="mt-5 flex overflow-hidden rounded-[1.2rem] bg-white sm:rounded-full">
                <input
                  type="email"
                  placeholder={t.footerEmailPlaceholder}
                  className="h-12 flex-1 px-4 text-slate-700 focus:outline-none sm:h-14 sm:px-5"
                />
                <a
                  href="mailto:jeanbarronalokpon@gmail.com"
                  className="inline-flex h-12 w-14 items-center justify-center bg-[#ff8a3d] text-xl text-white sm:h-14 sm:w-16 sm:text-2xl"
                >
                  <ArrowRightIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-white/12 pt-6 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between">
            <p>{t.footerCopyright}</p>
            <div className="flex gap-4">
              <span>{t.footerTerms}</span>
              <span>{t.footerPrivacy}</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
