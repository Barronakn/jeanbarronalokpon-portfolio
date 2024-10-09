import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../assets/sociaux/facebook.png";
import wathsApp from "../../assets/sociaux/whatsapp.png";
import linkedin from "../../assets/sociaux/linkedin.png";
import mail from "../../assets/sociaux/mail.png";

const Footer = () => {
  return (
    <footer className="bg-purple-sky text-white py-5 px-10 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div>
          <p className="text-center text-white mt-2">
            Copyright © 2024 - <Link className="text-blue-700 hover:underline" href="/">Jean-Barron ALOKPON</Link> | Tous droits réservés.
          </p>
        </div>

        <ul className="mt-4 flex flex-row justify-center items-center gap-5">
          <div className="flex flex-row justify-center items-center gap-2">
            <Link
              className="hover:underline"
              to="mailto:jeanbarronalokpon@gmail.com"
            >
              <img loading="lazy" className="w-8 h-8" src={mail} alt="mail-icon" />
            </Link>
          </div>
          <div className="flex flex-row justify-center items-center gap-2">
            <Link className="hover:underline" to="https://wa.me/22961225071">
              <img loading="lazy" className="w-8 h-8" src={wathsApp} alt="wathsApp-icon" />
            </Link>
          </div>
          <div className="flex flex-row justify-center items-center gap-2">
            <Link to="htpps://www.linkedin.com/in/jean-barron-alopkon-66501b22b">
              <img loading="lazy" className="w-8 h-8" src={linkedin} alt="linkedin-icon" />
            </Link>
          </div>
          <div className="flex flex-row justify-center items-center gap-2">
            <Link
              className="hover:underline"
              to="htpps://www.facebook.com/jeanbarron.akn"
            >
              <img loading="lazy" className="w-7 h-7" src={facebook} alt="facebook-icon" />
            </Link>
          </div>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
