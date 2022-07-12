import React from "react";
import "./footer.scss";

import footerLeaves from "../../assets/footer_leaves.png";

const Footer = () => {
  return (
    <div className="grid place-items-center relative">
      <div>
        <button className="btn btn-primary">Napisz do nas</button>
      </div>
      <div className="absolute">
        <img src={footerLeaves} alt="" />
      </div>
    </div>
  );
};

export default Footer;
