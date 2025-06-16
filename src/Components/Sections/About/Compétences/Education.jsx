import React from "react";
import EducationsList from "./EducationsList";

const Education = () => {
  return (
    <div className="bg-white grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 shadow-lg rounded-xl">
      <EducationsList
        date="2023 - Présent | ESM-BÉNIN"
        title="Troisième année année de SIL"
        description="Système Informatique et Logiciel."
      />

      <EducationsList
        date="Janvier 2023 - Août 2023 | Radice Tech"
        title="Stage professionnel"
        description="Acquisition de compétences en développement web."
      />

      <EducationsList
        date="2022-2023 | VED-UAC"
        title="Développement web"
        description="Initiation au concepte du développement web."
      />
    </div>
  );
};

export default Education;
