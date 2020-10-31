import React from "react";
import "./styles.css";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import data from "./data/talks";
import { SpeakerPage } from "./components/SpeakerPage";
import { ScrollToTop } from "./components/ScrollToTop";

import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";
// import { TeaserHome } from "./pages/TeaserHome";
import { Page } from "./components/Page";
import NoMatchIcon from "./img/404.svg";




export default function App() {
  
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {data
            .filter((x) => x.open === true)
            .map((x, i) => {
              return (
                <Route exact path={`/${x.link}`} key={i}>
                  <SpeakerPage
                    localData={x}
                    globalData={data.filter((x) => x.open === true)}
                    index={i}
                  />
                </Route>
              );
            })}
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export function NoMatch() {
  return (
    <Page center={true}>
      <div
        style={{
          display: "grid",
          gridGap: 24,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <img src={NoMatchIcon} alt="404 Error" />
        </div>
        <div style={{ textAlign: "center" }}>
          <div className="heading-2">Not found :(</div>
        </div>
        <div>
          <NavLink to={"/"}>
            <div className="btn">Go back to Home</div>
          </NavLink>
        </div>
      </div>
    </Page>
  );
}
