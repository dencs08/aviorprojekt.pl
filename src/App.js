import React from 'react'

import { Navbar } from './components'
import { Header, Footer } from './containers'
import "./scss/app.scss"

const App = () => {
    return (
        <div className="App">
            <div className="gradient_bg">
                <Navbar />
                <Header />
            </div>
            <Footer />
        </div>
    )
}

export default App