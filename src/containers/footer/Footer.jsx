import React from "react";
import "./footer.scss";

import footerLeaves from "../../assets/footer_leaves.png";

const Footer = () => {
  return (
    <div id="footer" className="h-screen grid place-items-center relative">
      <div className="z-10 text-center font-serif">
        <p className="mb-10">Jesteś zainteresowany?</p>
        <button className="btn btn-primary font-color-white uppercase font-medium font-sans rounded-full py-6 px-16">
          Napisz do nas
        </button>
      </div>
      <div className="absolute bottom-0 z-0">
        <img src={footerLeaves} alt="" />
      </div>
    </div>
  );
};

export default Footer;
