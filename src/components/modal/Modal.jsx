import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import { MdClose } from "react-icons/md";
import ModalBg from "../../assets/modal-bg.svg";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./modal.scss";

const Modal = ({ showModal, setShowModal }) => {
  const form = useRef();
  const modalRef = useRef();
  const okIcon = useRef();
  const errorIcon = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const sendEmail = (e) => {
    e.preventDefault();
    let notificationValue;

    emailjs
      .sendForm(
        "service_tslsmss",
        "template_yl7ndfo",
        form.current,
        "bacOOGv1V65QX9Kg2"
      )
      .then(
        (result) => {
          console.log(result.text);
          notificationValue = "Wiadomośc wysłana, dziękujemy za kontakt!";
          toast.success(notificationValue);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          notificationValue =
            "Ups, coś poszło nie tak! Spróbuj ponownie później lub skontaktuj się z nami na avior.projekt@interia.pl";
          toast.error(notificationValue);
          e.target.reset();
        }
      );
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
      />
      {showModal ? (
        <div
          className="background w-full h-full fixed flex justify-center items-center bg-black/80 cursor-pointer"
          onClick={closeModal}
          ref={modalRef}
        >
          <animated.div className="animated" style={animation}>
            <div className="modal font-color-darker relative flex justify-center items-center cursor-default">
              <MdClose
                className="close-modal p-0 cursor-pointer"
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
                size={35}
                color="#111"
              />
              <img
                src={ModalBg}
                className="h-[90vh] block disable-select pointer-events-none"
                alt=""
              />
              <div className="h-[100%] min-w-[100px] max-w-[50vw] flex justify-center items-center flex-col absolute font-color-dark text-center">
                <div className="icon">
                  <span ref={okIcon} className="glyphicon glyphicon-ok hidden">
                    ok
                  </span>
                  <span
                    ref={errorIcon}
                    className="glyphicon glyphicon-error hidden"
                  >
                    no ok
                  </span>
                </div>
                <h4 className="font-serif font-bold mb-3">
                  Wypełnij formularz poniżej
                </h4>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="email-input">
                    <input type="name" placeholder=" " name="name" required />
                    <label>Imie</label>
                  </div>
                  <div className="email-input">
                    <input type="email" placeholder=" " name="email" required />
                    <label>Email</label>
                  </div>
                  <div className="email-input">
                    <textarea
                      id="message"
                      type="message"
                      placeholder=" "
                      name="message"
                      rows="5"
                      required
                    />
                    <label>Wiadomość</label>
                  </div>
                  <input
                    type="submit"
                    value="Wyślij"
                    className="underline link-primary float-right cursor-pointer"
                  />
                </form>
                <div className="flex flex-col xs:flex-row text-center xs:text-left text-left mt-4 md:mt-12">
                  <div className="md:px-8">
                    <h5 className="font-bold">AVIORPROJEKT</h5>
                    <a
                      className="link-primary underline"
                      href="mailto: avior.projekt@interia.pl?subject=Przedstawienie szczegółów oferty&body=Dzień dobry, uprzejmie proszę o kontakt w celu przedstawienia szczegółów oferty oferowanej na Waszej stronie."
                    >
                      avior.projekt@interia.pl
                    </a>
                    <p className="mb-6">789 364 931</p>
                    <p>NIP: 6912103626</p>
                    <p>REGON: 521160329</p>
                  </div>
                  <div className="md:px-8">
                    <div>
                      {" "}
                      <a
                        className="link-primary underline"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.google.com/maps/place/Avior+Projekt+Meble+kuchenne%2Fszafy+na+wymiar/@51.1931765,16.177955,15z/data=!4m2!3m1!1s0x0:0x5833d8e34a5d8dfc?sa=X&ved=2ahUKEwjKleTXwNr5AhXGlIsKHeIgDysQ_BJ6BAhDEAU"
                      >
                        ul.Radiotelefgrafitów 5/3
                      </a>
                    </div>
                    <div>
                      <a
                        className="link-primary underline"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.google.com/maps/place/Avior+Projekt+Meble+kuchenne%2Fszafy+na+wymiar/@51.1931765,16.177955,15z/data=!4m2!3m1!1s0x0:0x5833d8e34a5d8dfc?sa=X&ved=2ahUKEwjKleTXwNr5AhXGlIsKHeIgDysQ_BJ6BAhDEAU"
                      >
                        59-220 Legnica
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
