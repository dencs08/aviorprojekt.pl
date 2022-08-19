import React from "react";
import { MomentumSlider } from "../../components";

const Projects = () => {
  return (
    <section data-scroll-section className="section-mt section-mb">
      <div data-scroll data-scroll-speed="-6">
        <div className="content-wrapper text-center">
          <h1 className="font-serif">Zrealizowane projekty</h1>
        </div>
        <MomentumSlider />
      </div>
    </section>
  );
};

export default Projects;
