import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import useLocoScroll from './hooks/useLocoScroll'

import { Navbar } from './components'
import { Footer } from './containers'
import { Start, Projects } from './routes'
import "./scss/app.scss"

const App = () => {
    const ref = useRef(null);
    // const [preloader, setPreload] = useState(true);

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

            <div className="App main-container" id="main-container"
                data-scroll-container
                ref={ref}>
                <div className="content">
                    <Navbar />
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