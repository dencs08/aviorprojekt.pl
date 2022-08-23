import React, { useEffect, useState, useRef } from "react";
import { Card } from "../../components";

import "./offer.scss";
import { flower1, flower2, flower3 } from "../../assets/flower_images";

import gsap from "gsap";
import useOnScreen from "../../hooks/useOnScreen";
import SplitText from "../../utils/Split3.min";

const offerCards = [
  {
    title: "standard",
    features: [
      "projekt zabudowy na podstawie wymiarów podanych przez klienta",
      "wizualna prezentacja przestrzeni",
      "wycena",
    ],
  },
  {
    title: "premium",
    features: [
      "badanie potrzeb i oczekiwań",
      "wykonanie pomiarów",
      "projekt",
      "fotorealistyczna wizualizacja",
      "dokumentacja techniczna",
      "wycena",
      "poprawki",
    ],
  },
  {
    title: "vip",
    features: [
      "wszystko co w pakicie Premium",
      "realizacja zabudowy",
      "montaż",
      "nadzór nad realizacją",
    ],
  },
];

const Offer = () => {
  const offerH3 = useRef();

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(offerH3, 0.5);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  const cards = document.querySelectorAll(".card");

  useEffect(() => {
    if (reveal) {
      const split = new SplitText(offerH3.current, {
        type: "lines",
        linesClass: "lineChildren",
      });
      const splitParent = new SplitText(offerH3.current, {
        type: "lines",
        linesClass: "lineParent",
      });
      gsap.set(offerH3.current, {
        opacity: 1,
      });
      gsap.to(split.lines, {
        duration: 1,
        y: 0,
        opacity: 1,
        delay: 0.15,
        ease: "expo",
      });
      gsap.fromTo(
        cards,
        { opacity: 0 },
        {
          duration: 2,
          y: 0,
          opacity: 1,
          delay: 0.25,
          stagger: 0.3,
          ease: "expo",
        }
      );
    }
  }, [reveal]);

  return (
    <section
      data-scroll-section
      id="offer"
      className="xl:pt-[325px] section-mb"
    >
      <div className="content-wrapper relative">
        <div
          data-scroll
          data-scroll-speed="-4"
          data-scroll-direction="horizontal"
          className="absolute top-[-5%] left-[-10%] z-[-1]"
        >
          <img
            src={flower1}
            className="opacity-10  w-[30vw] rotate-[30deg] disable-select"
            alt=""
          />
        </div>

        <div
          data-scroll
          data-scroll-speed="2"
          data-scroll-direction="horizontal"
          className="absolute top-[-10%] right-[-20%] w-[30vw] z-[-1] "
        >
          <img
            src={flower2}
            className="opacity-10 w-[30vw] rotate-[-20deg] disable-select"
            alt=""
          />
        </div>
        <div className="absolute top-[0%] right-[35%] rotate-[15deg] z-[-1]">
          <img
            src={flower3}
            className="opacity-10 h-[700px] crop-down disable-select"
            alt=""
          />
        </div>

        <div data-scroll data-scroll-speed="-5">
          <h3
            data-scroll
            ref={offerH3}
            className="font-serif mb-2 md:mb-6 lg:mb-10"
          >
            Pakiety usług
          </h3>

          <div
            data-scroll
            className="block lg:grid grid-cols-3 gap-10 lg:gap-22 xl:gap-32 2xl:gap-48"
          >
            {offerCards.map((item, index) => (
              <Card
                title={item.title}
                features={item.features}
                key={item.title + index}
              />
            ))}
          </div>
          <p
            data-scroll
            data-scroll-class="is-reveal"
            id="offer-p"
            className="text-center w-full sm:w-3/6 mx-auto mt-10"
          >
            Projekt zabudowy meblowej realizujemy online. Montaż i dostawy mebli
            realizujemy na terenie Legnicy, Lubina, Jawora oraz powiatu
            złotoryjskiego i sieradzkiego.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offer;
