import React, { useState } from "react";
import Logo from "../Components/Logo";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import menu from "../assets/menu_icon.png";
import reset from "../assets/menu-reset.png";

const Nav = () => {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <nav className="bg-img relative">
      <div className="flex flex-row justify-between px-10 md:px-32 items-center left-0 fixed z-50 bg-sky-blue w-full">
        <Logo />
        <DesktopNav />
        
        <div className="block md:hidden" onClick={handleVisible}>
          {visible ? (
            <img
            loading="lazy"
            className="cursor-pointer w-5 h-5"
            onClick={handleVisible}
            src={reset}
            alt="reset-icon"
          />
          ) : (
            <img
              loading="lazy"
              className="h-6 max-w-full cursor-pointer"
              src={menu}
              alt="menu-icon"
            />
          )}
        </div>
      </div>


      {visible && (
          <MobileNav handleVisible={handleVisible} setVisible={setVisible} />
        )}
    </nav>
  );
};

export default Nav;
