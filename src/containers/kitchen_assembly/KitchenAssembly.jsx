import React from "react";
import "./kitchen_assembly.scss";

import kitchen from "../../assets/kitchen/kitchen_bg.png";
import plant from "../../assets/kitchen/plant.png";
import table from "../../assets/kitchen/kitchen_table.png";

import gsap from "gsap";

const KitchenAssembly = () => {
  gsap.fromTo(
    ".kitchen",
    { y: "-20%" },
    { y: "22%", duration: 1.5, delay: 0.5, ease: "expo" }
  );
  gsap.fromTo(
    ".table",
    { x: "-50%" },
    { x: "-25%", duration: 2, delay: 0.55, ease: "expo" }
  );
  gsap.fromTo(
    ".plant",
    { x: "50%" },
    { x: "-100%", duration: 2.5, delay: 0.61, ease: "expo" }
  );
  gsap.fromTo(
    ".kitchen",
    { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
    {
      clipPath: "polygon(7% 0%, 82% 0%, 82% 100%, 7% 100%)",
      duration: 1.5,
      delay: 1.1,
      ease: "expo",
    }
  );

  return (
    <section id="kitchenAssembly" className="section-mt-xl section-mb">
      <div className="content-wrapper">
        <div className="block md:grid grid-cols-12">
          <div
            data-scroll
            data-scroll-speed="3"
            className="col-span-3 flex flex-col justify-center"
          >
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
              <h4 className="font-serif">+400</h4>
              <p>Zrealizowanych projektów</p>
            </div>
            <div>
              <h4 className="font-serif">+400</h4>
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
