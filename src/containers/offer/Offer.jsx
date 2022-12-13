import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { Card } from "../../components";

import "./offer.scss";
import { flower1, flower2, flower3 } from "../../assets/flower_images";

import gsap from "gsap";
import useOnScreen from "../../hooks/useOnScreen";

import { textReveal, elementReveal } from "../../hooks/reveals";

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
  const bottomText = useRef(null);
  const cards = document.querySelectorAll(".card");

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(offerH3, 0.5);

  const [revealBottomText, setRevealBottomText] = useState(false);
  const onScreenBottomText = useOnScreen(bottomText);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      textReveal(
        offerH3.current,
        offerH3.current,
        true,
        false,
        false,
        false,
        0,
        0
      );

      elementReveal(cards, 0.25);
    }
  }, [reveal]);

  useEffect(() => {
    if (onScreenBottomText) setRevealBottomText(onScreenBottomText);
  }, [onScreenBottomText]);

  useEffect(() => {
    if (!revealBottomText) return;
    textReveal(
      bottomText.current,
      bottomText.current,
      true,
      false,
      false,
      false,
      0,
      0.5
    );
  }, [revealBottomText]);

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
          <div>
            <h3
              data-scroll
              ref={offerH3}
              className="font-serif mb-2 md:mb-6 lg:mb-10 opacity-0"
            >
              Pakiety usług
            </h3>
          </div>

          <div className="block lg:grid grid-cols-3 gap-10 lg:gap-22 xl:gap-32 2xl:gap-48">
            {offerCards.map((item, index) => (
              <Card
                title={item.title}
                features={item.features}
                key={item.title + index}
              />
            ))}
          </div>

          <div className="mt-10">
            <p ref={bottomText} className="text-center w-full sm:w-3/6 mx-auto">
              Projekt zabudowy meblowej realizujemy online. Montaż i dostawy
              mebli realizujemy na terenie Legnicy, Lubina, Jawora oraz powiatu
              złotoryjskiego i sieradzkiego.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
