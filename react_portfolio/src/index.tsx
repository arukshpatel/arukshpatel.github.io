import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Navbar from './Components/Navbar/Navbar'
import Intro from './Components/Intro/Intro'
import AboutMe from './Components/AboutMe/AboutMe'

ReactDOM.render(
    <React.Fragment>
        <Navbar />
    </React.Fragment>,
    document.getElementById('nav'),
)

ReactDOM.render(
    <React.Fragment>
        <Intro />
        <AboutMe />
    </React.Fragment>,
    document.getElementById('content'),
)
