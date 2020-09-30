import React from "react";
import "./styles.css";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TeaserHome } from "./pages/TeaserHome"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header>
          <div className="nav-item">
            Nov 23, 2020 - Dec 4, 2020
          </div>
        </Header>
        <Switch>
          <Route exact path="/">
            <TeaserHome />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
