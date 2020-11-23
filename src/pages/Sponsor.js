import React from "react";
import { Page } from "../components/Page";
import { AnimatedText } from "../components/Interaction";
import Toss from "../img/sponsor/toss.png";
import Frip from "../img/sponsor/frip.png";
import Tangun from "../img/sponsor/tangun.svg";
import ProtoPie from "../img/sponsor/protopie.svg";
import CompanoidLabs from "../img/sponsor/companoidlabs.svg";
import DesignPress from "../img/sponsor/designpress.svg";
import Surfit from "../img/sponsor/surfit.svg";
import Eventus from "../img/sponsor/eventus.png";
import Inflearn from "../img/sponsor/inflearn.svg";

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
            <div className="sponsor-item-container-3">
              <div className="sponsor-item gold">
                <img src={Toss} alt="Toss Logo" />
              </div>
              <div className="sponsor-item gold">
                <img src={Frip} alt="Frip Logo" />
              </div>
              <div className="sponsor-item gold">
                <img src={ProtoPie} alt="ProtoPie Logo" />
              </div>
            </div>
            <div className="sponsor-item-container-1" style={{ marginTop: 32 }}>
              <div className="sponsor-item gold">
                <img src={Tangun} alt="Tangun Logo" />
              </div>
            </div>
          </AnimatedText>
        </div>
        <div className="sponsor-tier">
          <AnimatedText delay={0.2} yPos={0}>
            <div className="heading-6">Silver</div>
          </AnimatedText>
          <AnimatedText delay={0.4} yPos={40}>
            <div className="sponsor-item-container-1">
              <div className="sponsor-item silver">
                <img src={CompanoidLabs} alt="Companoid Labs Logo" />
              </div>
            </div>
          </AnimatedText>
        </div>
        <div className="sponsor-tier">
          <AnimatedText delay={0.2} yPos={0}>
            <div className="heading-6">Media Sponsor</div>
          </AnimatedText>
          <AnimatedText delay={0.4} yPos={40}>
            <div className="sponsor-item-container-3">
              <div className="sponsor-item silver">
                <img src={DesignPress} alt="DesignPress Logo" />
              </div>
              <div className="sponsor-item silver">
                <img src={Surfit} alt="Surfit Logo" />
              </div>
              <div className="sponsor-item silver">
                <img src={Eventus} alt="Eventus Logo" />
              </div>
            </div>
            <div className="sponsor-item-container-1" style={{ marginTop: 32 }}>
              
              <div className="sponsor-item silver">
                <img src={Inflearn} alt="Inflearn Logo" />
              </div>
            </div>
          </AnimatedText>
        </div>
      </div>
    </Page>
  );
}
