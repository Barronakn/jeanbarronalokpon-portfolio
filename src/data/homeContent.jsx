import React from "react";

const loadPrefixedImages = (prefix) => {
  const context = require.context("../assets/img", false, /\.(png|jpe?g|svg|webp)$/);

  return context
    .keys()
    .filter((path) => path.startsWith(`./${prefix}`))
    .sort((a, b) => a.localeCompare(b))
    .map((path) => ({
      key: path.replace("./", "").replace(/\.[^.]+$/, ""),
      image: context(path),
    }));
};

const projectImages = loadPrefixedImages("project-");

const projectMeta = {
  "project-cargo": {
    fr: {
      title: "Site vitrine sur mesure",
      shortTitle: "Cargo",
      description:
        "Un travail orienté présentation de marque, hiérarchie de contenu et clarté commerciale, avec une interface web responsive.",
      tags: ["Site vitrine", "Branding", "Conversion"],
    },
    en: {
      title: "Custom Showcase Website",
      shortTitle: "Cargo",
      description:
        "A brand-focused project centered on clearer hierarchy, a stronger commercial presentation, and a responsive interface.",
      tags: ["Showcase", "Branding", "Conversion"],
    },
    link: "https://grhtlgroup.com/",
  },
  "project-carte": {
    fr: {
      title: "Carte MonGo Patrimoine",
      shortTitle: "MonGo",
      description:
        "Un projet orienté produit avec une structure visuelle lisible, une navigation fonctionnelle et une interface responsive.",
      tags: ["Dashboard", "Interface", "UI System"],
    },
    en: {
      title: "MonGo Patrimoine Card",
      shortTitle: "MonGo",
      description:
        "A product-oriented project built around clear visual structure, functional navigation, and a responsive interface.",
      tags: ["Dashboard", "UI", "UI System"],
    },
    link: "https://carte.mongopatrimoine.com/",
  },
  "project-fruity": {
    fr: {
      title: "Fruity — Cidre de fruits naturel",
      shortTitle: "Fruity",
      description:
        "Une landing page produit pour Fruity, un cidre de fruits 100% naturel disponible en canettes de 330 ml (Exotic Mix, Sweet Apple, Green Pear).",
      tags: ["Landing page", "Produit", "Branding"],
    },
    en: {
      title: "Fruity — Natural Fruit Cider",
      shortTitle: "Fruity",
      description:
        "A product landing page for Fruity, a 100% natural fruit cider available in 330 ml cans (Exotic Mix, Sweet Apple, Green Pear).",
      tags: ["Landing Page", "Product", "Branding"],
    },
    link: "https://fruity-liard.vercel.app/",
  },
  "project-hemolife": {
    fr: {
      title: "HemoLife Bénin — Don de sang",
      shortTitle: "HemoLife",
      description:
        "Un site d'information sur le don de sang au Bénin : éligibilité, centres de don, préparation et FAQ. Un geste simple qui sauve des vies.",
      tags: ["Site d'information", "Local", "UX"],
    },
    en: {
      title: "HemoLife Benin — Blood Donation",
      shortTitle: "HemoLife",
      description:
        "An informational website about blood donation in Benin: eligibility, donation centers, preparation, and FAQ.",
      tags: ["Informational site", "Local", "UX"],
    },
    link: "https://hemo-life-mocha.vercel.app/",
  },
  "project-jas": {
    fr: {
      title: "JA Sphere — Produits frais d'élevage",
      shortTitle: "JA Sphere",
      description:
        "Un site vitrine pour JA Sphere, entreprise basée à Abomey-Calavi (Bénin) spécialisée dans les produits frais d'élevage : tilapia, poulets, cailles et escargots.",
      tags: ["Site vitrine", "Local", "Branding"],
    },
    en: {
      title: "JA Sphere — Fresh Farm Products",
      shortTitle: "JA Sphere",
      description:
        "A showcase website for JA Sphere, a company based in Abomey-Calavi (Benin) specializing in fresh farm products: tilapia, chicken, quail, and snails.",
      tags: ["Showcase", "Local", "Branding"],
    },
    link: "https://ja-sphere.com/",
  },
  "project-utt": {
    fr: {
      title: "UTT — Agence web Upper Thrill Tech",
      shortTitle: "UTT",
      description:
        "Le site de mon agence web Upper Thrill Tech : création de sites internet et d'applications web sur mesure pour les entreprises au Bénin.",
      tags: ["Site vitrine", "Agence web", "Branding"],
    },
    en: {
      title: "UTT — Upper Thrill Tech Web Agency",
      shortTitle: "UTT",
      description:
        "The website of my web agency Upper Thrill Tech: custom websites and web applications for businesses in Benin.",
      tags: ["Showcase", "Web Agency", "Branding"],
    },
    link: "https://upperthrilltech.com/",
  },
  "project-wapkon-benin": {
    fr: {
      title: "Wapkon Benin",
      shortTitle: "Wapkon Benin",
      description:
        "Un projet web institutionnel pensé pour inspirer confiance et clarifier l'offre, avec une interface responsive et soignée.",
      tags: ["Site institutionnel", "Corporate", "Interface"],
    },
    en: {
      title: "Wapkon Benin",
      shortTitle: "Wapkon Benin",
      description:
        "A more institutional web project designed to inspire trust, communicate the offer clearly, and adapt to every screen.",
      tags: ["Institutional", "Corporate", "UI"],
    },
    link: "https://mvp-webcraft-01.vercel.app/",
  },
};

