import React from "react";
import EducationsList from "./EducationsList";

const Education = () => {
  return (
    <div className="bg-white grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 shadow-lg rounded-xl">
      <EducationsList
        date="2023 - Présent"
        durée="Deuxième année de SIL"
        description="Système Informatique et Logiciel."
      />

      <EducationsList
        date="2022 - Présent"
        durée="Formation chez Radice Tech"
        description="Acquisition de compétences en développement web."
      />
    </div>
  );
};

export default Education;
