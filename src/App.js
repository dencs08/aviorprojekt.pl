import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Navbar } from './components'
import { Footer } from './containers'
import { Start, Projects } from './routes'
import "./scss/app.scss"

const App = () => {
    return (

        <div className="App">
            <Navbar />
            <div className="content">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Start />} />
                        <Route path="/start" element={<Start />} />
                        <Route path="/projekty" element={<Projects />} />
                    </Routes>
                </BrowserRouter>

            </div>
            <Footer />
        </div>

    )
}

export default App