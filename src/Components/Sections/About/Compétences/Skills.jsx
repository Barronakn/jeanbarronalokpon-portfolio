import html from "../../../../assets/img/html.png";
import css from "../../../../assets/img/css.png";
import javascript from "../../../../assets/img/javascript.png";
import react_js from "../../../../assets/img/react.png";
import typescript from "../../../../assets/img/typescript.png";
import laravel from "../../../../assets/img/laravel.png";
import tailwind from "../../../../assets/img/tailwindcss.png";
import php from "../../../../assets/img/php.png";
import sql from "../../../../assets/img/mysql.png";
import Image from "../../../Image";

const Skills = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around  items-center gap-10">
      <div className="left">
        <h4
          data-aos="fade-down"
          className="text-xl text-center text-orange-500 md:text-3xl"
        >
          Stack
        </h4>
        <div className="meter py-4">
          <div
            data-aos="fade-right"
            className="flex flex-row justify-between px-10 sm:px-0"
          >
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
        <div className="meter pb-4">
          <div
            data-aos="fade-right"
            className="flex flex-row justify-between px-10 sm:px-0"
          >
            <span className="text-lg">JavaScript + Reactjs + TypeScript</span>
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
        <div className="meter pb-4">
          <div
            data-aos="fade-right"
            className="flex flex-row justify-between px-10 sm:px-0"
          >
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
        <Image stack={html} desc_stack="icon of html logo" classicon="icon-1" />
        <Image stack={css} desc_stack="icon of css logo" classicon="icon-2" />
        <Image
          stack={javascript}
          desc_stack="icon of javascript logo"
          classicon="icon-3"
        />
        <Image stack={php} desc_stack="icon of php logo" classicon="icon-4" />
        <Image stack={sql} desc_stack="icon of sql logo" classicon="icon-5" />
        <Image
          stack={laravel}
          desc_stack="icon of laravel logo"
          classicon="icon-6"
        />
        <Image
          stack={react_js}
          desc_stack="icon of react_js logo"
          classicon="icon-7"
        />
        <Image
          stack={typescript}
          desc_stack="icon of typescript logo"
          classicon="icon-8"
        />
        <Image
          stack={tailwind}
          desc_stack="icon of tailwind logo"
          classicon="icon-9"
        />
      </div>
    </div>
  );
};

export default Skills;