const buildProjects = (locale) =>
  projectImages.map(({ key, image }) => {
    const meta = projectMeta[key] || {
      fr: {
        title: key.replace("project-", ""),
        shortTitle: key.replace("project-", ""),
        description:
          "Un projet réalisé avec une attention particulière portée à l'expérience utilisateur et au rendu final.",
        tags: ["Web Design", "Responsive"],
      },
      en: {
        title: key.replace("project-", ""),
        shortTitle: key.replace("project-", ""),
        description:
          "A project crafted with careful attention to user experience and final presentation.",
        tags: ["Web Design", "Responsive"],
      },
      link: "#contact",
    };

    return {
      ...meta[locale],
      image,
      link: meta.link,
    };
  });

export const navigation = {
  fr: [
    { label: "Accueil", href: "#home" },
    { label: "A propos", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projets", href: "#portfolio" },
    { label: "Parcours", href: "#experience" },
  ],
  en: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Resume", href: "#experience" },
    { label: "Projects", href: "#portfolio" },
  ],
};

export const socials = [
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

export const content = {
  fr: {
    seoTitle: "Frontend Developer au Bénin | Jean-Barron ALOKPON",
    seoDescription:
      "Jean-Barron ALOKPON (BarronDev), Frontend Developer au Bénin. Je conçois et développe des interfaces web modernes, performantes et responsives avec React, Next.js, TypeScript, JavaScript et Tailwind CSS. Sites vitrines, applications web, dashboards et landing pages sur mesure.",
    brandRole: "Frontend Developer",
    logoAlt: "Logo BarronDev — Jean-Barron ALOKPON, Frontend Developer",
    heroPortraitAlt: "Jean-Barron ALOKPON, Frontend Developer au Bénin",
    aboutPortraitAlt: "Portrait de Jean-Barron ALOKPON, développeur frontend à Cotonou, Bénin",
    projectImageAlt: "interface web responsive",
    stackLabel: "Technologies principales",
    serviceCta: "Voir l'offre",
    serviceInternalCta: "Discuter de votre projet",
    hireMe: "Me contacter",
    hello: "Bonjour !",
    heroLead:
      "Je conçois des interfaces web modernes et performantes et je développe des sites sur mesure avec React, Next.js et TypeScript — avec une vraie attention au rendu final.",
    heroTitlePrefix: "Je suis",
    heroTitleName: "Jean-Barron",
    heroTitleSuffix: "Frontend Developer",
    heroPrimaryCta: "Voir le portfolio",
    heroSecondaryCta: "Me contacter",
    heroExperience: "Années d'expérience",
    aboutDate: "Frontend Developer · Cotonou, Bénin",
    aboutTitlePrefix: "Pourquoi",
    aboutTitleAccent: "m'engager",
    aboutTitleSuffix: "?",
    aboutText:
      "Je suis Jean-Barron ALOKPON (BarronDev), Frontend Developer basé à Cotonou, au Bénin. Je conçois et développe des interfaces web modernes, performantes et responsives avec React, Next.js, TypeScript, JavaScript et Tailwind CSS. Mon travail combine design visuel, architecture de composants et intégration frontend propre — pour les entreprises, startups et entrepreneurs d'Afrique francophone et d'ailleurs.",
    aboutButton: "Voir mon CV",
    metrics: [
      { value: "12+", label: "Projets livrés" },
      { value: "04", label: "Années à coder pour le web" },
    ],
    mainStack: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
    servicesTitlePrefix: "Mes",
    servicesTitleAccent: "services",
    servicesText:
      "Quatre formats clairs pour lancer, présenter ou vendre un produit, avec une exécution frontend propre, un rendu professionnel et des interfaces pensées pour la conversion.",
    services: [
      {
        title: "Développement d'applications web",
        description:
          "Pour un espace client, un outil interne ou un produit digital : une application web avec une interface claire, fluide et pensée pour l'usage réel.",
        link: "https://comeup.com/fr/service/513245/creer-votre-site-web-vitrine-e-commerce-optimise-seo-sur-mesure",
      },
      {
        title: "Sites vitrines modernes",
        description:
          "Pour présenter ton activité, rassurer tes visiteurs et poser une présence en ligne sérieuse avec un design premium et une interface responsive.",
        link: "https://comeup.com/fr/service/513245/creer-votre-site-web-vitrine-e-commerce-optimise-seo-sur-mesure",
      },
      {
        title: "Boutiques e-commerce",
        description:
          "Pour vendre en ligne avec un parcours d'achat simple, lisible et convaincant, et une interface optimisée pour la conversion.",
        link: "https://comeup.com/fr/service/513245/creer-votre-site-web-vitrine-e-commerce-optimise-seo-sur-mesure",
      },
      {
        title: "Landing pages performantes",
        description:
          "Pour lancer une offre, capter des leads ou mettre en avant un produit avec une page concentrée sur la conversion et un chargement rapide.",
        link: "https://comeup.com/fr/service/513245/creer-votre-site-web-vitrine-e-commerce-optimise-seo-sur-mesure",
      },
    ],
    portfolioTitlePrefix: "Découvre",
    portfolioTitleMiddle: "mon",
    portfolioTitleAccent: "portfolio",
    paginationLabel: "Pagination projets",
    featuredProjectLabel: "Projet mis en avant",
    projectFallbackLabel: "En parler",
    projects: buildProjects("fr"),
    experienceTitlePrefix: "Mon",
    experienceTitleAccent: "parcours",
    experiences: [
      {
        period: "2023 - Aujourd'hui",
        company: "Freelance",
        role: "Développeur frontend",
        text: "Création de portfolios, landing pages et sites vitrines sur mesure avec React, Next.js et Tailwind CSS, avec un focus sur l'expérience utilisateur et la performance.",
      },
      {
        period: "2023 - 2026",
        company: "ESM-Bénin | Licence",
        role: "SIL",
        text: "Formation en Systèmes Informatiques et Logiciels (SIL). Conception de systèmes informatiques et de bases de données.",
      },
      {
        period: "Juil. 2025 - En cours",
        company: "Soft Vodooz",
        role: "Développeur Web Frontend",
        text: "Développement d'applications web modernes avec Next.js, Shadcn, TypeScript, Tailwind CSS, TanStack et maintenance.",
      },
      {
        period: "2023 - 2024",
        company: "Autoformation intensive",
        role: "Développeur frontend",
        text: "Montée en compétence continue sur React, Next.js, TypeScript, Tailwind CSS et Laravel avec des projets concrets.",
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
    faqTitlePrefix: "Questions",
    faqTitleAccent: "fréquentes",
    faqText:
      "Les réponses les plus utiles avant de lancer une collaboration ensemble.",
    faqItems: [
      {
        question: "Quels types de projets peux-tu réaliser ?",
        answer:
          "Je réalise des sites vitrines, landing pages, applications web, dashboards, refontes et boutiques e-commerce, avec une interface moderne, responsive et pensée pour la conversion.",
      },
      {
        question: "Travaille-tu uniquement sur le design ou aussi sur l'intégration ?",
        answer:
          "Je peux intervenir sur la direction visuelle, l'intégration frontend ou prendre en charge les deux pour garder une expérience cohérente. L'intégration de maquettes Figma vers du code (React, Next.js) fait partie de mon quotidien.",
      },
      {
        question: "Peux-tu améliorer un site déjà en ligne ?",
        answer:
          "Oui. Je peux repartir d'un site existant pour corriger des bugs, moderniser l'interface, améliorer la performance ou revoir la structure pour le rendre plus clair et plus rapide.",
      },
      {
        question: "Quelles technologies utilises-tu pour le développement frontend ?",
        answer:
          "Je développe principalement avec React, Next.js, TypeScript, JavaScript et Tailwind CSS. J'utilise aussi Laravel, PHP et MySQL côté backend lorsque le projet le nécessite.",
      },
      {
        question: "Comment démarre une collaboration ?",
        answer:
          "On échange d'abord sur l'objectif, le contenu et le délai. Ensuite je propose une direction claire et une maquette avant de passer à la production.",
      },
      {
        question: "Interviens-tu aussi sur la performance et le référencement ?",
        answer:
          "Oui. J'optimise le chargement, le responsive et les Core Web Vitals, et j'applique les bonnes pratiques de SEO technique (balises, données structurées, sitemap) pour que ton site soit rapide et bien référencé.",
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
      "◉ Basé à Cotonou, Bénin",
    ],
    marquee:
      "Frontend Development ✦ React ✦ Next.js ✦ TypeScript ✦ Tailwind CSS ✦ UI Design ✦ Dashboard ✦ Landing Page ✦ Responsive Web ✦",
    footerTitle: "Restons en contact",
    footerDescription:
      "Frontend Developer basé au Bénin. Je conçois et développe des interfaces web modernes, responsives et performantes avec React, Next.js, TypeScript et Tailwind CSS — pour des projets ambitieux en Afrique francophone et à l'international.",
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
    seoTitle: "Frontend Developer in Benin | Jean-Barron ALOKPON",
    seoDescription:
      "Jean-Barron ALOKPON (BarronDev), Frontend Developer based in Benin. I design and build modern, high-performance, responsive web interfaces with React, Next.js, TypeScript, JavaScript, and Tailwind CSS. Custom showcase websites, web apps, dashboards, and landing pages.",
    brandRole: "Frontend Developer",
    logoAlt: "BarronDev logo — Jean-Barron ALOKPON, Frontend Developer",
    heroPortraitAlt: "Jean-Barron ALOKPON, Frontend Developer in Benin",
    aboutPortraitAlt: "Portrait of Jean-Barron ALOKPON, frontend developer in Cotonou, Benin",
    projectImageAlt: "responsive web interface",
    stackLabel: "Core stack",
    serviceCta: "View offer",
    serviceInternalCta: "Discuss your project",
    hireMe: "Hire me",
    hello: "Hello!",
    heroLead:
      "I design modern, high-performance web interfaces and build custom websites with React, Next.js, and TypeScript — with strong attention to the final visual quality.",
    heroTitlePrefix: "I'm",
    heroTitleName: "Jean-Barron",
    heroTitleSuffix: "Frontend Developer",
    heroPrimaryCta: "View portfolio",
    heroSecondaryCta: "Contact me",
    heroExperience: "Years Experience",
    aboutDate: "Frontend Developer · Cotonou, Benin",
    aboutTitlePrefix: "Why",
    aboutTitleAccent: "hire me",
    aboutTitleSuffix: "?",
    aboutText:
      "I'm Jean-Barron ALOKPON (BarronDev), a Frontend Developer based in Cotonou, Benin. I design and build modern, high-performance, responsive web interfaces with React, Next.js, TypeScript, JavaScript, and Tailwind CSS. My work combines visual design, component architecture, and clean frontend integration — for companies, startups, and entrepreneurs across French-speaking Africa and beyond.",
    aboutButton: "View resume",
    metrics: [
      { value: "12+", label: "Projects delivered" },
      { value: "04", label: "Years building for the web" },
    ],
    mainStack: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
    servicesTitlePrefix: "My",
    servicesTitleAccent: "services",
    servicesText:
      "Four clear service formats to launch, present, or sell a product with polished frontend execution, a professional feel, and conversion-focused interfaces.",
    services: [
      {
        title: "Web app development",
        description:
          "For a client area, internal tool, or digital product: a web application with a clear, fluid interface designed for real usage.",
        link: "https://comeup.com/fr/service/513245/creer-votre-site-web-vitrine-e-commerce-optimise-seo-sur-mesure",
      },
      {
        title: "Modern showcase websites",
        description:
          "To present your business, reassure visitors, and build a serious online presence with a premium design and a responsive interface.",
        link: "https://comeup.com/fr/service/513245/creer-votre-site-web-vitrine-e-commerce-optimise-seo-sur-mesure",
      },
      {
        title: "E-commerce stores",
        description:
          "To sell online with a buying journey that feels simple, clear, and convincing, and an interface optimized for conversion.",
        link: "https://comeup.com/fr/service/513245/creer-votre-site-web-vitrine-e-commerce-optimise-seo-sur-mesure",
      },
      {
        title: "High-performance landing pages",
        description:
          "To launch an offer, capture leads, or highlight a product with a page focused on conversion and fast loading.",
        link: "https://comeup.com/fr/service/513245/creer-votre-site-web-vitrine-e-commerce-optimise-seo-sur-mesure",
      },
    ],
    portfolioTitlePrefix: "Take a look at",
    portfolioTitleMiddle: "my",
    portfolioTitleAccent: "portfolio",
    paginationLabel: "Project pagination",
    featuredProjectLabel: "Featured project",
    projectFallbackLabel: "Let's talk about it",
    projects: buildProjects("en"),
    experienceTitlePrefix: "My",
    experienceTitleAccent: "journey",
    experiences: [
      {
        period: "2023 - Present",
        company: "Freelance, Benin",
        role: "Frontend developer",
        text: "Building custom portfolios, landing pages, and showcase websites with React, Next.js, and Tailwind CSS, with a strong focus on user experience and performance.",
      },
      {
        period: "2023 - 2026",
        company: "ESM-Benin | Bachelor's",
        role: "Computer Systems and Software",
        text: "Training in Computer Systems and Software — system design and database concepts.",
      },
      {
        period: "Jul. 2025 - Present",
        company: "Soft Vodooz",
        role: "Frontend Web Developer",
        text: "Building modern web applications with Next.js, Shadcn, TypeScript, Tailwind CSS, TanStack, and maintenance.",
      },
      {
        period: "2023 - 2024",
        company: "Intensive self-training",
        role: "Frontend developer",
        text: "Continuous skill building across React, Next.js, Tailwind CSS, PHP, and Laravel through practical projects.",
      },
    ],
    testimonialsTitleTop: "Testimonials that",
    testimonialsTitleBottom: "reflect my results",
    testimonialsText:
      "A few comments that summarize my approach: more clarity, cleaner execution, and a visual direction that instantly feels more serious.",
    testimonials: [
      {
        name: "Freelance client",
        role: "Showcase website",
        quote:
          "Great eye for detail, clear visual progress, and a polished execution from start to finish.",
      },
      {
        name: "Product project",
        role: "Dashboard",
        quote:
          "The result feels more premium, better structured, and much more reassuring than the initial version.",
      },
      {
        name: "Creative collaboration",
        role: "Landing page",
        quote:
          "Strong understanding of the brief, relevant visual ideas, and a successful responsive implementation.",
      },
    ],
    faqTitlePrefix: "Frequently asked",
    faqTitleAccent: "questions",
    faqText:
      "The key answers people usually want before starting a collaboration with me.",
    faqItems: [
      {
        question: "What kind of projects can you build?",
        answer:
          "I build showcase websites, landing pages, web apps, dashboards, redesigns, and e-commerce experiences with a modern, responsive interface designed for conversion.",
      },
      {
        question: "Do you only handle design or also implementation?",
        answer:
          "I can help with visual direction, frontend implementation, or both so the final experience stays consistent. Turning Figma mockups into code (React, Next.js) is part of my daily work.",
      },
      {
        question: "Can you improve an existing website?",
        answer:
          "Yes. I can start from an existing website to fix bugs, modernize the interface, improve performance, or rethink the structure for more clarity and speed.",
      },
      {
        question: "What technologies do you use for frontend development?",
        answer:
          "I mainly build with React, Next.js, TypeScript, JavaScript, and Tailwind CSS. I also use Laravel, PHP, and MySQL on the backend when a project requires it.",
      },
      {
        question: "How does a collaboration usually start?",
        answer:
          "We first align on the goal, content, and timeline. Then I suggest a clear direction and a mockup before moving into production.",
      },
      {
        question: "Do you also work on performance and SEO?",
        answer:
          "Yes. I optimize loading speed, responsiveness, and Core Web Vitals, and I apply technical SEO best practices (tags, structured data, sitemap) so your site is fast and well-ranked.",
      },
    ],
    contactTitleTop: "Do you have a project",
    contactTitleBottom: "Let's talk",
    emailPlaceholder: "Enter your email address",
    send: "Send",
    contactBadges: [
      "★ 4.9/5 average reviews",
      "◉ Responsive front-end",
      "◈ Product design mindset",
      "◉ Based in Cotonou, Benin",
    ],
    marquee:
      "Frontend Development ✦ React ✦ Next.js ✦ TypeScript ✦ Tailwind CSS ✦ UI Design ✦ Dashboard ✦ Landing Page ✦ Responsive Web ✦",
    footerTitle: "Let's stay connected",
    footerDescription:
      "Frontend Developer based in Benin. I design and build modern, responsive, high-performance web interfaces with React, Next.js, TypeScript, and Tailwind CSS — for ambitious projects across French-speaking Africa and worldwide.",
    footerNavigation: "Navigation",
    footerContact: "Contact",
    footerNews: "Get the latest updates",
    footerEmailPlaceholder: "Email address",
    footerCopyright:
      "Copyright© 2026 Jean-Barron ALOKPON. All rights reserved.",
    footerTerms: "Terms of use",
    footerPrivacy: "Privacy policy",
  },
};

export const renderBadgeParts = (badge) => {
  const icon = badge.slice(0, 1);
  const text = badge.slice(1).trim();
  return { icon, text };
};

export const renderSocialIcon = (type) => {
  switch (type) {
    case "github":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.5 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.67.35-1.11.64-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .85-.28 2.78 1.05A9.4 9.4 0 0 1 12 6.84c.85 0 1.7.12 2.5.36 1.93-1.33 2.78-1.05 2.78-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .28.18.61.69.5A10.24 10.24 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
          <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56c0-1-.74-1.74-1.91-1.74-1.16 0-1.9.75-1.9 1.74 0 .97.72 1.75 1.87 1.75h.02c1.18 0 1.92-.78 1.92-1.75ZM20.44 13.08c0-3.34-1.78-4.9-4.15-4.9-1.91 0-2.76 1.07-3.24 1.83V8.5H9.67c.04 1 .01 11.5.01 11.5h3.38v-6.42c0-.34.02-.68.12-.92.27-.68.88-1.38 1.91-1.38 1.35 0 1.9 1.05 1.9 2.58V20H20.4v-6.92l.04-.01Z" />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
          <path d="M12.04 2C6.54 2 2.08 6.46 2.08 11.96c0 1.76.46 3.48 1.34 5l-1.42 5.18 5.3-1.39a9.9 9.9 0 0 0 4.74 1.21h.01c5.49 0 9.95-4.46 9.95-9.96S17.53 2 12.04 2Zm0 18.14h-.01a8.17 8.17 0 0 1-4.16-1.14l-.3-.18-3.14.82.84-3.06-.2-.32a8.15 8.15 0 0 1-1.25-4.3c0-4.5 3.66-8.16 8.17-8.16 2.18 0 4.23.85 5.77 2.39a8.1 8.1 0 0 1 2.39 5.77c0 4.5-3.67 8.18-8.11 8.18Zm4.48-6.12c-.24-.12-1.42-.7-1.64-.79-.22-.08-.39-.12-.56.12-.16.24-.64.79-.78.96-.14.16-.29.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.64-1.22-1.44-1.36-1.68-.14-.24-.01-.37.11-.49.11-.11.24-.29.35-.43.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42-.14 0-.31-.02-.47-.02-.16 0-.43.06-.65.31-.22.24-.85.83-.85 2.02s.87 2.34.99 2.5c.12.16 1.7 2.65 4.12 3.71.58.25 1.03.4 1.38.51.58.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.03.14-1.14-.06-.1-.22-.16-.46-.28Z" />
        </svg>
      );
    default:
      return null;
  }
};
