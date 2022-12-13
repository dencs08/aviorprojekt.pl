import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import "./own_configuration.scss";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useOnScreen from "../../hooks/useOnScreen";

import center from "../../assets/project/foto8.jpg";
import topLeft from "../../assets/project/kitchen1.jpg";
import topRight from "../../assets/project/wardrobe1.jpg";
import bottomLeft from "../../assets/project/countertop1.jpg";
import bottomRight from "../../assets/project/3.jpg";

import { textReveal } from "../../hooks/reveals";

const OwnConfiguration = () => {
  const h3 = useRef(null);
  const h4 = useRef(null);
  const bottomText = useRef(null);

  const [revealHeading, setRevealHeading] = useState(false);
  const onScreenHeading = useOnScreen(h3);

  const [revealBottomText, setRevealBottomText] = useState(false);
  const onScreenBottomText = useOnScreen(bottomText);

  useEffect(() => {
    if (onScreenHeading) setRevealHeading(onScreenHeading);
  }, [onScreenHeading]);

  useLayoutEffect(() => {
    if (!revealHeading) return;
    textReveal(h3.current, 0.25);
    textReveal(h4.current, 0.65);
  }, [revealHeading]);

  useEffect(() => {
    if (onScreenBottomText) setRevealBottomText(onScreenBottomText);
  }, [onScreenBottomText]);

  useLayoutEffect(() => {
    if (!revealBottomText) return;
    textReveal(bottomText.current, 0.25);
  }, [revealBottomText]);

  let endValue1;
  let endValue2;
  useEffect(() => {
    endValue1 = window.innerWidth;
    endValue2 = window.innerWidth;
    endValue1 *= 0.75;
    endValue1 = endValue1 + "vh";
    endValue2 *= 1.5;
    endValue2 = endValue2 + "vh";
  });

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
        <h3 ref={h3} className="font-serif mb-2 opacity-0">
          Własna Konfiguracja
        </h3>
        <h4 ref={h4} className="w-full lg:w-3/6 opacity-0">
          U nas masz możliwość wyboru zarówno wzoru frontu, wykończenia jak i
          koloru - wszystko tak jak chcesz.
        </h4>
      </div>

      <div className="mx-4 md:mx-6 lg:mx-10">
        <div className="configuration-row1 flex space-x-2 md:space-x-8 mb-6 md:mb-10 ml-[-1800px] mt-4 md:mt-6 lg:mt-10 w-[150vw] ">
          <img src={center} alt="" className="h-[33vh]" />
          <img src={topLeft} alt="" className="h-[33vh]" />
          <img src={topRight} alt="" className="h-[33vh]" />
          <img src={bottomLeft} alt="" className="h-[33vh]" />
          <img src={bottomRight} alt="" className="h-[33vh]" />
          <img src={topRight} alt="" className="h-[33vh]" />
          <img src={bottomLeft} alt="" className="h-[33vh]" />
          <img src={bottomRight} alt="" className="h-[33vh]" />
        </div>
        <div className="configuration-row2 flex space-x-2 md:space-x-8 ml-[-300px] w-[150vw] ">
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
        <p
          data-scroll
          ref={bottomText}
          className="offer mt-4 md:mt-6 lg:mt-10 opacity-0"
        >
          <a
            open-modal="true"
            href="#modal"
            className="underline font-bold link-primary"
          >
            Porozmawiajmy
          </a>{" "}
          o Twoich potrzebach i
          <a
            open-modal="true"
            href="#modal"
            className="underline font-bold link-primary"
          >
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
