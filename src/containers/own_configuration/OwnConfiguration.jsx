import React from "react";
import "./own_configuration.scss";

import center from "../../assets/project/foto8.jpg";
import topLeft from "../../assets/project/kitchen1.jpg";
import topRight from "../../assets/project/wardrobe1.jpg";
import bottomLeft from "../../assets/project/countertop1.jpg";
import bottomRight from "../../assets/project/3.jpg";

const OwnConfiguration = () => {
  return (
    <section id="ownConfiguration" className="section-mt section-mb">
      <div className="content-wrapper">
        <div>
          <h3 className="font-serif mb-2">
            <div>Własna</div>
            <div>Konfiguracja</div>
          </h3>
          <h4 className="w-full lg:w-3/6">
            U nas masz możliwość wyboru zarówno wzoru frontu, wykończenia jak i
            koloru - wszystko tak jak chcesz.
          </h4>
        </div>
      </div>

      <div className="mx-4 md:mx-6 lg:mx-10">
        <div
          className="configuration-row flex space-x-2 md:space-x-8 mb-6 md:mb-10 lg:ml-[-50vw] mt-4 md:mt-6 lg:mt-10 lg:w-[150vw] "
          data-scroll
          data-scroll-speed="-10"
          data-scroll-direction="horizontal"
        >
          <img src={center} alt="" className="h-[33vh]" />
          <img src={topLeft} alt="" className="h-[33vh] hidden sm:block" />
          <img src={topRight} alt="" className="h-[33vh] hidden sm:block" />
          <img src={bottomLeft} alt="" className="h-[33vh] hidden lg:block" />
          <img src={bottomRight} alt="" className="h-[33vh] hidden lg:block" />
          <img src={topRight} alt="" className="h-[33vh] hidden lg:block" />
          <img src={bottomLeft} alt="" className="h-[33vh] hidden lg:block" />
          <img src={bottomRight} alt="" className="h-[33vh] hidden lg:block" />
        </div>
        <div
          className="configuration-row flex space-x-2 md:space-x-8 lg:ml-[-50vw] lg:w-[150vw] "
          data-scroll
          data-scroll-speed="10"
          data-scroll-direction="horizontal"
        >
          <img src={bottomRight} alt="" className="h-[33vh]" />
          <img src={bottomLeft} alt="" className="h-[33vh] hidden sm:block" />
          <img src={topRight} alt="" className="h-[33vh] hidden sm:block" />
          <img src={topLeft} alt="" className="h-[33vh] hidden lg:block" />
          <img src={center} alt="" className="h-[33vh] hidden lg:block" />
          <img src={topRight} alt="" className="h-[33vh] hidden lg:block" />
          <img src={topLeft} alt="" className="h-[33vh] hidden lg:block" />
          <img src={center} alt="" className="h-[33vh] hidden lg:block" />
        </div>
      </div>

      <div className="content-wrapper">
        <p className="offer mt-4 md:mt-6 lg:mt-10">
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
