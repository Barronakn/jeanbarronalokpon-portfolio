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
  "project-ballamas": {
    fr: {
      title: "Ballamas",
      shortTitle: "Ballamas",
      description:
        "Un exercice Figma to code avec une attention particuliere portee a la fidelite et au rythme visuel.",
      tags: ["Figma to Code", "Responsive", "Visual Design"],
    },
    en: {
      title: "Ballamas",
      shortTitle: "Ballamas",
      description:
        "A Figma-to-code build focused on visual fidelity, rhythm, and responsive execution.",
      tags: ["Figma to Code", "Responsive", "Visual Design"],
    },
    link: "https://figma-to-code-ed2-week-two.vercel.app/",
  },
  "project-cargo": {
    fr: {
      title: "Site vitrine sur mesure",
      shortTitle: "Cargo",
      description:
        "Un travail oriente presentation de marque, hierarchie de contenu et clarte commerciale.",
      tags: ["Branding", "Site vitrine", "Conversion"],
    },
    en: {
      title: "Custom Showcase Website",
      shortTitle: "Cargo",
      description:
        "A brand-focused project centered on clearer hierarchy and a stronger commercial presentation.",
      tags: ["Branding", "Showcase", "Conversion"],
    },
    link: "https://grhtlgroup.com/",
  },
  "project-carte": {
    fr: {
      title: "Carte MonGo Patrimoine",
      shortTitle: "MonGo",
      description:
        "Un projet oriente produit avec une structure visuelle lisible et une navigation fonctionnelle.",
      tags: ["Dashboard", "Cards", "UI System"],
    },
    en: {
      title: "MonGo Patrimoine Card",
      shortTitle: "MonGo",
      description:
        "A product-oriented project built around clear visual structure and functional navigation.",
      tags: ["Dashboard", "Cards", "UI System"],
    },
    link: "https://carte.mongopatrimoine.com/",
  },
  "project-fylla": {
    fr: {
      title: "Fylla",
      shortTitle: "Fylla",
      description:
        "Une interface moderne avec une presentation plus immersive et une direction visuelle plus affirmée.",
      tags: ["Product UI", "Modern Layout", "Responsive"],
    },
    en: {
      title: "Fylla",
      shortTitle: "Fylla",
      description:
        "A modern interface with a more immersive presentation and a stronger visual direction.",
      tags: ["Product UI", "Modern Layout", "Responsive"],
    },
    link: "https://fylla-1.vercel.app/",
  },
  "project-nft": {
    fr: {
      title: "NFT Landing",
      shortTitle: "NFT",
      description:
        "Une landing page experimentee pour travailler l'impact visuel, les contrastes et le storytelling produit.",
      tags: ["Landing Page", "Storytelling", "UI"],
    },
    en: {
      title: "NFT Landing",
      shortTitle: "NFT",
      description:
        "An experimental landing page focused on visual impact, contrast, and product storytelling.",
      tags: ["Landing Page", "Storytelling", "UI"],
    },
    link: "https://figma-to-code-ed2-week-one.vercel.app/s",
  },
  "project-tokena": {
    fr: {
      title: "Tokena - Solution de livraison",
      shortTitle: "Tokena",
      description:
        "Une interface produit pensee pour presenter clairement une experience moderne et engageante.",
      tags: ["Landing Page", "App Web", "Animation", "Site Vitrine"],
    },
    en: {
      title: "Tokena - Delivery Solution",
      shortTitle: "Tokena",
      description:
        "A product interface designed to clearly present a modern and engaging experience.",
      tags: ["Landing Page", "Web App", "Animation", "Showcase"],
    },
    link: "https://figma-to-code-ed2-week-three.vercel.app/dashboard",
  },
  "project-wapkon-benin": {
    fr: {
      title: "Wapkon Benin",
      shortTitle: "Wapkon Benin",
      description:
        "Un projet de presentation web plus institutionnel, pense pour inspirer confiance et clarifier l'offre.",
      tags: ["Institutional", "Corporate", "Clarity"],
    },
    en: {
      title: "Wapkon Benin",
      shortTitle: "Wapkon Benin",
      description:
        "A more institutional web project designed to inspire trust and communicate the offer clearly.",
      tags: ["Institutional", "Corporate", "Clarity"],
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
        description: "Un projet realise avec une attention particuliere portee a l'experience et au rendu final.",
        tags: ["Web Design", "Responsive"],
      },
      en: {
        title: key.replace("project-", ""),
        shortTitle: key.replace("project-", ""),
        description: "A project crafted with careful attention to experience and final presentation.",
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
    brandRole: "Developpeur web",
    hireMe: "Me contacter",
    hello: "Bonjour !",
    heroLead:
      "Je concois des interfaces elegantes et je developpe des sites web modernes avec une vraie attention au rendu final.",
    heroTitlePrefix: "Je suis",
    heroTitleName: "Jean-Barron",
    heroTitleSuffix: "developpeur web",
    heroPrimaryCta: "Voir le portfolio",
    heroSecondaryCta: "Me contacter",
    heroExperience: "Annees d'experience",
    aboutDate: "Avr 2026",
    aboutTitlePrefix: "Pourquoi",
    aboutTitleAccent: "m'engager",
    aboutTitleSuffix: "?",
    aboutText:
      "Je transforme une idee ou un site existant en une interface plus nette, plus premium et plus coherente. Mon travail melange design visuel, structure produit et integration front-end propre.",
    aboutButton: "Voir mon CV",
    metrics: [
      { value: "12+", label: "Projets livres" },
      { value: "04", label: "Annees a coder pour le web" },
    ],
    servicesTitlePrefix: "Mes",
    servicesTitleAccent: "services",
    servicesText:
      "Quatre formats clairs pour lancer, presenter ou vendre un produit avec une execution propre et un rendu professionnel.",
    services: [
      {
        title: "Application web ou mobile",
        description:
          "Pour un espace client, un outil interne ou un produit digital avec une interface claire, fluide et pensee pour l'usage.",
        link: "https://comeup.com/fr/service/513245/creer-votre-site-web-vitrine-e-commerce-optimise-seo-sur-mesure",
      },
      {
        title: "Site vitrine",
        description:
          "Pour presenter ton activite, rassurer tes visiteurs et poser une presence en ligne serieuse avec un design premium.",
        link: "https://comeup.com/fr/service/513245/creer-votre-site-web-vitrine-e-commerce-optimise-seo-sur-mesure",
      },
      {
        title: "E-commerce",
        description:
          "Pour vendre en ligne avec un parcours d'achat plus simple, plus lisible et plus convaincant.",
        link: "https://comeup.com/fr/service/513245/creer-votre-site-web-vitrine-e-commerce-optimise-seo-sur-mesure",
      },
      {
        title: "Landing page",
        description:
          "Pour lancer une offre, capter des leads ou mettre en avant un produit avec une page concentree sur la conversion.",
        link: "https://comeup.com/fr/service/513245/creer-votre-site-web-vitrine-e-commerce-optimise-seo-sur-mesure",
      },
    ],
    portfolioTitlePrefix: "Decouvre",
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
        period: "2025 - Aujourd'hui",
        company: "Freelance, Benin",
        role: "Developpeur web front-end",
        text: "Creation de portfolios, landing pages et sites vitrines sur mesure avec un focus sur l'experience et la lisibilite.",
      },
      {
        period: "2024 - Aujourd'hui",
        company: "Projets clients & personnels",
        role: "Integration web pixel perfect",
        text: "Integration d'interfaces modernes, attention portee a la fidelite visuelle, a la clarte des parcours et a l'experience utilisateur.",
      },
      {
        period: "2023 - 2024",
        company: "Autoformation intensive",
        role: "Developpeur front-end",
        text: "Montee en competence continue sur React, Next.js, Tailwind CSS, PHP et Laravel avec des projets concrets.",
      },
    ],
    testimonialsTitleTop: "Des temoignages qui",
    testimonialsTitleBottom: "parlent de mes resultats",
    testimonialsText:
      "Quelques retours qui resument mon approche : plus de clarte, un rendu plus propre et une direction visuelle qui fait tout de suite plus serieuse.",
    testimonials: [
      {
        name: "Client freelance",
        role: "Site vitrine",
        quote:
          "Tres bon sens du detail, une vraie progression sur la qualite visuelle et une execution propre.",
      },
      {
        name: "Projet produit",
        role: "Dashboard",
        quote:
          "Le resultat est plus premium, mieux structure et plus rassurant que la version initiale.",
      },
      {
        name: "Collaboration creative",
        role: "Landing page",
        quote:
          "Bonne comprehension du besoin, propositions visuelles pertinentes et integration responsive reussie.",
      },
    ],
    faqTitlePrefix: "Questions",
    faqTitleAccent: "frequentes",
    faqText:
      "Les reponses les plus utiles avant de lancer une collaboration ensemble.",
    faqItems: [
      {
        question: "Quels types de projets peux-tu realiser ?",
        answer:
          "Je peux realiser des sites vitrines, landing pages, applications web, refontes, blogs et boutiques e-commerce selon ton besoin.",
      },
      {
        question: "Travaille-tu uniquement sur le design ou aussi sur l'integration ?",
        answer:
          "Je peux intervenir sur la direction visuelle, l'integration front-end ou prendre en charge les deux pour garder une experience coherente.",
      },
      {
        question: "Peux-tu ameliorer un site deja en ligne ?",
        answer:
          "Oui. Je peux repartir d'un site existant pour corriger des bugs, moderniser l'interface ou revoir la structure pour le rendre plus clair.",
      },
      {
        question: "Comment demarre une collaboration ?",
        answer:
          "On echange d'abord sur l'objectif, le contenu et le delai. Ensuite je propose une direction claire avant de passer a la production.",
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
      "UX Research ✦ UI Design ✦ App Design ✦ Dashboard ✦ Site Vitrine ✦ Landing Page ✦ App Web ✦ Responsive Web ✦",
    footerTitle: "Restons en contact",
    footerDescription:
      "Developpeur web full-stack. Je cree des experiences visuelles plus fortes pour les projets qui veulent sortir du lot.",
    footerNavigation: "Navigation",
    footerContact: "Contact",
    footerNews: "Recevoir les dernieres infos",
    footerEmailPlaceholder: "Adresse email",
    footerCopyright:
      "Copyright© 2026 Jean-Barron ALOKPON. Tous droits reserves.",
    footerTerms: "Conditions d'utilisation",
    footerPrivacy: "Politique de confidentialite",
  },
  en: {
    brandRole: "Web Developer",
    hireMe: "Hire me",
    hello: "Hello!",
    heroLead:
      "I design elegant interfaces and build modern websites with strong attention to the final visual quality.",
    heroTitlePrefix: "I'm",
    heroTitleName: "Jean-Barron",
    heroTitleSuffix: "web developer",
    heroPrimaryCta: "View portfolio",
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
      "Four clear service formats to launch, present, or sell a product with polished execution and a professional feel.",
    services: [
      {
        title: "Web or mobile app",
        description:
          "For a client area, internal tool, or digital product with an interface designed to feel clear, fluid, and practical.",
        link: "https://comeup.com/fr/service/513245/creer-votre-site-web-vitrine-e-commerce-optimise-seo-sur-mesure",
      },
      {
        title: "Showcase website",
        description:
          "To present your business, reassure visitors, and build a serious online presence with a premium design direction.",
        link: "https://comeup.com/fr/service/513245/creer-votre-site-web-vitrine-e-commerce-optimise-seo-sur-mesure",
      },
      {
        title: "E-commerce",
        description:
          "To sell online with a buying journey that feels simpler, clearer, and more convincing.",
        link: "https://comeup.com/fr/service/513245/creer-votre-site-web-vitrine-e-commerce-optimise-seo-sur-mesure",
      },
      {
        title: "Landing page",
        description:
          "To launch an offer, capture leads, or highlight a product with a page focused on conversion.",
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
        period: "2025 - Present",
        company: "Freelance, Benin",
        role: "Front-end web developer",
        text: "Building custom portfolios, landing pages, and showcase websites with a strong focus on clarity and experience.",
      },
      {
        period: "2024 - Present",
        company: "Client & personal projects",
        role: "Pixel-perfect web integration",
        text: "Delivering modern interfaces with careful attention to visual fidelity, user flows, and overall experience.",
      },
      {
        period: "2023 - 2024",
        company: "Intensive self-training",
        role: "Front-end developer",
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
          "I can build showcase websites, landing pages, web apps, redesigns, blogs, and e-commerce experiences depending on your goal.",
      },
      {
        question: "Do you only handle design or also implementation?",
        answer:
          "I can help with visual direction, front-end implementation, or both so the final experience stays consistent.",
      },
      {
        question: "Can you improve an existing website?",
        answer:
          "Yes. I can start from an existing website to fix bugs, modernize the interface, or rethink the structure for more clarity.",
      },
      {
        question: "How does a collaboration usually start?",
        answer:
          "We first align on the goal, content, and timeline. Then I suggest a clear direction before moving into production.",
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
    ],
    marquee:
      "UX Research ✦ UI Design ✦ App Design ✦ Dashboard ✦ Showcase Website ✦ Landing Page ✦ Web App ✦ Responsive Web ✦",
    footerTitle: "Let's stay connected",
    footerDescription:
      "Full-stack web developer creating stronger visual experiences for projects that want to stand out.",
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
