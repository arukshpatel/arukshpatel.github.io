import React    from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar   from "./Components/Navbar/Navbar";
import Intro    from "./Components/Intro/Intro";
import AboutMe  from "./Components/AboutMe/AboutMe";

ReactDOM.render(
		<React.Fragment>
			<Navbar/>
			<div className={'h-screen'}>
				<Intro/>
			</div>
			<AboutMe/>
		</React.Fragment>,
	document.getElementById("nav")
);