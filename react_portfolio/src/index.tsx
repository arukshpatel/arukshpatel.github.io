import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/Example/App";
import Main from "./Components/Body/Main";
import reportWebVitals from "./reportWebVitals";
import Header from "./Components/Header/Header";
import { Navbar } from "./Components/Navbar/Navbar";

// @ts-ignore
ReactDOM.render(
	<React.StrictMode>
		<Header />
		<Navbar />
	</React.StrictMode>,
	document.getElementById("body")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
