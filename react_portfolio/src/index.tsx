import React               from 'react'
import ReactDOM            from 'react-dom'
import './index.css'
import Navbar              from './Components/Navbar/Navbar'
import Intro               from './Components/Intro/Intro'
import AboutMe             from './Components/AboutMe/AboutMe'
import { ParticlesCanvas } from './Components/AboutMe/Components/ParticlesCanvas'

ReactDOM.render(
    <React.StrictMode>
        <Navbar/>
    </React.StrictMode>,
    document.getElementById('nav'),
)

ReactDOM.render(
    <React.StrictMode>
        <Intro/>
        <AboutMe/>
    </React.StrictMode>,
    document.getElementById('content'),
)
