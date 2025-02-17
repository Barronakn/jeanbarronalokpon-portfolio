import React from "react";
import { Link } from "react-router-dom";
import github from "../assets/sociaux/github.png";
import facebook from "../assets/sociaux/facebook.png";
import wathsApp from "../assets/sociaux/whatsapp.png";
import linkedin from "../assets/sociaux/linkedin.png";
import mail from "../assets/sociaux/mail.png";
import FooterSociaux from "../Components/FooterSociaux";

const Footer = () => {
  return (
    <footer className="bg-purple-sky text-white py-5 px-10 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div>
          <p className="text-center text-white mt-2">
            Copyright © 2024 -{" "}
            <Link className="text-blue-700 hover:underline" href="/">
              Jean-Barron ALOKPON
            </Link>{" "}
            | Tous droits réservés.
          </p>
        </div>

        <ul className="mt-4 flex flex-row justify-center items-center gap-5">
          <FooterSociaux
            link="https://github.com/Barronakn"
            icon={github}
            alt="github-icon"
          />
          <FooterSociaux
            link="mailto:jeanbarronalokpon@gmail.com"
            icon={mail}
            alt="mail-icon"
          />
          <FooterSociaux
            link="https://wa.me/22961225071"
            icon={wathsApp}
            alt="wathsApp-icon"
          />
          <FooterSociaux
            link="htpps://www.linkedin.com/in/jean-barron-alopkon"
            icon={linkedin}
            alt="linkedin-icon"
          />
          <FooterSociaux
            link="htpps://www.facebook.com/jeanbarron.akn"
            icon={facebook}
            alt="facebook-icon"
          />
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
