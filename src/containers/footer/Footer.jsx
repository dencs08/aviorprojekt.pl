import React from "react";
import "./footer.scss";

import { BsFacebook } from "react-icons/bs";

import footerLeaves from "../../assets/footer_leaves.png";

const Footer = () => {
  return (
    <section data-scroll-section className="pt-4">
      <div
        data-scroll
        data-scroll-speed="0"
        id="footer"
        className="grid place-items-center relative"
      >
        <div className="z-10 text-center font-serif absolute lg:top-[250px] xl:top-[47%]">
          <p
            className="mb-10"
            data-scroll
            data-scroll-speed="3"
            data-scroll-delay="0.1"
          >
            Jesteś zainteresowany?
          </p>
          <button
            open-modal="true"
            className="btn btn-action font-color-white uppercase font-medium font-sans rounded-full xl:w-4/6"
            data-scroll
            data-scroll-speed="2"
          >
            Napisz do nas
          </button>
          <a
            href="https://www.facebook.com/Avior-Projekt-107288225284129"
            rel="noopener noreferrer nofollow"
            target="_blank"
            className="flex items-center justify-center mt-5 md:mt-8 lg:mt-12"
          >
            <BsFacebook
              size={45}
              className="text-neutral-500 hover:text-blue-500 transition ease-out"
            />
          </a>
        </div>
        <div className="z-0 disable-select">
          <img src={footerLeaves} className="disable-select" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
