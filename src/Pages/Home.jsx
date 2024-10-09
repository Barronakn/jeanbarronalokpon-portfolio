import React from "react";
import Nav from "../Layouts/Nav";
import Heros from "../Layouts/Heros";
import { About, Contact, Footer, Projets, Services } from "../Components/Sections";

const Home = () => {
  return (
    <section id="home" className="bg-gray-200">
      <Nav />
      <Heros />
      <About />
      <Services />
      <Projets />
      <Contact />
      <Footer />
    </section>
  );
};

export default Home;
