import React from "react";

const CertificatsList = ({
  certificatImage,
  certificatDesc,
  certificatLink,
  certificatName,
}) => {
  return (
    <div className="border-l-4 border-blue-500 pl-4 mb-4">
      <img
        className="cursor-pointer w-72 pointer-events-none"
        src={certificatImage}
        alt={certificatDesc}
      />
      <h3 className="text-base sm:text-lg font-semibold">{certificatName}</h3>
      <a
        target="_blank"
        className="text-md sm:text-base text-blue-700 hover:underline"
        href={certificatLink}
        rel="noreferrer"
      >
        Voir le certificat
      </a>
    </div>
  );
};

export default CertificatsList;
