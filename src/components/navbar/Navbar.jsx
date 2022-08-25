import React, { useState, useEffect, useRef } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo/aviorprojekt_logo_main.svg";
import "./navbar.scss";

import gsap from "gsap";

const Menu = (props) => (
  <>
    <p>
      <a onClick={props.navClose} href="/">
        Start
      </a>
    </p>
    <p>
      <a onClick={props.navClose} href="/projekty">
        Projekty
      </a>
    </p>
    <p>
      <a onClick={props.navClose} href="#ourAcomplishments">
        Dlaczego my?
      </a>
    </p>
    <p>
      <a onClick={props.navClose} href="#offer">
        Oferta
      </a>
    </p>
    <p>
      <a open-modal="true" onClick={props.openModal} href="#modal">
        Kontakt
      </a>
    </p>
  </>
);

const Navbar = (props) => {
  useEffect(() => {
    gsap.to("nav", { y: "0%", duration: 0.5, ease: "expo.inOut", delay: 0.5 });
  }, []);

  const linksHandler = () => {
    const offerSection = document.querySelector("#offer");
    const ourAcomplishmentsSection =
      document.querySelector("#ourAcomplishments");

    var offerLinks = document.querySelectorAll("a[href^='#offer']");
    var acomplishmentLinks = document.querySelectorAll(
      "a[href^='#ourAcomplishments']"
    );

    setTimeout(() => {
      if (window.location.hash === "#ourAcomplishmentsScroll") {
        window.locoScroll.scrollTo(ourAcomplishmentsSection);
      }
      if (window.location.hash === "#offerScroll") {
        window.locoScroll.scrollTo(offerSection);
      }
    }, 750);

    offerLinks.forEach((element) => {
      if (!offerSection) {
        element.setAttribute("href", "/start#offerScroll");
        return;
      }
      element.setAttribute("href", "#offerScroll");

      element.addEventListener("click", function () {
        window.locoScroll.scrollTo(offerSection);
      });
    });

    acomplishmentLinks.forEach((element) => {
      if (!ourAcomplishmentsSection) {
        element.setAttribute("href", "/start#ourAcomplishmentsScroll");
        return;
      }
      element.setAttribute("href", "#ourAcomplishmentsScroll");

      element.addEventListener("click", function () {
        window.locoScroll.scrollTo(ourAcomplishmentsSection);
      });
    });
  };

  useEffect(() => {
    linksHandler();
  });

  const navBg = useRef();
  const navMobile = useRef();

  const [toggleMenu, setToggleMenu] = useState(false);

  const navOpen = () => {
    setToggleMenu(true);
    setTimeout(() => {
      gsap.fromTo(
        navBg.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: "expo",
          duration: 0.5,
        }
      );
      gsap.fromTo(
        navMobile.current,
        {
          x: "100%",
        },
        {
          x: 0,
          ease: "expo",
          duration: 0.5,
        }
      );
    }, []);
  };

  const navClose = () => {
    gsap.to(navBg.current, {
      opacity: 0,
      ease: "expo",
      duration: 0.5,
    });
    gsap.to(navMobile.current, {
      x: "100%",
      ease: "expo",
      duration: 0.5,
      onComplete: () => {
        setToggleMenu(false);
      },
    });
  };

  return (
    <div>
      <nav className="z-999 fixed top-[-10px] md:top-0 right-0">
        <div
          id="nav-container"
          className="px-3 py-5 sm:px-5 md:px-10 flex items-center"
        >
          <div className="mr-5">
            <a href="/start">
              <img
                src={logo}
                alt="aviorprojekt logo"
                className="w-8 md:w-12 mr-5"
              />
            </a>
          </div>
          <div className="flex justify-end items-center absolute right-[-5px] flex-1 z-999">
            <div className="hidden md:flex flex-row [&>p]:mr-10 uppercase font-normal font-sans">
              <Menu />
            </div>
            <div className="flex md:hidden pr-4">
              {toggleMenu ? (
                <RiCloseLine
                  color="grey"
                  size={27}
                  onClick={navClose}
                  className="z-999"
                />
              ) : (
                <RiMenu3Line
                  color="black"
                  size={27}
                  onClick={navOpen}
                  className="z-999"
                />
              )}
              {toggleMenu && (
                <div
                  ref={navMobile}
                  className="text-start absolute top-[-32px] right-0 drop-shadow-xl navbar-menu_container translate-x-full"
                >
                  <div className="w-96 max-w-[80vw] h-screen px-10 py-5 uppercase font-normal font-sans font-thin flex flex-col space-y-2 mt-16">
                    <Menu navClose={navClose} openModal={props.openModal} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      {toggleMenu && (
        <div
          ref={navBg}
          onClick={navClose}
          className="w-screen h-screen bg-stone-900/60 fixed top-0 z-[998] opacity-0"
        ></div>
      )}
    </div>
  );
};

export default Navbar;
