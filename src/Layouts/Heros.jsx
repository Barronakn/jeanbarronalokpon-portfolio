import React from "react";

const Heros = () => {
  return (
    <header className="relative bg-img h-[100vh] z-0">
      <div className="bg-black bg-opacity-70 h-[100vh]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h5 className="text-lg sm:text-xl md:text-2xl text-white">Bienvenu</h5>
        <h1 className="my-4 text-xl sm:text-2xl md:text-4xl text-white">
          Je suis <span className="text-blue-600">Jean-Barron</span> ALOKPON
        </h1>
        <div className="text-blue-600 bg-blue-500 bg-opacity-20 font-bold rounded-3xl  py-2 px-8 sm:px-1 sm:py-4 text-xs sm:text-base md:text-lg">
          Développeur web full-stack
        </div>
      </div>
    </header>
  );
};

export default Heros;
