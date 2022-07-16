import React from "react";
import { useRef, useEffect, useState } from "react";

import { motion } from "framer-motion";

import "./momentum_slider.scss";

import images from "../../assets/projects_images";

const MomentumSlider = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
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
                className="h-[60vh] min-w-[44vw] p-10 image-carousel-wrapper"
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
