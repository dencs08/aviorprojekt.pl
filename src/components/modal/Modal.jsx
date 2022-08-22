import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import { MdClose } from "react-icons/md";
import ModalBg from "../../assets/modal-bg.svg";

import "./modal.scss";

const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

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
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <div
          className="background w-full h-full fixed flex justify-center items-center bg-black/80 cursor-pointer"
          onClick={closeModal}
          ref={modalRef}
        >
          <animated.div className="animated" style={animation}>
            <div
              className="modal font-color-darker relative flex justify-center items-center cursor-default"
              showModal={showModal}
            >
              <MdClose
                className="close-modal p-0 cursor-pointer"
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
                size={35}
                color="#111"
              />
              <img src={ModalBg} className="h-[90vh] block" alt="" />
              <div className="h-[100%] min-w-[100px] max-w-[50vw] flex justify-center items-center flex-col absolute font-color-dark text-center">
                <h4 className="font-serif font-bold mb-3">
                  Wypełnij formularz poniżej
                </h4>
                <form>
                  <div class="email-input">
                    <input type="name" placeholder=" " name="" required />
                    <label>Imie</label>
                  </div>
                  <div class="email-input">
                    <input type="email" placeholder=" " name="" required />
                    <label>Email</label>
                  </div>
                  <div class="email-input">
                    <textarea
                      type="message"
                      placeholder=" "
                      name=""
                      rows="5"
                      required
                    />
                    <label>Wiadomość</label>
                  </div>
                  <a href="#" className="underline link-primary float-right">
                    Wyślij
                  </a>
                </form>
                <div className="flex flex-col xs:flex-row text-center xs:text-left text-left mt-4 md:mt-12">
                  <div className="px-8">
                    <h5 className="font-bold">AVIORPROJEKT</h5>
                    <a
                      className="link-primary underline"
                      href="avior.projekt@interia.pl"
                    >
                      avior.projekt@interia.pl
                    </a>
                    <p className="mb-6">789 364 931</p>
                    <p>NIP: 6912103626</p>
                    <p>REGON: 521160329</p>
                  </div>
                  <div className="px-8">
                    <div>
                      {" "}
                      <a className="link-primary underline" href="#">
                        ul.Radiotelefgrafitów 5/3
                      </a>
                    </div>
                    <div>
                      <a className="link-primary underline" href="#">
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
