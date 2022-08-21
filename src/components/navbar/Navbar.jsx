import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo/aviorprojekt_logo_main.svg";
import "./navbar.scss";

import gsap from "gsap";

const Menu = () => (
  <>
    <p>
      <a href="/">Start</a>
    </p>
    <p>
      <a href="/projekty">Projekty</a>
    </p>
    <p>
      <a href="#dlaczegoMy">Dlaczego my?</a>
    </p>
    <p>
      <a href="#oferta">Oferta</a>
    </p>
    <p>
      <a href="#kontakt">Kontakt</a>
    </p>
  </>
);

const Navbar = () => {
  gsap.to("nav", { y: "0%", duration: 0.5, ease: "expo.inOut", delay: 2 });

  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="z-999 relative">
      <div
        id="nav-container"
        className="px-3 py-5 sm:px-5 md:px-10 flex items-center"
      >
        <div className="mr-5 fixed top-5 z-999">
          <a href="/start">
            <img src={logo} alt="aviorprojekt logo" className="w-12 mr-5" />
          </a>
        </div>
        <div className="flex justify-end items-center flex-1 fixed top-8 right-0 z-999">
          <div className="hidden md:flex flex-row [&>p]:mr-10 uppercase font-normal font-sans">
            <Menu />
          </div>
          <div className="flex md:hidden pr-4">
            {toggleMenu ? (
              <RiCloseLine
                color="black"
                size={27}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu3Line
                color="black"
                size={27}
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <div className="flex flex-col text-right justify-end absolute top-16 right-5 rounded-lg drop-shadow-lg navbar-menu_container scale-up-center">
                <div className="px-7 py-5 uppercase font-normal font-sans font-color-white">
                  <Menu />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
