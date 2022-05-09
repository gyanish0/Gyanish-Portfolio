import React from "react";
import "./body.css";
import About from "./about/index";
import Projects from "./projects/index";
import Skills from "./skills/index";
import Work from "./work/index";
import Contact from "./contact/index";
import Quote from "../Quote/Quote";
function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="work">
        <Quote />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
