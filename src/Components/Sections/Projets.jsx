import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import francite from "../../assets/img/francite.png";
import { EffectCards } from "swiper/modules";
import carte from "../../assets/img/carte.png";
import koulkool from "../../assets/img/koulkool.png";
import country from "../../assets/img/country.png";
import ballamas from "../../assets/img/ballamas.png";
import nft from "../../assets/img/nft.png";
import tokena from "../../assets/img/tokena.png";
import cargo from "../../assets/img/cargo.png";
import Card from "../Card";

const Projets = () => {
  return (
    <section id="projets" className="bg-purple-sky">
      <div className="pb-10">
        <div className="container">
          <div className="text-center">
            <div className="text-blue-600 bg-blue-600 bg-opacity-20 text-lg rounded-xl w-40 mx-auto my-0">
              <h4>Projets</h4>
            </div>
          </div>
          <h1
            data-aos="fade-down"
            className="text-center text-2xl md:text-4xl mt-10 mb-20 text-orange-500 font-bold"
          >
            Mes réalisations
          </h1>

          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper w-48 h-28 md:w-[400px] md:h-[200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-3 mx-10 md:mx-20 lg:mx-32 place-items-center text-justify"
          >
            <SwiperSlide>
              <Card
                overview={francite}
                link="https://www.francite.eu/fr"
                action="Voir le site"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                overview={cargo}
                link="https://grhtlgroup.com/"
                action="Voir le site"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                overview={carte}
                link="https://carte.mongopatrimoine.com/"
                action="Voir le site"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                overview={tokena}
                link="https://figma-to-code-ed2-week-three.vercel.app/dashboard"
                action="Voir le site"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                overview={ballamas}
                link="https://figma-to-code-ed2-week-two.vercel.app/"
                action="Voir le site"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                overview={nft}
                link="https://figma-to-code-ed2-week-one.vercel.app/"
                action="Voir le site"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                overview={koulkool}
                link="https://koul-kool-wsnu-2duxvxd0a-barronakns-projects.vercel.app/"
                action="Voir le site"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                overview={country}
                link="https://monde-barronakn.vercel.app/"
                action="Voir le site"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projets;
