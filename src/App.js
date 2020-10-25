import React from "react";
import "./styles.css";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
// import { TeaserHome } from "./pages/TeaserHome";
import { Home } from "./pages/Home";
import data from "./data/talks";
import { SpeakerPage } from "./components/SpeakerPage";
import { ScrollToTop } from "./components/ScrollToTop";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TeaserHome } from "./pages/TeaserHome";


export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header>
          <div className="nav-item">Nov 23, 2020 - Dec 4, 2020</div>
        </Header>
        <Switch>
          <Route exact path="/">
            
            <Home />
          </Route>
          {data.map((x, i) => {
            return (
              <Route exact path={`/${x.link}`} key={i}>
                <SpeakerPage localData={x} globalData={data} index={i} />
              </Route>
            );
          })}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

