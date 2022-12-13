import React, { useLayoutEffect, useRef } from "react";
import "./header.scss";
import Assembly from "../../components/kitchen_assembly/KitchenAssembly1";

import { flower1, flower2, flower3 } from "../../assets/flower_images";

import { textReveal, elementReveal } from "../../hooks/reveals";

const Header = () => {
  const H1 = useRef();
  const H2 = useRef();
  const headerBtn = useRef();

  useLayoutEffect(() => {
    setTimeout(() => {
      textReveal(H1.current, H1.current, true, false, false, false, 0, 0);
      textReveal(H2.current, H2.current, true, false, false, false, 0, 0.25);
      elementReveal(headerBtn.current, 0.7);
    }, 1000);
  }, []);

  return (
    <section
      data-scroll-section
      id="Header"
      className="section-mb-xl min-h-[58vh] xs:min-h-[60vh] sm:min-h-[60vh] md:min-h-[35vh] lg:min-h-[45vh] xl:min-h-[40vh]"
    >
      <div className="content-wrapper block md:grid grid-cols-12 gap-5 md:gap-10 lg:gap-12 relative">
        <div
          data-scroll
          data-scroll-speed="4"
          className="absolute top-[-100%] left-[3%] w-[25vw] z-[-1]"
        >
          <img
            src={flower1}
            className="opacity-10 rotate-[30deg] disable-select"
            alt=""
          />
        </div>
        <div
          data-scroll-speed="5"
          className="absolute top-[-100%] right-[-20%] bottom-1 z-[-1] w-[25vw] "
        >
          <img
            src={flower2}
            className="opacity-10 rotate-[-25deg] disable-select"
            alt=""
          />
        </div>
        <div
          data-scroll-speed="3"
          className="absolute top-[20%] right-[-20%] bottom-1 z-[-1] w-[25vw] "
        >
          <img
            src={flower3}
            className="opacity-10 rotate-[-40deg] disable-select"
            alt=""
          />
        </div>

        <div data-scroll-speed="6" className="text-left col-start-1 col-end-7">
          <h1 ref={H1} className="font-serif reveal">
            Najlepsze <b>meble na wymiar</b>
          </h1>

          <h2 ref={H2} className="reveal">
            Projektujemy nowoczesne i praktyczne kuchnie, garderoby, wnęki oraz
            przestrzenie biurowe zarówno dla klientów indywidualnych jak i firm
            czy urzędów.
          </h2>

          <div>
            <a href="/projekty">
              {" "}
              <button
                ref={headerBtn}
                className="btn-action rounded-full font-color-white shadow-lg mt-6 px-8 py-3 md:py-5 md:px-14 w-full md:w-auto reveal"
              >
                Nasze prace
              </button>
            </a>
          </div>
        </div>
        <div className="col-start-7 col-end-13">
          <Assembly />
        </div>
      </div>
    </section>
  );
};

export default Header;
