import React from "react";
import CertificatFigmaToCode from "../../../../assets/img/certificat figma to code.png";
import CertificatImage1 from "../../../../assets/img/certificat html et css.png";
import CertificatImage2 from "../../../../assets/img/certificat intro au frontend.png";
import CertificatImage3 from "../../../../assets/img/certificat intro au backend.png";
import CertificatsList from "./CertificatsList";

const Certificat = () => {
  return (
    <div className="bg-white grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 shadow-lg rounded-xl">
      <CertificatsList
        certificatImage={CertificatImage1}
        certificatDesc="certificat html et css"
        certificatLink="https://www.coursera.org/account/accomplishments/verify/K04JG8MXLNLA"
        certificatName="HTML and CSS: Building a Single-Page Website"
      />

      <CertificatsList
        certificatImage={CertificatImage2}
        certificatDesc="certificat intro au frontend"
        certificatLink="https://www.coursera.org/account/accomplishments/records/ZU37VCLSXG3P"
        certificatName="Introduction to Back-End Development"
      />

      <CertificatsList
        certificatImage={CertificatImage3}
        certificatDesc="certificat intro au frontend"
        certificatLink="https://www.coursera.org/account/accomplishments/verify/YDQ94X9GX0HD"
        certificatName="Introduction to Front-End Development"
      />

      <div className="border-l-4 w-44 sm:w-64 lg:w-72 border-blue-500 pl-4">
        <img
          className="cursor-pointer pointer-events-none"
          src={CertificatFigmaToCode}
          alt="certificat figma to code.png"
        />
        <h3 className="text-lg font-semibold">Figma to Code</h3>
        <p className="text-gray-600">
          Conversion de maquettes en site optimisé.
        </p>
      </div>
    </div>
  );
};

export default Certificat;
