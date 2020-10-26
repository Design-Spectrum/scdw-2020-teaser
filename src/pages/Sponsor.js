import React from "react";
import { Page } from "../components/Page";
import { AnimatedText } from "../components/Interaction";
import Coupang from "../img/sponsor/coupang.png";
import Toss from "../img/sponsor/toss.png";
import Frip from "../img/sponsor/frip.png";
import Onl from "../img/sponsor/onl.png";
import Tangun from "../img/sponsor/tangun.png";
import ProtoPie from "../img/sponsor/protopie.png";
import Wanted from "../img/sponsor/wanted.png";

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
          <div className="heading-6">Platinum</div>
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
        <div className="sponsor-tier">
        <AnimatedText delay={0.6} yPos={0}>
          <div className="heading-6">Gold</div>
          </AnimatedText>
          <AnimatedText delay={0.8} yPos={40}>
            <div className="sponsor-item-container-2">
              <div className="sponsor-item gold">
                <img src={Coupang} alt="Coupang Logo" />
              </div>
              <div className="sponsor-item gold">
                <img src={Onl} alt="Onl Logo" />
              </div>
            </div>
          </AnimatedText>
        </div>
        <div className="sponsor-tier">
        <AnimatedText delay={1} yPos={0}>
          <div className="heading-6">Silver</div>
          </AnimatedText>
          <AnimatedText delay={1.2} yPos={40}>
            <div className="sponsor-item-container-3">
              <div className="sponsor-item silver">
                <img src={Wanted} alt="Wanted Logo" />
              </div>
              <div className="sponsor-item silver">
                <img src={Tangun} alt="Tangun Logo" />
              </div>
              <div className="sponsor-item silver">
                <img src={ProtoPie} alt="ProtoPie Logo" />
              </div>
            </div>
          </AnimatedText>
        </div>
      </div>
    </Page>
  );
}
