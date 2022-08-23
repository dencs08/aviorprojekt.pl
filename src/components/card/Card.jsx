import React from "react";
import { BsCheck2 } from "react-icons/bs";
import "./card.scss";

import gsap from "gsap";

const Card = ({ title, features }) => {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      backgroundColor: "#ffffff",
      scale: 1.05,
      boxShadow: "0 0 12.5px #0000005d",
      ease: "expo",
      duration: 0.5,
    });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      backgroundColor: "#fcfcff",
      scale: 1,
      boxShadow: "0 0 15px #0000002f",
      ease: "expo",
      duration: 0.5,
    });
  };

  const data = features;
  const feautresList = data.map((feature) => (
    <li className="my-3 flex flex-row flex-initial" key={feature}>
      <BsCheck2 color="#745EFF" size={20} className="mt-[3px] mr-1" />
      <span className="w-full">{feature}</span>
    </li>
  ));

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="card px-10 py-8 my-10 lg:my-0 mx-auto w-full sm:w-4/6 lg:w-full min-w-[100px] lg:min-w-[250px] shadow-md rounded-2xl"
    >
      <div className="card-header text-center font-serif uppercase font-bold">
        {title}
      </div>
      <div className="card-body text-left h-[300px] lg:h-[400px]">
        <hr className="my-5" />
        <ul>{feautresList}</ul>
      </div>

      <div className="card-footer text-center">
        <button
          open-modal="true"
          modal-value={title}
          className="btn btn-primary rounded-full py-4 w-full font-color-white font-sans font-light shadow-lg"
        >
          Wybierz
        </button>
      </div>
    </div>
  );
};

export default Card;
