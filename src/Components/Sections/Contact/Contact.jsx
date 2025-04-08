import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="contact" className="bg-sky-blue container py-10">
      <div className="mx-10 sm:mx-auto">
        <div className="text-blue-600 bg-blue-600 bg-opacity-20 text-lg rounded-xl w-40 mx-auto my-0">
          <h4 className="text-center mb-10">Contact</h4>
        </div>

        <div
          className="calendly-inline-widget h-[700px]"
          data-url="https://calendly.com/jeanbarronalokpon/30min"
        ></div>
      </div>
    </section>
  );
};

export default Contact;
