const SITE_URL = "https://jeanbarronalokpon-portfolio.vercel.app";

const setMeta = (attr, attrName, content) => {
  let el = document.head.querySelector(`meta[${attr}="${attrName}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, attrName);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setCanonical = (href) => {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const setHreflang = (hrefLang, href) => {
  let el = document.head.querySelector(
    `link[rel="alternate"][hreflang="${hrefLang}"]`
  );
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "alternate");
    el.setAttribute("hreflang", hrefLang);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const buildJsonLd = (url, ogLocale, t) => [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${url}#person`,
    name: "Jean-Barron ALOKPON",
    alternateName: "BarronDev",
    url,
    image: `${SITE_URL}/og-image.png`,
    jobTitle:
      ogLocale === "en_US" ? "Frontend Developer" : "Développeur Frontend",
    description:
      ogLocale === "en_US"
        ? "Frontend Developer based in Benin, specializing in designing and building modern, high-performance, responsive web interfaces with React, Next.js, TypeScript, JavaScript and Tailwind CSS."
        : "Développeur Frontend au Bénin, spécialisé dans la conception et le développement d'interfaces web modernes, performantes et responsives avec React, Next.js, TypeScript, JavaScript et Tailwind CSS.",
    knowsAbout: [
      "Frontend Development",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "UI Design",
      "Responsive Web Design",
      "Web Performance",
      "Accessibility",
      "Laravel",
      "PHP",
      "MySQL",
    ],
    knowsLanguage: ["fr", "en"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cotonou",
      addressCountry: "BJ",
    },
    nationality: "Benin",
    worksFor: { "@type": "Organization", name: "Freelance" },
    sameAs: [
      "https://github.com/Barronakn",
      "https://www.linkedin.com/in/jean-barron-alokpon",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}#website`,
    url,
    name: "BarronDev | Jean-Barron ALOKPON",
    description:
      ogLocale === "en_US"
        ? "Portfolio of Jean-Barron ALOKPON, Frontend Developer in Benin specialized in React, Next.js, TypeScript and Tailwind CSS."
        : "Portfolio de Jean-Barron ALOKPON, Développeur Frontend au Bénin spécialisé en React, Next.js, TypeScript et Tailwind CSS.",
    inLanguage: ogLocale === "en_US" ? "en" : "fr",
    publisher: { "@id": `${url}#person` },
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${url}#profile`,
    url,
    name:
      ogLocale === "en_US"
        ? "Jean-Barron ALOKPON | Frontend Developer"
        : "Jean-Barron ALOKPON | Développeur Frontend",
    inLanguage: ogLocale === "en_US" ? "en" : "fr",
    mainEntity: { "@id": `${url}#person` },
    isPartOf: { "@id": `${url}#website` },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: "Développement Frontend — React, Next.js, TypeScript",
    serviceType: "Frontend Development",
    provider: { "@id": `${url}#person` },
    areaServed: [
      { "@type": "Country", name: "Benin" },
      { "@type": "AdministrativeArea", name: "Afrique francophone" },
    ],
    offers: {
      "@type": "Offer",
      description:
        "Sites vitrines, applications web, dashboards, e-commerce et landing pages sur mesure, avec des interfaces modernes, responsives et performantes.",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export const applySeo = (locale, t) => {
  const url = `${SITE_URL}/${locale}/`;
  const ogLocale = locale === "en" ? "en_US" : "fr_FR";

  document.documentElement.setAttribute("lang", locale === "en" ? "en" : "fr");
  document.title = t.seoTitle;

  setMeta("name", "description", t.seoDescription);
  setMeta("property", "og:title", t.seoTitle);
  setMeta("property", "og:description", t.seoDescription);
  setMeta("property", "og:url", url);
  setMeta("property", "og:locale", ogLocale);
  setMeta("name", "twitter:title", t.seoTitle);
  setMeta("name", "twitter:description", t.seoDescription);

  setCanonical(url);
  setHreflang("fr", `${SITE_URL}/fr/`);
  setHreflang("en", `${SITE_URL}/en/`);
  setHreflang("x-default", `${SITE_URL}/fr/`);

  const jsonLd = buildJsonLd(url, ogLocale, t);
  let script = document.getElementById("seo-jsonld");
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "seo-jsonld";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(jsonLd);
};
