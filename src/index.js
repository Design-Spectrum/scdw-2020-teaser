import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ReactGA from "react-ga";
ReactGA.initialize("G-SX02EL9KMH"); // add your tracking id here.
ReactGA.pageview(window.location.pathname + window.location.search);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
