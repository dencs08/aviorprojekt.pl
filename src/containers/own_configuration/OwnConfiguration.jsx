import React, { useEffect, useState, useRef } from "react";
import "./own_configuration.scss";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "../../utils/Split3.min";
import useOnScreen from "../../hooks/useOnScreen";
import cn from "classnames";

import center from "../../assets/project/foto8.jpg";
import topLeft from "../../assets/project/kitchen1.jpg";
import topRight from "../../assets/project/wardrobe1.jpg";
import bottomLeft from "../../assets/project/countertop1.jpg";
import bottomRight from "../../assets/project/3.jpg";

const OwnConfiguration = () => {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      gsap.to("#ocH3", { opacity: 1, duration: 0.1 });
      const split = new SplitText("#ocH3", {
        type: "lines",
        linesClass: "lineChildren",
      });
      const splitParent = new SplitText("#ocH3", {
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

  useEffect(() => {
    if (reveal) {
      gsap.to("#ocH4", { opacity: 1, duration: 0.1 });
      const split = new SplitText("#ocH4", {
        type: "lines",
        linesClass: "lineChildren",
      });
      const splitParent = new SplitText("#ocH4", {
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

  let endValue1 = window.innerWidth;
  let endValue2 = window.innerWidth;
  endValue1 *= 0.5;
  endValue1 = endValue1 + "vh";
  endValue2 *= 1.5;
  endValue2 = endValue2 + "vh";

  useEffect(() => {
    setTimeout(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#ownConfiguration",
            scrub: 0.35,
            start: "top bottom",
            end: endValue1,
            // pin: true,
            // markers: true,
            scroller: "#main-container",
          },
        })
        .to(".configuration-row1", {
          x: "80%",
          duration: 1,
          ease: "none",
        });

      ScrollTrigger.refresh();
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#ownConfiguration",
            scrub: 0.35,
            start: "top bottom",
            end: endValue2,
            // pin: true,
            // markers: true,
            scroller: "#main-container",
          },
        })
        .to(".configuration-row2", {
          x: "-80%",
          duration: 1,
          ease: "none",
        });

      ScrollTrigger.refresh();
    });
  }, []);

  return (
    <section
      data-scroll-section
      id="ownConfiguration"
      className="section-mt section-mb"
    >
      <div className="content-wrapper">
        <h3 data-scroll ref={ref} id="ocH3" className="font-serif mb-2">
          Własna Konfiguracja
        </h3>
        <h4 data-scroll id="ocH4" className="w-full lg:w-3/6">
          U nas masz możliwość wyboru zarówno wzoru frontu, wykończenia jak i
          koloru - wszystko tak jak chcesz.
        </h4>
      </div>

      <div className="mx-4 md:mx-6 lg:mx-10">
        <div
          className="configuration-row1 flex space-x-2 md:space-x-8 mb-6 md:mb-10 ml-[-1800px] mt-4 md:mt-6 lg:mt-10 w-[150vw] "
          // data-scroll
          // data-scroll-speed="-10"
          // data-scroll-direction="horizontal"
        >
          <img src={center} alt="" className="h-[33vh]" />
          <img src={topLeft} alt="" className="h-[33vh]" />
          <img src={topRight} alt="" className="h-[33vh]" />
          <img src={bottomLeft} alt="" className="h-[33vh]" />
          <img src={bottomRight} alt="" className="h-[33vh]" />
          <img src={topRight} alt="" className="h-[33vh]" />
          <img src={bottomLeft} alt="" className="h-[33vh]" />
          <img src={bottomRight} alt="" className="h-[33vh]" />
        </div>
        <div
          className="configuration-row2 flex space-x-2 md:space-x-8 ml-[-300px] w-[150vw] "
          // data-scroll
          // data-scroll-speed="10"
          // data-scroll-direction="horizontal"
        >
          <img src={bottomRight} alt="" className="h-[33vh]" />
          <img src={bottomLeft} alt="" className="h-[33vh]" />
          <img src={topRight} alt="" className="h-[33vh]" />
          <img src={topLeft} alt="" className="h-[33vh]" />
          <img src={center} alt="" className="h-[33vh]" />
          <img src={topRight} alt="" className="h-[33vh]" />
          <img src={topLeft} alt="" className="h-[33vh]" />
          <img src={center} alt="" className="h-[33vh]" />
        </div>
      </div>

      <div className="content-wrapper">
        <p data-scroll id="ocP" className="offer mt-4 md:mt-6 lg:mt-10">
          <a href="#modal" className="underline font-bold link-primary">
            Porozmawiajmy
          </a>{" "}
          o Twoich potrzebach i
          <a href="#modal" className="underline font-bold link-primary">
            {" "}
            wybierzmy razem
          </a>{" "}
          co sprawdzi się u Ciebie najlepiej,
        </p>
      </div>
    </section>
  );
};

export default OwnConfiguration;
