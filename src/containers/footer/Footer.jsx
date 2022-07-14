import React from "react";
import "./footer.scss";

import footerLeaves from "../../assets/footer_leaves.png";

const Footer = () => {
  return (
    <section>
      <div id="footer" className="grid place-items-center relative">
        <div className="z-10 text-center font-serif absolute bottom-50 top-50">
          <p className="mb-10">Jesteś zainteresowany?</p>
          <button className="btn btn-action font-color-white uppercase font-medium font-sans rounded-full">
            Napisz do nas
          </button>
        </div>
        <div className="z-0">
          <img src={footerLeaves} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
