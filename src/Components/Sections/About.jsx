import React from "react";
import person from "../../assets/img/Barron.png";
import { Link } from "react-router-dom";
import cv from "../../assets/img/Jean-Barron E. ALOKPON CV 2023.pdf";
import Compétences from "../Sections/Compétences";

const About = () => {
  return (
    <section id="about" className="bg-purple-sky py-10">
      <div className="flex flex-col xl:flex-row justify-around mx-10 sm:mx-20 md:mx-32 mb-10">
        <div className="xl:w-1/4 py-3 relative z-0 mx-auto my-0">
          <div className="absolute left-4 top-8 sm:top-0 sm:left-12 -z-50 border-blue-600 border-8 h-5/6 w-full"></div>
          <div data-aos="fade-right" className="z-40 mt-10">
            <img loading="lazy" src={person} alt="barron-img" />
          </div>
        </div>

        <div data-aos="fade-left" className="xl:w-3/6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-orange-500">
              Jean-Barron ALOKPON
            </h1>
            <h5 className="my-3 text-blue-600 text-xl">
              Développeur web full-stack
            </h5>
            <p className="text-base md:text-lg text-white">
              Développeur Web junior autodidacte passionné par la création de sites
              conviviales, je possède une solide expérience dans les langages de
              programmation, ainsi que dans les frameworks. Je suis convaincu
              que la collaboration est la clé du succès dans le développement de
              projets Web complexes.
            </p>
          </div>
          <ul className="list my-10 relative px-8 z-10 before:absolute before:top-0 before:bottom-0 before:left-2 before:m-auto before:w-1 before:bg-black before:-z-10 before:h-5/6 text-white">
            <li>
              <span className="font-bold text-xs sm:text-base">Habite à :</span> <span className="text-xs sm:text-base">Abomey-Calavi, Bénin</span>
            </li>
            <li>
              <span className="font-bold text-xs sm:text-base">Age :</span> <span className="text-xs sm:text-base">21</span>
            </li>
            <li>
              <span className="font-bold text-xs sm:text-base">Genre :</span> <span className="text-xs sm:text-base">Masculin</span>
            </li>
            <li>
              <span className="font-bold text-xs sm:text-base">Email : </span>{" "}
              <Link className="hover:underline text-xs sm:text-base" to="mailto:jeanbarronalokpon@gmail.com">
                jeanbarronalokpon@gmail.com
              </Link>
            </li>
            <li>
              <span className="font-bold text-xs sm:text-base">WhatsApp : </span>{" "}
              <Link className="hover:underline text-xs sm:text-base" to="https://wa.me/22952291586">+229 61225071</Link>
            </li>
          </ul>

          <div>
            <Link
              to={cv}
              target="_blank"
              className="btn py-3 text-blue-600 border-4 hover:bg-blue-700 hover:bg-opacity-20 border-blue-600 rounded-xl px-8"
            >
              Download CV
            </Link>
          </div>
        </div>
      </div>

      <Compétences />
    </section>
  );
};

export default About;
