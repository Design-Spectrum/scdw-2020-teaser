import React from "react";
import { Page } from "../components/Page";

import Coupang from "../img/sponsor/coupang.png";
import Toss from "../img/sponsor/toss.png";
import Frip from "../img/sponsor/frip.png";
import Onl from "../img/sponsor/onl.png";
import Tangun from "../img/sponsor/tangun.png";
import ProtoPie from "../img/sponsor/protopie.png";
import Wanted from "../img/sponsor/wanted.png";

export function Sponsor() {
  return (
    <Page center={true}>
      <div className="title">
        <div className="heading-1">Sponsor</div>
      </div>
      <div className="sponsor-container">
        <div className="sponsor-wrapper">
          <div className="sponsor-item">
            <img src={Toss} alt="Toss Logo" />
          </div>
          <div className="sponsor-item">
            <img src={Frip} alt="Frip Logo" />
          </div>
          <div className="sponsor-item">
            <img src={Coupang} alt="Coupang Logo" />
          </div>

          <div className="sponsor-item">
            <img src={Onl} alt="Onl Logo" />
          </div>
        </div>
        <div className="sponsor-wrapper">
          <div className="sponsor-item">
            <img src={Wanted} alt="Wanted Logo" />
          </div>
          <div className="sponsor-item">
            <img src={Tangun} alt="Tangun Logo" />
          </div>
          <div className="sponsor-item">
            <img src={ProtoPie} alt="ProtoPie Logo" />
          </div>
        </div>
      </div>
    </Page>
  );
}
