import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import BounceLoader from 'react-spinners/BounceLoader'

import useLocoScroll from './hooks/useLocoScroll'

import { Navbar } from './components'
import { Modal } from "./components";

import { Footer } from './containers'
import { Start, Projects } from './routes'
import "./scss/app.scss"

const App = () => {
    const mainContainer = useRef(null);
    const [preloader, setPreload] = useState(true);

    useLocoScroll(!preloader);

    useEffect(() => {
        const onPageLoad = () => {
            setPreload(false);
        };

        // Check if the page has already loaded
        if (document.readyState === "complete") {
            onPageLoad();
        } else {
            window.addEventListener("load", onPageLoad);
            // Remove the event listener when component unmounts
            return () => window.removeEventListener("load", onPageLoad);
        }
    }, []);

    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal((prev) => !prev);
    };

    useEffect(() => {
        const modalActivators = document.querySelectorAll("[open-modal]")
        modalActivators.forEach(element => {
            element.addEventListener('click', function (e) {
                openModal()
                if (!element.getAttribute('modal-value')) return

                setTimeout(() => {
                    let offerValue = element.getAttribute('modal-value')
                    document.getElementById('message').value = 'Dzień dobry, jestem zainteresowany/a usługą ' + offerValue + ', uprzejmie proszę o kontakt w celu przedstawienia szczegółów oferty.';
                }, []);
            })
        });
    }, [])



    return (

        <>
            {/* <CustomCursor /> */}
            {
                preloader ?
                    <>
                        <div className="h-screen w-screen flex justify-center items-center">
                            <BounceLoader size={75} color={"#289dd2"} loading={preloader} />
                        </div>
                    </>
                    :
                    <>
                        <Navbar openModal={openModal} />
                        <Modal showModal={showModal} setShowModal={setShowModal} />
                        <div className="App main-container" id="main-container"
                            data-scroll-container
                            ref={mainContainer}>
                            <div className="content">
                                <BrowserRouter>
                                    <Routes>
                                        <Route path="/" element={<Start />} />
                                        <Route path="/start" element={<Start />} />
                                        <Route path="/projekty" element={<Projects />} />
                                    </Routes>
                                </BrowserRouter>
                                <Footer />
                            </div>
                        </div>
                    </>
            }



        </>

    )
}

export default App