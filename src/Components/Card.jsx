import React from "react";
import viewmore from "../assets/viewsite.png";
import { Link } from "react-router-dom";

const Card = ({ overview, link, action }) => {
  return (
    <div className="relative group flex justify-center items-center flex-col gap-2">
      <img loading="lazy" src={overview} alt="poster of my service" />

      <div className="absolute inset-0 bg-sky-blue-light bg-opacity-60 flex flex-row gap-1 justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity p-4 px-5">
        <Link
          target="_blank"
          to={link}
          className="project flex flex-col cursor-pointer justify-center items-center gap-2"
        >
          <img className="w-6 h-6" src={viewmore} alt="view-web-site-icon" />
          <span className="text-white hover:underline">{action}</span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
