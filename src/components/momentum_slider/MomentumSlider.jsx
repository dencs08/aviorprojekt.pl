import React from "react";
import { useRef, useEffect, useState } from "react";

import { motion } from "framer-motion";

import "./momentum_slider.scss";

import images from "../../assets/projects_images";

import gsap from "gsap";

const MomentumSlider = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const q = gsap.utils.selector(carousel);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  useEffect(() => {
    gsap.to(q(".image"), {
      y: "-10%",
      opacity: 1,
      duration: 1,
      stagger: 0.15,
      ease: "expo",
      delay: 0.3,
    });
  }, []);

  return (
    <section>
      <motion.div
        ref={carousel}
        className="carousel cursor-grab overflow-hidden"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel flex"
        >
          {images.map((image) => {
            return (
              <motion.div
                className="image h-[40vh] md:h-[50vh] xl:h-[60vh] min-w-[88vw] sm:min-w[75vw] lg:min-w-[44vw] p-2 md:p-4 lg:p-10 mt-10 opacity-0"
                key={image}
              >
                <img
                  src={image}
                  className="h-full rounded-xl object-cover object-center"
                  alt=""
                  draggable="false"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MomentumSlider;
