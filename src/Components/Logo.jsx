import React from 'react';
import logo from "../assets/img/logo.png"

const Logo = () => {
    return (
        <div>
            <a href="/">
              <img loading="lazy" className="w-20 h-20 md:w-24 md:h-24" src={logo} alt="logo-img" />
            </a>
        </div>
    );
};

export default Logo;