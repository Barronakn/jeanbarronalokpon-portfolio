import React, { useState } from "react";
import { useEffect } from "react";

const DesktopNav = () => {
  const [activeLink, setActiveLink] = useState("home");
  const handleClickLink = (linkname) => {
    setActiveLink(linkname);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    window.onscroll = () => {
      let scrollPos = window.scrollY;

      sections.forEach((section) => {
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (scrollPos >= offset && scrollPos < offset + height) {
          document
            .querySelectorAll(".nav-bar ul li a")
            .forEach((link) => link.classList.remove("active"));

          const activeLink = document.querySelector(
            `.nav-bar ul li a[href="#${id}"]`
          );
          if (activeLink) {
            activeLink.classList.add("active");
          }
        }
      });
    };

    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <div className="hidden text-gray-300 nav-bar md:block">
      <ul className="flex flex-row gap-10 text-base md:text-lg">
        <li>
          <a
            href="#home"
            className={
              activeLink === "home"
                ? "active hover:text-blue-600"
                : "hover:text-blue-600 hover:border-b-2 hover:border-blue-600 hover:pb-2"
            }
            onClick={() => handleClickLink("home")}
            data-animate="scrolling"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={
              activeLink === "about"
                ? "active hover:text-blue-600"
                : "hover:text-blue-600 hover:border-b-2 hover:border-blue-600 hover:pb-2"
            }
            onClick={() => handleClickLink("about")}
            data-animate="scrolling"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#services"
            className={
              activeLink === "services"
                ? "active hover:text-blue-600"
                : "hover:text-blue-600 hover:border-b-2 hover:border-blue-600 hover:pb-2"
            }
            onClick={() => handleClickLink("services")}
            data-animate="scrolling"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#projets"
            className={
              activeLink === "projets"
                ? "active hover:text-blue-600"
                : "hover:text-blue-600 hover:border-b-2 hover:border-blue-600 hover:pb-2"
            }
            onClick={() => handleClickLink("projets")}
            data-animate="scrolling"
          >
            Projets
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={
              activeLink === "contact"
                ? "active hover:text-blue-600"
                : "hover:text-blue-600 hover:border-b-2 hover:border-blue-600 hover:pb-2"
            }
            onClick={() => handleClickLink("contact")}
            data-animate="scrolling"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DesktopNav;
