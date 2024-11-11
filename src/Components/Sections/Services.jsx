import React from "react";
import refonte from "../../assets/img/refonte.png";
import vitrine from "../../assets/img/vitrine.png";
import blog from "../../assets/img/blog.png";
import landing from "../../assets/img/landing page.png";
import boutique from "../../assets/img/e-commerce.png";
import Card from "../Card";
import Client from "../Client";

const Services = () => {
  return (
    <section id="services" className="pb-10 bg-purple-sky">
      <div className="container mb-10">
        <div className="">
          <p className="text-center text-blue-600 bg-blue-600 bg-opacity-20 text-lg rounded-xl w-40 mx-auto my-0">
            Services
          </p>
        </div>
        <h1
          data-aos="fade-down"
          className="text-center text-orange-500 mt-10 mb-20 font-bold text-xl sm:text-2xl md:text-4xl my-5 "
        >
          Que puis-je faire?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-3 mx-10 md:mx-20 lg:mx-32 place-items-center text-justify">
          <Card
            overview={vitrine}
            link="https://comeup.com/fr/service/444767/creer-votre-site-web-vitrine-sur-mesure"
            action="Voir plus"
          />

          <Card
            overview={boutique}
            link="https://comeup.com/fr/service/444773/creer-votre-site-e-commerce-professionnel"
            action="Voir plus"
          />

          <Card
            overview={landing}
            link="https://comeup.com/fr/service/436678/creer-votre-landing-page-professionnel-et-sur-mesure"
            action="Voir plus"
          />

          <Card
            overview={blog}
            link="https://comeup.com/fr/service/436653/creer-votre-blog-professionnel-ou-personnel"
            action="Voir plus"
          />

          <Card
            overview={refonte}
            link="https://comeup.com/fr/service/436716/faire-la-refonte-de-votre-site-optimiser-le-design-et-le-seo"
            action="Voir plus"
          />
        </div>
      </div>

      <Client />
    </section>
  );
};

export default Services;
