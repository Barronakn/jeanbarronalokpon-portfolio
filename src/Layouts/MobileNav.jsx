import React, { useState } from "react";
import { useEffect } from "react";

const MobileNav = () => {
  const [activeLink, setActiveLink] = useState("home");
  const handleClickLink = (linkname) => {
    setActiveLink(linkname);
  };

  useEffect(() => {
    const secs = document.querySelectorAll("section");
    const navlinks = document.querySelectorAll(".navbar ul li a");

    window.onscroll = () => {
      secs.forEach((section) => {
        let tops = window.scrollY;
        let offsets = section.offsetTop - 150;
        let heights = section.offsetHeight;
        let ids = section.getAttribute("id");

        if (tops >= offsets && tops < offsets + heights) {
          navlinks.forEach((link) => {
            link.classList.remove("active");
            document
              .querySelector(".navbar ul li a[href*=" + ids + "]")
              .classList.add("active");
          });
        }
      });
    };
  });

  return (
    <div className="fixed top-20 z-20 block md:hidden w-full bg-sky-blue">
      <div className="navbar md:hidden block text-gray-400">
        <ul className="navbar text-white flex flex-col items-end mr-5 gap-10 p-4 sm:p-8 text-base md:text-lg">
          <li>
            <a
              href="#home"
              className={activeLink === "home" ? "active hover:text-blue-600" :  "hover:text-blue-600 hover:border-b-2 hover:border-blue-600 hover:pb-2"}
              onClick={() => handleClickLink("home")}
              data-animate="scrolling"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeLink === "about" ? "active hover:text-blue-600" :  "hover:text-blue-600 hover:border-b-2 hover:border-blue-600 hover:pb-2"}
              onClick={() => handleClickLink("about")}
              data-animate="scrolling"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={activeLink === "services" ? "active hover:text-blue-600" :  "hover:text-blue-600 hover:border-b-2 hover:border-blue-600 hover:pb-2"}
              onClick={() => handleClickLink("services")}
              data-animate="scrolling"
            >
              Services
            </a>
          </li>
        <li>
          <a
            href="#projets"
            className={activeLink === "projets" ? "active hover:text-blue-600" : "hover:text-blue-600 hover:border-b-2 hover:border-blue-600 hover:pb-2"}
            onClick={() => handleClickLink("projets")}
            data-animate="scrolling"
          >
            Projets
          </a>
        </li>
          <li>
            <a
              href="#contact"
              className={activeLink === "contact" ? "active hover:text-blue-600" :  "hover:text-blue-600 hover:border-b-2 hover:border-blue-600 hover:pb-2"}
              onClick={() => handleClickLink("contact")}
              data-animate="scrolling"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
