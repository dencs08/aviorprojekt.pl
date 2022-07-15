import React from "react";
import Card from "../../components/card/Card";

import "./offer.scss";

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
  return (
    <section id="offer" className="section-mt section-mb">
      <div className="content-wrapper">
        <h3 className="font-serif mb-5 md:mb-10 lg:mb-12">Pakiety usług</h3>

        <div className="block lg:grid grid-cols-3 gap-10 lg:gap-22 xl:gap-32 2xl:gap-48">
          {offerCards.map((item, index) => (
            <Card
              title={item.title}
              features={item.features}
              key={item.title + index}
            />
          ))}
        </div>
        <p className="text-center w-full sm:w-3/6 mx-auto mt-10">
          Projekt zabudowy meblowej realizujemy online Montaż i dostawy mebli
          realizujemy na terenie Legnicy, Lubina, Jawora oraz powiatu
          złotoryjskiego i sieradzkiego.
        </p>
      </div>
    </section>
  );
};

export default Offer;
