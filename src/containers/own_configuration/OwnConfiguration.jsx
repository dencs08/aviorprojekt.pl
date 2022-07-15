import React from "react";
import "./own_configuration.scss";

const OwnConfiguration = () => {
  return (
    <section id="ownConfiguration" className="section-mt section-mb">
      <div className="content-wrapper">
        <div>
          <h3 className="font-serif">
            <div>Własna</div>
            <div>Konfiguracja</div>
          </h3>
          <h4>
            U nas masz możliwość wyboru zarówno wzoru frontu, wykończenia jak i
            koloru - wszystko tak jak chcesz.
          </h4>
        </div>
        <p className="offer">
          <a href="#modal" className="underline">
            Porozmawiajmy
          </a>{" "}
          o Twoich potrzebach i
          <a href="#modal" className="underline">
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
