import React from "react";
import ExperiencesList from "./ExperiencesList";

const Experience = () => {
  return (
    <div className="bg-white grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 shadow-lg rounded-xl">
      <ExperiencesList
        date="Décembre 2023 - Présent"
        title="Freelance"
        description="Développeur web"
      />
      <ExperiencesList
        date="2025"
        title="Chef d'équipe | MIABE HACKHATON"
        description="Conception d'une solution simple et accessible à tous qui permet d'encourager particuliers et entreprises à recycler efficacement les déchets; connecter producteurs de déchets aux acteurs du recyclage."
      />
      <ExperiencesList
        date="2024"
        title="Figma to Code"
        description="Transformation de maquette Figma de 4 interfaces web modernes et réactives en 1 mois"
      />
    </div>
  );
};

export default Experience;
