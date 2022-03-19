import React    from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./Components/Navbar/Navbar";
import Intro  from "./Components/Intro/Intro";

ReactDOM.render(
		<React.Fragment>
			<Navbar/>
		</React.Fragment>,
	document.getElementById("nav")
);

ReactDOM.render(
	<React.Fragment>
		<Intro/>
	</React.Fragment>,
	document.getElementById('content')
);