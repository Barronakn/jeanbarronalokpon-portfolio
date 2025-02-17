import { useState } from "react";
import Certificat from "./Certificat";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

const Compétences = () => {
  const [education, setEducation] = useState(true);
  const [experience, setExperience] = useState(false);
  const [certificat, setCertificat] = useState(false);

  return (
    <div className="compétences py-10 bg-gray-200">
      <h1
        data-aos="fade-down"
        className="text-center text-orange-500 mb-20 text-2xl md:text-4xl font-bold"
      >
        Mes compétences
      </h1>

      <Skills />

      <div className="mx-5 sm:mx-10 lg:mx-24 my-14">
        <div className="flex flex-row flex-wrap items-center justify-center gap-8 mb-6">
          <button
            onClick={() => {
              setEducation(true);
              setCertificat(false);
              setExperience(false);
            }}
            className={`text-lg sm:text-xl font-bold text-gray-800 mb-4" ${
              education
                ? "border-b-blue-600 border-4 pb-2"
                : "border-b-transparent pb-2"
            }`}
          >
            Éducation
          </button>
          <button
            onClick={() => {
              setEducation(false);
              setCertificat(false);
              setExperience(true);
            }}
            className={`text-lg sm:text-xl font-bold text-gray-800 mb-4" ${
              experience
                ? "border-b-blue-600 border-4 pb-2"
                : "border-b-transparent pb-2"
            }`}
          >
            Expérience
          </button>
          <button
            onClick={() => {
              setEducation(false);
              setCertificat(true);
              setExperience(false);
            }}
            className={`text-lg sm:text-xl font-bold text-gray-800 mb-4" ${
              certificat
                ? "border-b-blue-600 border-4 pb-2"
                : "border-b-transparent pb-2"
            }`}
          >
            Certificats
          </button>
        </div>

        {education && (
          <div className="container">
            <Education />
          </div>
        )}
        {experience && (
          <div className="container">
            <Experience />
          </div>
        )}
        {certificat && (
          <div className="container">
            <Certificat />
          </div>
        )}
      </div>
    </div>
  );
};

export default Compétences;
