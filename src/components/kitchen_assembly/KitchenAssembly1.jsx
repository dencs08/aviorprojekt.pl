import React from "react";
import "./kitchen_assembly.scss";

import kitchen from "../../assets/kitchen/kitchen_bg.png";
import plant from "../../assets/kitchen/plant.png";
import table from "../../assets/kitchen/kitchen_table.png";

import gsap from "gsap";

const KitchenAssembly = () => {
  let tl = gsap.timeline();
  tl.to(".kitchen", { x: "-50vw", duration: 1, delay: 0.2, ease: "expo" });
  tl.to(".kitchen", { scale: "0.65", duration: 0.75, ease: "expo" }, "-=0.15");
  tl.to(".kitchen", { x: "-35vw", duration: 1.1, ease: "expo" }, "-=0.75");
  tl.to(".kitchen", { y: "-2vw", duration: 1.1, ease: "expo" }, "-=1.1");
  tl.fromTo(
    ".kitchen",
    { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
    {
      clipPath: "polygon(15% 0%, 82% 0%, 82% 100%, 15% 100%)",
      duration: 1.5,
      ease: "expo",
    },
    "-=0.45"
  );

  tl.to(
    ".table",
    {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      duration: 1.5,
      ease: "expo",
    },
    "-=1"
  );
  tl.to(".table", { y: "-10.5vw", duration: 1, ease: "expo" }, "-=1.5");
  tl.to(".plant", { x: "-22vw", duration: 1.2, ease: "expo" }, "-=0.65");

  return (
    <div className="assembly">
      <img src={kitchen} className="kitchen" alt="" />
      <img src={plant} className="plant" alt="" />
      <img src={table} className="table" alt="" />
    </div>
  );
};

export default KitchenAssembly;