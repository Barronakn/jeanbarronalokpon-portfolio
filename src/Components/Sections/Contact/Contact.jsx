import React from "react";

const Contact = () => {
  return (
    <div>
      <div
        className="calendly-inline-widget min-w-80 h-[700px]"
        data-url="https://calendly.com/jeanbarronalokpon/30min"
      ></div>
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
    </div>
  );
};

export default Contact;
