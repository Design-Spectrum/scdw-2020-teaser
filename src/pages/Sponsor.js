import React from "react";
import { Page } from "../components/Page";
import { AnimatedText } from "../components/Interaction";
import Toss from "../img/sponsor/toss.png";
import Frip from "../img/sponsor/frip.png";

export function Sponsor({ myRef }) {
  return (
    <Page center={false} myRef={myRef}>
      <div className="title">
        <AnimatedText delay={0.4} yPos={40}>
          <div className="heading-1">Sponsor</div>
        </AnimatedText>
      </div>
      <div className="sponsor-container">
        <div className="sponsor-tier">
          <AnimatedText delay={0.2} yPos={0}>
            <div className="heading-6">Gold</div>
          </AnimatedText>
          <AnimatedText delay={0.4} yPos={40}>
            <div className="sponsor-item-container-2">
              <div className="sponsor-item platinum">
                <img src={Toss} alt="Toss Logo" />
              </div>
              <div className="sponsor-item platinum">
                <img src={Frip} alt="Frip Logo" />
              </div>
            </div>
          </AnimatedText>
        </div>
      </div>
    </Page>
  );
}
