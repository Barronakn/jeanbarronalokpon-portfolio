import React from "react";
import { Link } from "react-router-dom";

const FooterSociaux = ({link, icon, alt}) => {
  return (
    <div className="flex flex-row justify-center items-center gap-2">
      <Link className="hover:underline" to={link}>
        <img loading="lazy" className="w-8 h-8" src={icon} alt={alt} />
      </Link>
    </div>
  );
};

export default FooterSociaux;
