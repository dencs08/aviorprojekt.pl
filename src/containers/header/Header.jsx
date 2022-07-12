import React from "react";
import "./header.scss";

import headerPhoto from "../../assets/header_photo.png";

const Header = () => {
  return (
    <div className="px-10 text-center block md:grid grid-cols-2 gap-10">
      <div className="mx-auto">
        <img src={headerPhoto} className="" alt="" />
      </div>
      <div className="text-left mx-auto mt-20">
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
  );
};

export default Header;
