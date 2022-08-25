import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import useLocoScroll from './hooks/useLocoScroll'

import { Navbar } from './components'
import { Modal } from "./components";

import { Footer } from './containers'
import { Start, Projects } from './routes'
import "./scss/app.scss"

const App = () => {
    const ref = useRef(null);
    // const [preloader, setPreload] = useState(true);

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

    useLocoScroll();

    useEffect(() => {
        if (ref) {
            if (typeof window === "undefined" || !window.document) {
                return;
            }
        }
    }, []);

    const [timer, setTimer] = React.useState(1);

    const id = React.useRef(null);

    const clear = () => {
        window.clearInterval(id.current);
        // setPreload(false);
    };

    React.useEffect(() => {
        id.current = window.setInterval(() => {
            setTimer((time) => time - 1);
        }, 1000);
        return () => clear();
    }, []);

    React.useEffect(() => {
        if (timer === 0) {
            clear();
        }
    }, [timer]);

    if (typeof window === "undefined" || !window.document) {
        return null;
    }

    return (

        <>
            {/* <CustomCursor /> */}
            {/* {preloader ? (
                <div className="loader-wrapper absolute top-[50%] left-[50%] text-center ">
                    <h1>Aviorprojekt</h1>
                    <h2>Urządź się tak, jak chcesz.</h2>
                </div>
            ) : ( */}

            <Navbar openModal={openModal} />
            <Modal showModal={showModal} setShowModal={setShowModal} />
            <div className="App main-container" id="main-container"
                data-scroll-container
                ref={ref}>
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

    )
}

export default App