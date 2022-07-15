import React from "react";
import "./our_works.scss";

import center from "../../assets/project/foto8.jpg";
import leftTop from "../../assets/project/3.jpg";
import rightTop from "../../assets/project/countertop1.jpg";
import bottomLeft from "../../assets/project/wardrobe1.jpg";
import bottomRight from "../../assets/project/kitchen1.jpg";

const OurWorks = () => {
  return (
    <section id="ourWorks" className="section-mt section-mb">
      <div className="text-center relative content-wrapper">
        <h3 className="font-sans mb-20">Nasze prace</h3>
        <div>
          <div className="">
            <img className="mx-auto" src={center} alt="" />
          </div>
          <div className="absolute top-96 left-80 w-1/5">
            <img src={leftTop} alt="" />
          </div>
          <div className="absolute top-60 right-80 w-1/5">
            <img src={rightTop} alt="" />
          </div>
          <div className="absolute bottom-[-10%] left-72 w-1/5">
            <img src={bottomLeft} alt="" />
          </div>
          <div className="absolute bottom-[-5%] right-72 w-1/5">
            <img src={bottomRight} alt="" />
          </div>
        </div>
      </div>
      <p className="text-center mt-40">
        Rzuć okiem na nasze{" "}
        <span className="underline font-bold">
          <a href="/projekty">inne projekty</a>
        </span>
      </p>
    </section>
  );
};

export default OurWorks;
