import React, { useEffect, useState, useRef } from "react";
import "./our_works.scss";

import center from "../../assets/project/foto8.jpg";
import topLeft from "../../assets/project/kitchen1.jpg";
import topRight from "../../assets/project/wardrobe1.jpg";
import bottomLeft from "../../assets/project/countertop1.jpg";
import bottomRight from "../../assets/project/3.jpg";

import { flower3 } from "../../assets/flower_images";

import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import useOnScreen from "../../hooks/useOnScreen";

const OurWorks = () => {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#ourWorks-p", {
        type: "lines",
        linesClass: "lineChildren",
      });
      const splitParent = new SplitText("#ourWorks-p", {
        type: "lines",
        linesClass: "lineParent",
      });
      gsap.to(split.lines, {
        duration: 1,
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: "expo",
      });
    }
  }, [reveal]);

  return (
    <section
      data-scroll-section
      id="ourWorks"
      className="section-mt mb-10 md:mb-32 lg:mb-52 xl:mb-96"
    >
      <div className="text-center relative content-wrapper relative">
        <div
          data-scroll
          data-scroll-speed="-2"
          data-scroll-direction="horizontal"
          className="absolute top-[15%] right-[25%] left-[55%] bottom-1  z-[-1] w-[20vw]"
        >
          <img src={flower3} className="opacity-10 rotate-[25deg]" alt="" />
        </div>
        <div
          data-scroll
          data-scroll-speed="2"
          data-scroll-direction="horizontal"
          className="absolute top-[8%] right-[25%] left-[25%] bottom-1 z-[-1] w-[25vw]"
        >
          <img src={flower3} className="opacity-10 rotate-[-30deg]" alt="" />
        </div>

        <h3 className="font-sans mb-8 md:mb-12 lg:mb-16 xl:mb-20">
          Nasze prace
        </h3>
        <div>
          <div>
            <img
              data-scroll
              className="mx-auto animate-reveal"
              src={center}
              alt=""
            />
          </div>
          <div
            data-scroll
            data-scroll-speed="3"
            data-scroll-direction="horizontal"
            className="absolute top-96 left-10 sm:left-16 md:left-32 lg:left-52 xl:left-80 w-1/5 hidden lg:block"
          >
            <img data-scroll className="animate-reveal" src={topLeft} alt="" />
          </div>
          <div
            data-scroll
            data-scroll-speed="-3.25"
            data-scroll-direction="horizontal"
            className="absolute top-72 right-10 sm:right-16 md:right-32 lg:right-52 xl:right-80 w-1/5 hidden lg:block"
          >
            <img data-scroll className="animate-reveal" src={topRight} alt="" />
          </div>
          <div
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
            className="absolute bottom-[-10%] left-10 sm:left-16 md:left-32 lg:left-60 w-1/5 hidden lg:block"
          >
            <img
              data-scroll
              className="animate-reveal"
              src={bottomLeft}
              alt=""
            />
          </div>
          <div
            data-scroll
            data-scroll-speed="-1"
            data-scroll-direction="horizontal"
            className="absolute bottom-[-5%] right-10 sm:right-16 md:right-40 lg:right-72 w-1/5 hidden lg:block"
          >
            <img
              data-scroll
              className="animate-reveal"
              src={bottomRight}
              alt=""
            />
          </div>
        </div>
      </div>
      <p
        data-scroll
        ref={ref}
        id="ourWorks-p"
        className="text-center mt-4 sm:mt-10 md:mt-16 lg:mt-32 xl:mt-40"
      >
        Rzuć okiem na nasze{" "}
        <span className="underline font-bold link-primary">
          <a href="/projekty">inne projekty</a>
        </span>
      </p>
    </section>
  );
};

export default OurWorks;
