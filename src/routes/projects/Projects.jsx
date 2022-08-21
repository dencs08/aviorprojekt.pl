import React, { useEffect } from "react";
import { MomentumSlider } from "../../components";

import gsap from "gsap";

const Projects = () => {
  useEffect(() => {
    gsap.to("h1", { y: "0%", duration: 1, ease: "expo" });
  }, []);

  return (
    <section data-scroll-section className="section-mt section-mb">
      <div data-scroll data-scroll-speed="-6">
        <div className="content-wrapper text-center truncate mb-6">
          <h1 className="font-serif translate-y-full">Zrealizowane projekty</h1>
        </div>
        <MomentumSlider />
      </div>
    </section>
  );
};

export default Projects;
