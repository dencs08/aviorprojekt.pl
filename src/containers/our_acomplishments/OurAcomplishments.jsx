import React, { useEffect, useState, useRef } from "react";

import "./our_acomplishments.scss";
import photo from "../../assets/project/kitchen1_vert.jpg";

import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import useOnScreen from "../../hooks/useOnScreen";

const KitchenAssembly = () => {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#ourAcomplishments-p", {
        type: "lines",
        linesClass: "lineChildren",
      });
      const splitParent = new SplitText("#ourAcomplishments-p", {
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
    setTimeout(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#ourAcomplishments",
            scrub: 0.35,
            start: "700vh 125%",
            // pin: true,
            // markers: true,
            scroller: "#main-container",
          },
        })
        .fromTo(
          ".arc-photo",
          { scale: 1.5 },
          {
            scale: 1,
            y: "-15%",
            duration: 1,
            ease: "expo",
          }
        );

      ScrollTrigger.refresh();
    });
  }, []);

  return (
    <section data-scroll-section id="ourAcomplishments" className="section-mb">
      <div className="content-wrapper">
        <div className="block md:grid grid-cols-12">
          <div
            data-scroll
            data-scroll-speed="3"
            className="text-center md:text-left col-span-2 flex flex-col justify-center mb-28"
          >
            <h5 className="font-sans">od</h5>
            <h4 className="font-serif">2012</h4>
            <p>
              Projekty mebli kuchennych, i innych zabudów realizujemy już od 10
              lat. Wierzymy, że dzieki naszym usługom pomagamy wam realizować
              marzenia.
            </p>
          </div>
          <div className="col-span-8">
            <div className="lg:block">
              <img
                data-scroll
                src={photo}
                className="mx-auto arc-photo"
                alt=""
              />
            </div>
          </div>
          <div className="col-span-2 xs:flex sm:flex xs:space-x-12 md:space-x-0 md:block space-y-4 xs:space-y-0 md:space-y-8 my-auto">
            <div className="text-center md:text-left">
              <h4 className="font-serif">+400</h4>
              <p>Zrealizowanych projektów</p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-serif">+450</h4>
              <p>Zadowolonych klientów</p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-serif">12</h4>
              <p>Współprac z najlepszymi firmami</p>
            </div>
          </div>
        </div>
        <p
          data-scroll
          ref={ref}
          id="ourAcomplishments-p"
          className="offer mt-20 md:mt-2 lg:mt-4 xl:mt-0"
        >
          Sprawdź nasze{" "}
          <a href="#offer" className="link-primary underline font-bold">
            usługi{" "}
          </a>{" "}
          i{"  "}
          <a href="#offer" className="link-primary underline font-bold">
            wybierz ofertę{" "}
          </a>
          najlepiej dopasowaną do siebie
        </p>
      </div>
    </section>
  );
};

export default KitchenAssembly;
