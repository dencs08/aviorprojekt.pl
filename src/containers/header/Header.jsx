import React from "react";
import "./header.scss";

import headerPhoto from "../../assets/header_photo.png";

import { flower1, flower2, flower3 } from "../../assets/flower_images";

const Header = () => {
  return (
    <section className="section-mt section-mb">
      <div className="content-wrapper block md:grid grid-cols-12 gap-5 md:gap-10 lg:gap-12relative">
        <img
          src={flower1}
          className="absolute top-[-3%] left-[3%] opacity-10 z-[-1] w-[25vw] rotate-[30deg]"
          alt=""
        />
        <img
          src={flower2}
          className="absolute top-[-10%] right-[-20%] bottom-1 opacity-10 z-[-1] w-[25vw] rotate-[-25deg]"
          alt=""
        />
        <img
          src={flower3}
          className="absolute top-[20%] right-[-20%] bottom-1 opacity-10 z-[-1] w-[25vw] rotate-[-40deg]"
          alt=""
        />
        <div className="col-start-2 col-end-6">
          <img
            src={headerPhoto}
            className="w-4/6 md:w-full mx-0 md:mx-auto"
            alt="aviorprojekt logo"
          />
        </div>
        <div className="text-left col-start-6 col-end-12 mx-auto mt-5 md:mt-5 lg:mt-10 xl:mt-14">
          <h1 className="font-serif">
            Najlepsze <b>meble na wymiar</b>
          </h1>
          <h2>
            Projektujemy nowoczesne i praktyczne kuchnie, garderoby, wnęki oraz
            przestrzenie biurowe zarówno dla klientów indywidualnych jak i firm
            czy urzędów.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Header;
