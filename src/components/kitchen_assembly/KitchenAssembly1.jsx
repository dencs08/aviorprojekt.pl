import React, { useEffect, useRef } from "react";
import "./kitchen_assembly.scss";

import kitchen from "../../assets/kitchen/kitchen_bg.jpg";
import plant from "../../assets/kitchen/plant.png";
import table from "../../assets/kitchen/kitchen_table.png";

import gsap from "gsap";

const KitchenAssembly = () => {
  const tl = useRef();
  const kitchenRef = useRef();
  const tableRef = useRef();
  const plantRef = useRef();

  useEffect(() => {
    tl.current = gsap
      .timeline()

      .to(kitchenRef.current, { x: "50vw", duration: 1, ease: "expo.inOut" })
      .to(kitchenRef.current, { y: "-2vw", duration: 1, ease: "sine" }, "-=1")
      .to(
        kitchenRef.current,
        { scale: "0.35", duration: 1, ease: "expo" },
        "-=0.5"
      )
      .to(
        kitchenRef.current,
        {
          clipPath: "polygon(12.5% 0%, 82% 0%, 82% 100%, 12.5% 100%)",
          duration: 1.5,
          ease: "expo",
        },
        "-=0.45"
      )

      .to(
        tableRef.current,
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          duration: 1.5,
          ease: "expo",
        },
        "-=1.3"
      )
      .to(
        tableRef.current,
        { y: "-10.5vw", duration: 1, ease: "expo" },
        "-=1.5"
      )
      .to(
        plantRef.current,
        { x: "-22vw", opacity: 1, duration: 1.25, ease: "expo" },
        "-=1.1"
      );
  });

  return (
    <div className="assembly">
      <img ref={kitchenRef} src={kitchen} className="kitchen" alt="" />
      <img ref={plantRef} src={plant} className="plant" alt="" />
      <img ref={tableRef} src={table} className="table" alt="" />
    </div>
  );
};

export default KitchenAssembly;
