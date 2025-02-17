import React, { useState, useEffect } from "react";

const Client = () => {
  const [counterStart, setCounterStart] = useState(false);

  useEffect(() => {
    let values = document.querySelectorAll(".num");
    let interval = 3000;
    let count = document.querySelector('.count')

    const handleScroll = () => {
      values.forEach((value) => {
        let startValue = 0;
        let endValue = parseInt(value.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);

        let topY = window.scrollY;
        let offsetY = count.offsetTop - 500;
        let height = count.offsetHeight;

        if (!counterStart && topY >= offsetY && topY <= offsetY + height) {
          let counter = setInterval(() => {
            startValue += 1;
            value.textContent = startValue;

            if (startValue === endValue) {
              clearInterval(counter);
            }
          }, duration);

          setCounterStart(true);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [counterStart]); 

  return (
    <div className="count bg-black bg-fixed opacity-90 text-white client-bg items-center flex flex-col md:flex-row justify-center gap-20 py-40">
      <div className="flex flex-col items-center">
        <span className="num text-5xl" data-val="03">
          0
        </span>
        <h2 className="text-lg">Clients</h2>
      </div>

      <div className="flex flex-col items-center">
        <span className="num text-5xl" data-val="8">
          0
        </span>
        <h2 className="text-lg">Projets Professionnels</h2>
      </div>

      <div className="flex flex-col items-center">
        <span className="num text-5xl" data-val="20">
          0
        </span>
        <h2 className="text-lg">Projets Personnels</h2>
      </div>
      
      <div className="flex flex-col items-center">
        <span className="num text-5xl" data-val="03">
          0
        </span>
        <h2 className="text-lg">Clients Satisfaits</h2>
      </div>
    </div>
  );
};

export default Client;
