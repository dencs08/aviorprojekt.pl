import React from "react";
import "./footer.scss";

import footerLeaves from "../../assets/footer_leaves.png";

const Footer = () => {
  return (
    <section data-scroll-section>
      <div
        data-scroll
        data-scroll-speed="0"
        id="footer"
        className="grid place-items-center relative"
      >
        <div className="z-10 text-center font-serif absolute bottom-50 top-50">
          <p
            className="mb-10"
            data-scroll
            data-scroll-speed="3"
            data-scroll-delay="0.1"
          >
            Jesteś zainteresowany?
          </p>
          <button
            className="btn btn-action font-color-white uppercase font-medium font-sans rounded-full"
            data-scroll
            data-scroll-speed="2"
          >
            Napisz do nas
          </button>
        </div>
        <div className="z-0">
          <img src={footerLeaves} className="disable-select" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
