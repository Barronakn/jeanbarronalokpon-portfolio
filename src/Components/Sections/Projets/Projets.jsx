import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import landingpage2klean from "../../../assets/img/landingpage-2klean.png";
import carte from "../../../assets/img/carte.png";
import country from "../../../assets/img/country.png";
import codeqr from "../../../assets/img/codeqr.png";
import medium from "../../../assets/img/mediumish.png";
import enjoy from "../../../assets/img/enjoy.png";
import fylla from "../../../assets/img/fylla.png";
import klean from "../../../assets/img/klean.fr.png";
import github from "../../../assets/img/github.png";
import ballamas from "../../../assets/img/ballamas.png";
import nft from "../../../assets/img/nft.png";
import tokena from "../../../assets/img/tokena.png";
import cargo from "../../../assets/img/cargo.png";
import Card from "../Services/Card";

const Projets = () => {
  return (
    <section id="projets" className="pt-10 bg-gray-200">
      <div className="pb-10">
        <div className="container">
          <div className="text-center">
            <div className="w-40 mx-auto my-0 text-lg text-blue-600 bg-blue-600 bg-opacity-20 rounded-xl">
              <h4>Projets</h4>
            </div>
          </div>
          <h1
            data-aos="fade-down"
            className="mt-10 mb-20 text-2xl font-bold text-center text-orange-500 md:text-4xl"
          >
            Mes réalisations
          </h1>

          <section className="flex flex-col items-center justify-around gap-20 lg:gap-0 lg:flex-row">
            <div className="pl-4 mb-4 border-l-4 border-blue-500">
              <h3 className="px-2 py-1 text-sm text-white bg-blue-500 rounded-md">
                Profesionnels
              </h3>

              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper shadow-2xl w-48 h-28 md:w-[400px] md:h-[200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-3 mx-10 md:mx-20 lg:mx-32 place-items-center text-justify"
              >
              <SwiperSlide>
                <Card
                  overview={klean}
                  link="https://2-klean.fr/"
                  action="Voir le site"
                />
              </SwiperSlide>

                <SwiperSlide>
                  <Card
                    overview={landingpage2klean}
                    link="https://2-klean.fr/prenez_rendez-vous_pour_un_nettoyage"
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
                    overview={ballamas}
                    link="https://figma-to-code-ed2-week-two.vercel.app/"
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
                    overview={nft}
                    link="https://figma-to-code-ed2-week-one.vercel.app/"
                    action="Voir le site"
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="pl-4 mb-4 border-l-4 border-blue-500">
              <h3 className="px-2 py-1 text-sm text-white bg-blue-500 rounded-md">
                Personnels
              </h3>

              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper shadow-2xl w-48 h-28 md:w-[400px] md:h-[200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-3 mx-10 md:mx-20 lg:mx-32 place-items-center text-justify"
              >
                <SwiperSlide>
                  <Card
                    overview={codeqr}
                    link="https://code-qr-gold.vercel.app/"
                    action="Voir le site"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    overview={fylla}
                    link="https://fylla-1.vercel.app/"
                    action="Voir le site"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    overview={github}
                    link="https://github.com/Barronakn?page=1&tab=repositories"
                    action="Voir plus de projet"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    overview={country}
                    link="https://monde-barronakn.vercel.app/"
                    action="Voir le site"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    overview={enjoy}
                    link="https://barronakn.github.io/Enjoy/"
                    action="Voir le site"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    overview={medium}
                    link="https://mediumish-blog-theta.vercel.app/"
                    action="Voir le site"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Projets;
