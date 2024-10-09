import React from "react";
import html from "../../assets/img/html.png"
import css from "../../assets/img/css.png"
import javascript from "../../assets/img/javascript.png"
import react_js from "../../assets/img/react.png"
import next from "../../assets/img/Next.js.png"
import laravel from "../../assets/img/laravel.png"
import tailwind from "../../assets/img/tailwindcss.png"
import php from "../../assets/img/php.png"
import sql from "../../assets/img/mysql.png"
import Image from "../Image";

const Compétences = () => {
  return (
    <div className="compétences py-10 bg-sky-blue">
      <h1 className="text-center text-orange-500 mb-20 text-2xl md:text-4xl font-bold fadeIn">
        Mes compétences
      </h1>
      <div className="flex flex-col md:flex-row justify-around  items-center gap-10">
        <div className="left">
          <h4 className="text-xl text-center text-orange-500 md:text-3xl fadeInUp">
            Stack
          </h4>
          <div className="meter text-white py-4 fadeInUp">
            <div className="flex flex-row justify-between px-10 sm:px-0">
              <span className="text-lg">PHP + Mysql + Laravel</span>
              <span className="text-lg">80%</span>
            </div>
            <div className="meter">
              <meter
                className="w-[300px] sm:w-96 px-10 sm:px-0 h-8 text-white"
                value="80"
                max="100"
              ></meter>
            </div>
          </div>
          <div className="meter text-white pb-4 fadeInUp">
            <div className="flex flex-row justify-between px-10 sm:px-0">
              <span className="text-lg">JavaScript + Reactjs + Nextjs</span>
              <span className="text-lg">90%</span>
            </div>
            <div className="meter">
              <meter
                className="w-[300px] sm:w-96 px-10 sm:px-0 h-8 text-white"
                value="90"
                max="100"
              ></meter>
            </div>
          </div>
          <div className="meter text-white pb-4 fadeInUp">
            <div className="flex flex-row justify-between px-10 sm:px-0">
              <span className="text-lg">HTML + CSS + SASS + TAILWINDCSS</span>
              <span className="text-lg">95%</span>
            </div>
            <div className="meter">
              <meter
                className="w-[300px] sm:w-96 px-10 sm:px-0 h-8 text-white"
                value="95"
                max="100"
              ></meter>
            </div>
          </div>
        </div>

        <div className="right  px-10 sm:px-0 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
          <Image stack={html} desc_stack="html-icon" classicon="icon-1" />
          <Image stack={css} desc_stack="css-icon" classicon="icon-2" />
          <Image stack={javascript} desc_stack="javascript-icon" classicon="icon-3" />
          <Image stack={php} desc_stack="php-icon" classicon="icon-4" />
          <Image stack={sql} desc_stack="sql-icon" classicon="icon-5" />
          <Image stack={laravel} desc_stack="laravel-icon" classicon="icon-6" />
          <Image stack={react_js} desc_stack="react_js-icon" classicon="icon-7" />
          <Image stack={next} desc_stack="next-icon" classicon="icon-8" />
          <Image stack={tailwind} desc_stack="tailwind-icon" classicon="icon-9" />
        </div>
      </div>
    </div>
  );
};

export default Compétences;
