import React, { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import logo from "../assets/img/logo.png";
import portrait from "../assets/img/Barron-transparent.png";
import cv from "../assets/img/Jean-Barron E. ALOKPON CV 2025.pdf";
import vitrine from "../assets/img/vitrine.png";
import landing from "../assets/img/landing page.png";
import cargo from "../assets/img/cargo.png";
import carte from "../assets/img/carte.png";
import ballamas from "../assets/img/ballamas.png";
import tokena from "../assets/img/tokena.png";

const navigation = {
  fr: [
    { label: "Accueil", href: "#home" },
    { label: "À propos", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Parcours", href: "#experience" },
    { label: "Projets", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ],
  en: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Resume", href: "#experience" },
    { label: "Projects", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ],
};

const socials = [
  { label: "GitHub", href: "https://github.com/Barronakn", type: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jean-barron-alokpon",
    type: "linkedin",
  },
  {
    label: "Email",
    href: "mailto:jeanbarronalokpon@gmail.com",
    type: "mail",
  },
  { label: "WhatsApp", href: "https://wa.me/22961225071", type: "whatsapp" },
];

const content = {
  fr: {
    brandRole: "Développeur web",
    hireMe: "Me contacter ↗",
    hello: "Bonjour !",
    heroLead:
      "Je conçois des interfaces élégantes et je développe des sites web modernes avec une vraie attention au rendu final.",
    heroTitlePrefix: "Je suis",
    heroTitleName: "Jean-Barron",
    heroTitleSuffix: "développeur web",
    heroPrimaryCta: "Voir le portfolio ↗",
    heroSecondaryCta: "Me contacter",
    heroExperience: "Années d'expérience",
    aboutDate: "Avr 2026",
    aboutTitlePrefix: "Pourquoi",
    aboutTitleAccent: "m'engager",
    aboutTitleSuffix: "?",
    aboutText:
      "Je transforme une idée ou un site existant en une interface plus nette, plus premium et plus cohérente. Mon travail mélange design visuel, structure produit et intégration front-end propre.",
    aboutButton: "Voir mon CV",
    metrics: [
      { value: "12+", label: "Projets livrés" },
      { value: "04", label: "Années à coder pour le web" },
    ],
    servicesTitlePrefix: "Mes",
    servicesTitleAccent: "services",
    servicesText:
      "Des interfaces soignées, des landing pages plus fortes et des refontes qui donnent immédiatement un meilleur niveau perçu à un produit ou à une marque.",
    services: [
      {
        title: "UI / UX Design",
        description:
          "Des interfaces claires, modernes et crédibles pour renforcer l'image de ton projet.",
        image: vitrine,
        link: "https://comeup.com/fr/service/444767/creer-votre-site-web-vitrine-sur-mesure",
      },
      {
        title: "Web Design",
        description:
          "Une direction visuelle complète avec structure, hiérarchie et détails premium.",
        image: cargo,
        link: "https://grhtlgroup.com/",
      },
      {
        title: "Landing Page",
        description:
          "Des pages orientées conversion, pensées pour vendre une offre, un service ou un produit.",
        image: landing,
        link: "https://comeup.com/fr/service/436678/creer-votre-landing-page-professionnel-et-sur-mesure",
      },
    ],
    portfolioTitlePrefix: "Découvre",
    portfolioTitleMiddle: "mon",
    portfolioTitleAccent: "portfolio",
    paginationLabel: "Pagination projets",
    featuredProjectLabel: "Projet mis en avant",
    projects: [
      {
        title: "Lirante - Solution de livraison",
        shortTitle: "Lirante",
        description:
          "Une interface produit pensée pour présenter clairement une expérience moderne et engageante.",
        image: tokena,
        link: "https://figma-to-code-ed2-week-three.vercel.app/dashboard",
        tags: ["Landing Page", "Product Design", "Animation", "Glassmorphism"],
      },
      {
        title: "Carte MonGo Patrimoine",
        shortTitle: "MonGo",
        description:
          "Un projet orienté produit avec une structure visuelle lisible et une navigation fonctionnelle.",
        image: carte,
        link: "https://carte.mongopatrimoine.com/",
        tags: ["Dashboard", "Cards", "UI System"],
      },
      {
        title: "Ballamas",
        shortTitle: "Ballamas",
        description:
          "Un exercice Figma to code avec une attention particulière portée à la fidélité et au rythme visuel.",
        image: ballamas,
        link: "https://figma-to-code-ed2-week-two.vercel.app/",
        tags: ["Figma to Code", "Responsive", "Visual Design"],
      },
      {
        title: "Site vitrine sur mesure",
        shortTitle: "Vitrine",
        description:
          "Un travail plus orienté présentation de marque, hiérarchie de contenu et clarté commerciale.",
        image: vitrine,
        link: "https://comeup.com/fr/service/444767/creer-votre-site-web-vitrine-sur-mesure",
        tags: ["Branding", "Site vitrine", "Conversion"],
      },
    ],
    experienceTitlePrefix: "Mon",
    experienceTitleAccent: "parcours",
    experiences: [
      {
        period: "2025 - Aujourd'hui",
        company: "Freelance, Bénin",
        role: "Développeur web & designer d'interface",
        text: "Création de portfolios, landing pages et sites vitrines sur mesure avec un focus sur l'expérience et la lisibilité.",
      },
      {
        period: "2024 - 2025",
        company: "Projets clients & personnels",
        role: "Designer UI / UX",
        text: "Conception d'interfaces modernes, maquettes produits et intégrations web responsives pour différents cas d'usage.",
      },
      {
        period: "2023 - 2024",
        company: "Autoformation intensive",
        role: "Développeur front-end",
        text: "Montée en compétence continue sur React, Next.js, Tailwind CSS, PHP et Laravel avec des projets concrets.",
      },
    ],
    testimonialsTitleTop: "Des témoignages qui",
    testimonialsTitleBottom: "parlent de mes résultats",
    testimonialsText:
      "Quelques retours qui résument mon approche : plus de clarté, un rendu plus propre et une direction visuelle qui fait tout de suite plus sérieuse.",
    testimonials: [
      {
        name: "Client freelance",
        role: "Site vitrine",
        quote:
          "Très bon sens du détail, une vraie progression sur la qualité visuelle et une exécution propre.",
      },
      {
        name: "Projet produit",
        role: "Dashboard",
        quote:
          "Le résultat est plus premium, mieux structuré et plus rassurant que la version initiale.",
      },
      {
        name: "Collaboration créative",
        role: "Landing page",
        quote:
          "Bonne compréhension du besoin, propositions visuelles pertinentes et intégration responsive réussie.",
      },
    ],
    contactTitleTop: "Tu as un projet",
    contactTitleBottom: "Parlons-en",
    emailPlaceholder: "Entre ton adresse email",
    send: "Envoyer",
    contactBadges: [
      "★ 4.9/5 avis moyens",
      "◉ Front-end responsive",
      "◈ Approche design produit",
    ],
    marquee:
      "UX Research ✦ UI Design ✦ App Design ✦ Dashboard ✦ Wireframe ✦ Landing Page ✦ Glassmorphism ✦ Responsive Web ✦",
    footerTitle: "Restons en contact",
    footerDescription:
      "Développeur web full-stack. Je crée des expériences visuelles plus fortes pour les projets qui veulent sortir du lot.",
    footerNavigation: "Navigation",
    footerContact: "Contact",
    footerNews: "Recevoir les dernières infos",
    footerEmailPlaceholder: "Adresse email",
    footerCopyright:
      "Copyright© 2026 Jean-Barron ALOKPON. Tous droits réservés.",
    footerTerms: "Conditions d'utilisation",
    footerPrivacy: "Politique de confidentialité",
  },
  en: {
    brandRole: "Web Developer",
    hireMe: "Hire me ↗",
    hello: "Hello!",
    heroLead:
      "I design elegant interfaces and build modern websites with strong attention to the final visual quality.",
    heroTitlePrefix: "I'm",
    heroTitleName: "Jean-Barron",
    heroTitleSuffix: "web developer",
    heroPrimaryCta: "View portfolio ↗",
    heroSecondaryCta: "Contact me",
    heroExperience: "Years Experience",
    aboutDate: "Apr 2026",
    aboutTitlePrefix: "Why",
    aboutTitleAccent: "hire me",
    aboutTitleSuffix: "?",
    aboutText:
      "I turn an idea or an existing website into an interface that feels cleaner, more premium, and more consistent. My work combines visual design, product structure, and clean front-end integration.",
    aboutButton: "View resume",
    metrics: [
      { value: "12+", label: "Projects delivered" },
      { value: "04", label: "Years building for the web" },
    ],
    servicesTitlePrefix: "My",
    servicesTitleAccent: "services",
    servicesText:
      "Refined interfaces, stronger landing pages, and redesigns that immediately raise the perceived quality of a product or brand.",
    services: [
      {
        title: "UI / UX Design",
        description:
          "Clear, modern, and credible interfaces that strengthen your project's image.",
        image: vitrine,
        link: "https://comeup.com/fr/service/444767/creer-votre-site-web-vitrine-sur-mesure",
      },
      {
        title: "Web Design",
        description:
          "A complete visual direction with structure, hierarchy, and premium details.",
        image: cargo,
        link: "https://grhtlgroup.com/",
      },
      {
        title: "Landing Page",
        description:
          "Conversion-oriented pages designed to sell an offer, service, or product.",
        image: landing,
        link: "https://comeup.com/fr/service/436678/creer-votre-landing-page-professionnel-et-sur-mesure",
      },
    ],
    portfolioTitlePrefix: "Take a look at",
    portfolioTitleMiddle: "my",
    portfolioTitleAccent: "portfolio",
    paginationLabel: "Project pagination",
    featuredProjectLabel: "Featured project",
    projects: [
      {
        title: "Lirante - Delivery Solution",
        shortTitle: "Lirante",
        description:
          "A product interface designed to present a modern and engaging experience in a clear way.",
        image: tokena,
        link: "https://figma-to-code-ed2-week-three.vercel.app/dashboard",
        tags: ["Landing Page", "Product Design", "Animation", "Glassmorphism"],
      },
      {
        title: "Carte MonGo Patrimoine",
        shortTitle: "MonGo",
        description:
          "A product-oriented project with readable visual structure and functional navigation.",
        image: carte,
        link: "https://carte.mongopatrimoine.com/",
        tags: ["Dashboard", "Cards", "UI System"],
      },
      {
        title: "Ballamas",
        shortTitle: "Ballamas",
        description:
          "A Figma-to-code exercise with strong attention to fidelity and visual rhythm.",
        image: ballamas,
        link: "https://figma-to-code-ed2-week-two.vercel.app/",
        tags: ["Figma to Code", "Responsive", "Visual Design"],
      },
      {
        title: "Custom showcase website",
        shortTitle: "Showcase",
        description:
          "A project focused on brand presentation, content hierarchy, and commercial clarity.",
        image: vitrine,
        link: "https://comeup.com/fr/service/444767/creer-votre-site-web-vitrine-sur-mesure",
        tags: ["Branding", "Showcase", "Conversion"],
      },
    ],
    experienceTitlePrefix: "My",
    experienceTitleAccent: "experience",
    experiences: [
      {
        period: "2025 - Today",
        company: "Freelance, Benin",
        role: "Web developer & interface designer",
        text: "Building custom portfolios, landing pages, and showcase websites with a focus on experience and clarity.",
      },
      {
        period: "2024 - 2025",
        company: "Client & personal projects",
        role: "UI / UX Designer",
        text: "Designing modern interfaces, product mockups, and responsive web implementations for different use cases.",
      },
      {
        period: "2023 - 2024",
        company: "Intensive self-learning",
        role: "Front-end developer",
        text: "Continuous growth with React, Next.js, Tailwind CSS, PHP, and Laravel through hands-on projects.",
      },
    ],
    testimonialsTitleTop: "Testimonials that",
    testimonialsTitleBottom: "speak about my results",
    testimonialsText:
      "A few comments that summarize my approach: more clarity, cleaner execution, and a visual direction that instantly feels more serious.",
    testimonials: [
      {
        name: "Freelance client",
        role: "Showcase website",
        quote:
          "Great eye for detail, real visual improvement, and a clean execution overall.",
      },
      {
        name: "Product project",
        role: "Dashboard",
        quote:
          "The result feels more premium, better structured, and more reassuring than the initial version.",
      },
      {
        name: "Creative collaboration",
        role: "Landing page",
        quote:
          "Good understanding of the need, relevant visual proposals, and a successful responsive integration.",
      },
    ],
    contactTitleTop: "Do you have a project",
    contactTitleBottom: "Let's discuss it",
    emailPlaceholder: "Enter your email address",
    send: "Send",
    contactBadges: [
      "★ 4.9/5 average rating",
      "◉ Responsive front-end",
      "◈ Product design mindset",
    ],
    marquee:
      "UX Research ✦ UI Design ✦ App Design ✦ Dashboard ✦ Wireframe ✦ Landing Page ✦ Glassmorphism ✦ Responsive Web ✦",
    footerTitle: "Let's stay connected",
    footerDescription:
      "Full-stack web developer. I create stronger visual experiences for projects that want to stand out.",
    footerNavigation: "Navigation",
    footerContact: "Contact",
    footerNews: "Get the latest updates",
    footerEmailPlaceholder: "Email address",
    footerCopyright:
      "Copyright© 2026 Jean-Barron ALOKPON. All rights reserved.",
    footerTerms: "Terms & Conditions",
    footerPrivacy: "Privacy Policy",
  },
};

const renderSocialIcon = (type) => {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "h-5 w-5",
    "aria-hidden": "true",
  };

  switch (type) {
    case "github":
      return (
        <svg {...common}>
          <path d="M9 19c-4.3 1.4-4.3-2.1-6-2.4m12 4.8v-3.5a3.04 3.04 0 0 0-.8-2.4c2.6-.3 5.3-1.3 5.3-5.9a4.6 4.6 0 0 0-1.2-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.3 1.2a11.4 11.4 0 0 0-6 0C6.6 3 5.6 3.3 5.6 3.3a4.3 4.3 0 0 0-.1 3.2 4.6 4.6 0 0 0-1.2 3.2c0 4.6 2.7 5.6 5.3 5.9a3.04 3.04 0 0 0-.8 2.3v3.5" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
          <path d="M2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" fill="currentColor" stroke="none" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...common}>
          <path d="M20 11.5A8.5 8.5 0 0 1 7.4 18.9L3 20l1.2-4.2A8.5 8.5 0 1 1 20 11.5Z" />
          <path d="M8.6 9.2c.2-.5.4-.5.7-.5h.6c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4 0 .6l-.4.6c-.1.2-.2.3 0 .5.4.8 1.1 1.5 1.9 2 .2.1.4.1.5 0l.7-.8c.2-.2.4-.2.6-.1l1.7.8c.3.1.4.3.4.5v.6c0 .3 0 .5-.4.7-.5.2-1 .4-1.6.3-1-.2-2-.7-3.4-2-1.6-1.4-2.2-2.6-2.4-3.6-.1-.5 0-1 .2-1.5Z" />
        </svg>
      );
    default:
      return null;
  }
};

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [locale, setLocale] = useState("fr");
  const [projectPage, setProjectPage] = useState(0);

  const t = content[locale];
  const navItems = navigation[locale];
  const projectsPerPage = 2;
  const pageCount = Math.ceil(t.projects.length / projectsPerPage);
  const currentProjects = t.projects.slice(
    projectPage * projectsPerPage,
    projectPage * projectsPerPage + projectsPerPage
  );
  const featuredProject = currentProjects[0] || t.projects[0];

  return (
    <main id="home" className="portfolio-shell text-slate-800">
      <Analytics />

      <section className="px-4 pt-6 sm:px-6 lg:px-8">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-[1.9rem] bg-[#1f1f1f] px-4 py-3 text-white shadow-[0_18px_60px_rgba(15,23,42,0.12)] sm:px-6">
          <a href="#home" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo Jean-Barron"
              className="h-11 w-11 rounded-full bg-white/10 p-1"
            />
            <div>
              <span className="font-display text-lg font-bold">JeanBarron</span>
              <p className="text-xs text-white/55">{t.brandRole}</p>
            </div>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
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
                  onClick={() => setLocale(lang)}
                >
                  {lang}
                </button>
              ))}
            </div>
            <a
              href="#contact"
              className="hidden rounded-full bg-[#ff8a3d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#f97822] sm:inline-flex"
            >
              {t.hireMe}
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
          <div className="mx-auto mt-3 max-w-7xl rounded-[1.9rem] border border-slate-200 bg-white p-4 shadow-xl lg:hidden">
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
                  onClick={() => setLocale(lang)}
                >
                  {lang}
                </button>
              ))}
            </div>
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
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

      <section className="relative overflow-hidden px-4 pb-10 pt-8 sm:px-6 lg:px-8">
        <div className="hero-blob hero-blob-left" />
        <div className="hero-blob hero-blob-right" />
        <div className="mx-auto grid max-w-6xl items-end gap-6 lg:grid-cols-[0.85fr_1.2fr_0.85fr]">
          <div className="order-2 pt-24 lg:order-1">
            <div className="max-w-[15rem]">
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
            <h1 className="mx-auto max-w-[39rem] font-display text-[2.45rem] font-extrabold leading-[1.02] tracking-[-0.055em] text-[#111111] sm:text-[3.5rem] lg:text-[4.15rem]">
              {t.heroTitlePrefix}{" "}
              <span className="text-[#ff8a3d]">{t.heroTitleName}</span>,
              <span className="block">{t.heroTitleSuffix}</span>
            </h1>
            <div className="relative mx-auto mt-2 flex max-w-[450px] items-end justify-center">
              <span className="hero-doodle hero-doodle-top hidden lg:block" />
              <div className="absolute inset-x-0 bottom-0 h-[70%] rounded-t-[999px] bg-[#ffb97a]" />
              <img
                src={portrait}
                alt="Jean-Barron portrait"
                className="relative z-10 max-h-[520px] object-contain drop-shadow-[0_24px_80px_rgba(15,23,42,0.16)]"
              />
              <div className="absolute bottom-6 left-1/2 z-20 flex w-[82%] -translate-x-1/2 rounded-full border border-white/50 bg-[#d76f32]/35 p-2 text-white shadow-[0_18px_60px_rgba(255,138,61,0.24)] backdrop-blur-md">
                <a
                  href="#portfolio"
                  className="flex-1 rounded-full bg-[#ff8a3d] px-5 py-3 text-sm font-semibold transition hover:bg-[#f97822]"
                >
                  {t.heroPrimaryCta}
                </a>
                <a
                  href="#contact"
                  className="flex-1 rounded-full px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
                >
                  {t.heroSecondaryCta}
                </a>
              </div>
            </div>
          </div>

          <div className="order-3 pt-24 lg:flex lg:justify-end">
            <div className="text-left">
              <div className="mb-4 flex items-center gap-1 text-[#ff8a3d] text-2xl">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="font-display text-4xl font-extrabold tracking-[-0.05em] text-[#111111]">
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
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2.8rem] bg-[#edf1f7] p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
          <div className="relative flex items-end justify-center">
            <div className="absolute bottom-8 h-[68%] w-[62%] rounded-[3rem] bg-[#ffb97a]" />
            <img
              src={portrait}
              alt="Jean-Barron"
              className="relative z-10 max-h-[520px] object-contain drop-shadow-[0_20px_70px_rgba(15,23,42,0.14)]"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm text-slate-400">{t.aboutDate}</p>
            <h2 className="mt-6 font-display text-[2.2rem] font-extrabold leading-[1.08] tracking-[-0.05em] text-[#34425d] sm:text-[3.4rem]">
              {t.aboutTitlePrefix}{" "}
              <span className="text-[#ff8a3d]">{t.aboutTitleAccent}</span>
              {t.aboutTitleSuffix}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
              {t.aboutText}
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {t.metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="font-display text-5xl font-bold text-[#34425d]">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-xl text-slate-500">{metric.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href={cv}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-[1.8rem] border border-slate-400 px-10 py-5 text-xl font-semibold text-slate-900 transition hover:border-[#ff8a3d] hover:text-[#ff8a3d]"
              >
                {t.aboutButton}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="dark-surface mx-4 mt-10 overflow-hidden rounded-[3rem] px-5 py-14 text-white sm:mx-6 sm:px-8 lg:mx-8 lg:px-12"
      >
        <div className="surface-glow surface-glow-left" />
        <div className="surface-glow surface-glow-right" />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <h2 className="font-display text-[2.2rem] font-extrabold leading-[1.08] tracking-[-0.05em] sm:text-[3.1rem]">
              {t.servicesTitlePrefix}{" "}
              <span className="text-[#ff8a3d]">{t.servicesTitleAccent}</span>
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-white/80">
              {t.servicesText}
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {t.services.map((service) => (
              <article
                key={service.title}
                className="glass-card relative overflow-hidden rounded-[2.3rem] border border-white/35"
              >
                <div className="border-b border-white/20 px-7 py-6">
                  <h3 className="font-display text-[2rem] font-bold tracking-[-0.04em]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/75">
                    {service.description}
                  </p>
                </div>
                <div className="relative p-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-[18.5rem] w-full rounded-[1.8rem] object-cover"
                  />
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute bottom-0 right-0 inline-flex h-20 w-20 translate-y-4 -translate-x-2 items-center justify-center rounded-full bg-[#1f2f49] text-4xl font-light text-white transition hover:bg-[#ff8a3d]"
                  >
                    ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start gap-6">
            <h2 className="max-w-xl font-display text-[2.2rem] font-extrabold leading-[1.08] tracking-[-0.05em] text-[#34425d] sm:text-[3.1rem]">
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
                  className="relative block overflow-hidden rounded-[2rem] bg-[#eef1f5] p-4 shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[20rem] w-full rounded-[1.6rem] object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                  <span className="absolute right-7 top-7 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#ff8a3d] bg-white/90 text-3xl text-[#ff8a3d]">
                    ↗
                  </span>
                  <span className="absolute bottom-6 left-6 font-display text-[2.8rem] font-bold tracking-[-0.05em] text-white">
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
              ←
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
              →
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
              className="inline-flex items-center gap-4 font-display text-[1.8rem] font-bold leading-[1.08] tracking-[-0.05em] text-[#34425d] sm:text-[2.55rem]"
            >
              {featuredProject.title}
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#ff8a3d] text-white">
                ↗
              </span>
            </a>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {featuredProject.description}
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl p-2 lg:p-4">
          <h2 className="mb-12 text-center font-display text-[2.2rem] font-extrabold leading-[1.08] tracking-[-0.05em] text-[#34425d] sm:text-[3.1rem]">
            {t.experienceTitlePrefix}{" "}
            <span className="text-[#ff8a3d]">{t.experienceTitleAccent}</span>
          </h2>

          <div className="space-y-12 lg:hidden">
            {t.experiences.map((item, index) => (
              <article key={`${item.company}-${item.period}`} className="rounded-[1.75rem] bg-[#f7f8fb] p-6">
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
                <h3 className="mt-5 font-display text-[1.55rem] font-bold leading-[1.12] tracking-[-0.04em] text-[#34425d]">
                  {item.company}
                </h3>
                <h4 className="mt-5 font-display text-[1.5rem] font-bold leading-[1.12] tracking-[-0.04em] text-[#34425d]">
                  {item.role}
                </h4>
                <p className="mt-3 text-[1rem] leading-7 text-slate-500">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute left-1/2 top-[4.1rem] bottom-[4.1rem] -translate-x-1/2 border-l-2 border-dashed border-[#34425d]" />

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

                    <div className="flex justify-center pt-2">
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

      <section className="dark-surface mx-4 mt-10 overflow-hidden rounded-[3rem] px-5 py-16 text-white sm:mx-6 sm:px-8 lg:mx-8 lg:px-12">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-display text-[2.2rem] font-extrabold leading-[1.08] tracking-[-0.05em] sm:text-[3.1rem]">
            {t.testimonialsTitleTop}
            <span className="block">
              <span className="text-[#ff8a3d]">{t.testimonialsTitleBottom}</span>
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80">
            {t.testimonialsText}
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {t.testimonials.map((item) => (
              <article
                key={item.name + item.role}
                className="glass-card rounded-[2rem] p-7 text-left"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-display text-2xl font-bold tracking-[-0.03em]">
                      {item.name}
                    </p>
                    <p className="text-white/70">{item.role}</p>
                  </div>
                  <span className="text-6xl leading-none text-white/20">”</span>
                </div>
                <div className="mt-4 text-[#ff8a3d]">★★★★★ 5.0</div>
                <p className="mt-5 text-base leading-8 text-white/78">
                  {item.quote}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-display text-[2.2rem] font-extrabold leading-[1.08] tracking-[-0.05em] text-[#34425d] sm:text-[3.1rem]">
            {t.contactTitleTop}
            <span className="block">
              <span className="text-[#ff8a3d]">{t.contactTitleBottom}</span>
            </span>
          </h2>

          <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-4 rounded-full border border-slate-200 bg-white p-3 shadow-[0_15px_45px_rgba(15,23,42,0.08)] sm:flex-row">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ffcfab] text-xl text-[#ff8a3d]">
              ✉
            </div>
            <input
              type="email"
              placeholder={t.emailPlaceholder}
              className="h-14 flex-1 rounded-full bg-transparent px-2 text-base text-slate-700 placeholder:text-slate-400 focus:outline-none"
            />
            <a
              href="mailto:jeanbarronalokpon@gmail.com"
              className="inline-flex h-14 items-center justify-center rounded-full bg-[#ff8a3d] px-10 text-lg font-semibold text-white transition hover:bg-[#f97822]"
            >
              {t.send}
            </a>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-700">
            {t.contactBadges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>
        </div>

        <div className="marquee-band mt-16">
          <div className="marquee-track">
            <span>{t.marquee}</span>
            <span>{t.marquee}</span>
          </div>
        </div>
      </section>

      <footer className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.6rem] bg-[#262626] px-6 py-10 text-white sm:px-10">
          <div className="flex flex-col gap-8 border-b border-white/12 pb-8 lg:flex-row lg:items-start lg:justify-between">
            <h2 className="font-display text-[2.2rem] font-extrabold leading-[1.08] tracking-[-0.05em] sm:text-[3.1rem]">
              {t.footerTitle}
            </h2>
            <a
              href="mailto:jeanbarronalokpon@gmail.com"
              className="inline-flex rounded-full bg-[#ff8a3d] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#f97822]"
            >
              {t.hireMe}
            </a>
          </div>

          <div className="grid gap-10 py-10 lg:grid-cols-[1.2fr_0.6fr_0.7fr_0.9fr]">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Logo Jean-Barron"
                  className="h-11 w-11 rounded-full bg-white/10 p-1"
                />
                <span className="font-display text-3xl font-bold">JCREA</span>
              </div>
              <p className="mt-6 max-w-md text-lg leading-8 text-white/72">
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
              <div className="mt-5 flex overflow-hidden rounded-full bg-white">
                <input
                  type="email"
                  placeholder={t.footerEmailPlaceholder}
                  className="h-14 flex-1 px-5 text-slate-700 focus:outline-none"
                />
                <a
                  href="mailto:jeanbarronalokpon@gmail.com"
                  className="inline-flex h-14 w-16 items-center justify-center bg-[#ff8a3d] text-2xl text-white"
                >
                  ➜
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
    </main>
  );
};

export default Home;
