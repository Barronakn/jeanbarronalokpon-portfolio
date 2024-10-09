import React from "react";
import notfound from "../assets/img/notfound.png";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <img loading="lazy" src={notfound} alt="notfound-img" />
      <h1 className="text-center">Cette page n'existe pas</h1>
      <br />
      <div className="text-center">
        <Link
          className="text-blue-600 bg-white shadow-md text-lg hover:text-white hover:bg-blue-500 px-5 py-1 rounded-lg"
          to="/"
        >
          Accueil
        </Link>
      </div>
    </div>
  );
};

export default Error;
