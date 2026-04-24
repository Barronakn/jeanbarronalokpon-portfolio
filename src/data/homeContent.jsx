import React from "react";
import vitrine from "../assets/img/vitrine.png";
import landing from "../assets/img/landing page.png";
import ecommerce from "../assets/img/e-commerce.png";
import cargo from "../assets/img/cargo.png";
import carte from "../assets/img/carte.png";
import ballamas from "../assets/img/ballamas.png";
import tokena from "../assets/img/tokena.png";

export const navigation = {
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
    brandRole: "Développeur web",
    hireMe: "Me contacter",
    hello: "Bonjour !",
    heroLead:
      "Je conçois des interfaces élégantes et je développe des sites web modernes avec une vraie attention au rendu final.",
    heroTitlePrefix: "Je suis",
    heroTitleName: "Jean-Barron",
    heroTitleSuffix: "développeur web",
    heroPrimaryCta: "Voir le portfolio",
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
        title: "Site vitrine",
        description:
          "Des sites vitrines modernes, propres et bien structures pour presenter ton activite avec un rendu premium.",
        image: vitrine,
        link: "https://comeup.com/fr/service/444767/creer-votre-site-web-vitrine-sur-mesure",
      },
      {
        title: "E-commerce",
        description:
          "Des boutiques en ligne claires, rassurantes et pensees pour faciliter le parcours d'achat et la conversion.",
        image: ecommerce,
        link: "https://comeup.com/fr/service/444773/creer-votre-site-e-commerce-professionnel",
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
        tags: ["Landing Page", "App Web", "Animation", "Site Vitrine"],
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
        image: cargo,
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
        role: "Développeur web front-end",
        text: "Création de portfolios, landing pages et sites vitrines sur mesure avec un focus sur l'expérience et la lisibilité.",
      },
      {
        period: "2024 - 2025",
        company: "Projets clients & personnels",
        role: "Intégration web pixel perfect",
        text: "Intégration d'interfaces modernes, attention portée à la fidélité visuelle, à la clarté des parcours et à l'expérience utilisateur.",
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
      "UX Research ✦ UI Design ✦ App Design ✦ Dashboard ✦ Site Vitrine ✦ Landing Page ✦ App Web ✦ Responsive Web ✦",
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
      "Refined interfaces, stronger landing pages, and redesigns that immediately raise the perceived quality of a product or brand.",
    services: [
      {
        title: "Custom Website",
        description:
          "Modern and polished websites built to present your business with clarity and a premium feel.",
        image: vitrine,
        link: "https://comeup.com/fr/service/444767/creer-votre-site-web-vitrine-sur-mesure",
      },
      {
        title: "E-commerce",
        description:
          "Clear and trustworthy online stores designed to support a smooth buying journey and better conversion.",
        image: ecommerce,
        link: "https://comeup.com/fr/service/444773/creer-votre-site-e-commerce-professionnel",
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
        tags: ["Landing Page", "App Web", "Animation", "Site Vitrine"],
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
        title: "Custom website",
        shortTitle: "Showcase",
        description:
          "A project focused on brand presentation, content hierarchy, and commercial clarity.",
        image: cargo,
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
        role: "Front-end web developer",
        text: "Building custom portfolios, landing pages, and websites with a focus on experience and clarity.",
      },
      {
        period: "2024 - 2025",
        company: "Client & personal projects",
        role: "Pixel perfect web integration",
        text: "Building modern interfaces with strong visual fidelity, clear user flows, and thoughtful user experience across the project.",
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
        role: "Custom website",
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
      "UX Research ✦ UI Design ✦ App Design ✦ Dashboard ✦ Site Vitrine ✦ Landing Page ✦ App Web ✦ Responsive Web ✦",
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

export const renderSocialIcon = (type) => {
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
          <path d="M12 21a8.9 8.9 0 0 0 4.5-1.2l4-.1-1.2-3.7A9 9 0 1 0 12 21Z" />
          <path d="M9 8.8c.2-.4.4-.5.7-.5h.6c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4 0 .6l-.3.5c-.1.2-.2.3-.1.5.4.7 1 1.4 1.7 1.8.2.1.4.1.5 0l.6-.7c.2-.2.4-.2.6-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3-.1.5-.3.7-.4.2-.9.3-1.4.2-.9-.2-1.9-.7-3.1-1.8-1.4-1.2-2-2.3-2.2-3.3-.1-.5-.1-.9.1-1.4Z" />
        </svg>
      );
    default:
      return null;
  }
};

export const renderBadgeParts = (badge) => {
  const [icon, ...words] = badge.split(" ");
  return {
    icon,
    text: words.join(" "),
  };
};
