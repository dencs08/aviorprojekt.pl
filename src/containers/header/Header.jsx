import React, { useEffect } from "react";
import "./header.scss";
import Assembly from "../../components/kitchen_assembly/KitchenAssembly1";

import { flower1, flower2, flower3 } from "../../assets/flower_images";

import gsap from "gsap";
import SplitText from "../../utils/Split3.min";

const Header = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    const split = new SplitText("#header-text-h2", {
      type: "lines",
      linesClass: "lineChildren",
    });

    const splitParent = new SplitText("#header-text-h2", {
      type: "lines",
      linesClass: "lineParent",
    });

    tl.fromTo(
      "#header-text",
      { y: "100%" },
      {
        y: "-0%",
        opacity: "1",
        duration: 1,
        delay: 0.25,
        ease: "expo",
      }
    );
    tl.to(
      split.lines,
      {
        duration: 1,
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: "expo",
      },
      "-=1"
    );
  }, []);

  return (
    <section
      data-scroll-section
      id="Header"
      className="section-mb-xl section-mt-xl min-h-[40vh]"
    >
      <div className="content-wrapper block md:grid grid-cols-12 gap-5 md:gap-10 lg:gap-12 relative">
        <div
          // data-scroll
          // data-scroll-speed="2"
          className="absolute top-[-25%] left-[3%] w-[25vw] z-[-1]"
        >
          <img src={flower1} className="opacity-10 rotate-[30deg]" alt="" />
        </div>
        <div
          // data-scroll
          // data-scroll-speed="5"
          className="absolute top-[-10%] right-[-20%] bottom-1 z-[-1] w-[25vw] "
        >
          <img src={flower2} className="opacity-10 rotate-[-25deg]" alt="" />
        </div>
        <div
          // data-scroll
          // data-scroll-speed="3"
          className="absolute top-[20%] right-[-20%] bottom-1 z-[-1] w-[25vw] "
        >
          <img src={flower3} className="opacity-10 rotate-[-40deg]" alt="" />
        </div>

        <div className="text-left col-start-1 col-end-7">
          <h1
            data-scroll
            data-scroll-speed="3"
            id="header-text"
            className="font-serif opacity-0"
          >
            Najlepsze <b>meble na wymiar</b>
          </h1>
          <h2 data-scroll data-scroll-speed="5" id="header-text-h2">
            Projektujemy nowoczesne i praktyczne kuchnie, garderoby, wnęki oraz
            przestrzenie biurowe zarówno dla klientów indywidualnych jak i firm
            czy urzędów.
          </h2>
        </div>
        <div className="col-start-7 col-end-13">
          <Assembly />
        </div>
      </div>
    </section>
  );
};

export default Header;
