import React from "react";

const ExperiencesList = ({ date, title, description }) => {
  return (
    <div className="border-l-4 border-blue-500 pl-4 mb-4">
      <span className="text-sm bg-blue-500 text-white px-2 py-1 rounded-md">
        {date}
      </span>
      <h3 className="text-base sm:text-lg font-semibold mt-2">{title}</h3>
      <p className="text-md sm:text-base text-gray-600">{description}</p>
    </div>
  );
};

export default ExperiencesList;
