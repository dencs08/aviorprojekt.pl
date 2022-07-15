import React from "react";
import "./kitchen_assembly.scss";

import kitchen from "../../assets/kitchen/kitchen_bg.png";
import plant from "../../assets/kitchen/plant.png";
import table from "../../assets/kitchen/kitchen_table.png";

const KitchenAssembly = () => {
  return (
    <section id="kitchenAssembly" className="section-mt-xl section-mb">
      <div className="content-wrapper">
        <div className="block md:grid grid-cols-12">
          <div className="col-span-3 flex flex-col justify-center">
            <h5 className="font-sans">od</h5>
            <h4 className="font-serif">2012</h4>
            <p>
              Projekty mebli kuchennych, i innych zabudów realizujemy już od 10
              lat. Wierzymy, że dzieki naszym usługom pomagamy wam realizować
              marzenia.
            </p>
          </div>
          <div className="col-span-7 assembly">
            <div className="w-5/5">
              <img src={kitchen} className="kitchen" alt="" />
            </div>
            <div className="w-2/6">
              <img src={plant} className="plant" alt="" />
            </div>
            <div className="w-4/6">
              <img src={table} className="table" alt="" />
            </div>
          </div>
          <div className="col-span-2">
            <div>
              <h4 className="font-serif">500</h4>
              <p>Zrealizowanych projektów</p>
            </div>
            <div>
              <h4 className="font-serif">50</h4>
              <p>Zadowolonych klientów</p>
            </div>
            <div>
              <h4 className="font-serif">12</h4>
              <p>Współprac z najlepszymi firmami</p>
            </div>
          </div>
        </div>
        <p className="offer">
          Sprawdź nasze{" "}
          <a href="#offer" className="link-primary underline font-bold">
            usługi
          </a>{" "}
          i{" "}
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
