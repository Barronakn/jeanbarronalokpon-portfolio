import React from "react";
import ExperiencesList from "./ExperiencesList";

const Experience = () => {
  return (
    <div className="bg-white grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 shadow-lg rounded-xl">
      <ExperiencesList
        date="2023 - Présent"
        title="Freelance"
        description="Développeur web"
      />
    </div>
  );
};

export default Experience;
