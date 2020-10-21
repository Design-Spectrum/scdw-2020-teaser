import React from "react";
import { GlitchPage } from "../components/Glitch";
import { Page } from "../components/Page";
import { AnimatedText } from "../components/Interaction";
import { Sponsor } from "./Sponsor";
import { CoC } from "./CoC";
import { FAQ } from "./FAQ";
import { Speaker } from "./Speaker";

// import backgroundVideo from "../bg_video_final.mp4";

import data from "../data/talks";

export function Home() {
  const spring = {
    type: "spring",
    damping: 1,
    stiffness: 100,
  };

  return (
    <>
    //   <video className="videoTag" autoPlay loop muted>
    //     <source src={backgroundVideo} type="video/mp4" />
    //   </video>
      <Page center={true}>
        <div className="title">
          <div className="heading-1"  style={{textAlign: "center", textTransform: "uppercase"}}>Spectrum Con <br/> Design Week 2020</div>
        </div>
      </Page>
      <div className="content">
        <Page center={true}>
          <div className="title">
            <AnimatedText delay={0.4} yPos={40} spring={spring}>
              <div className="heading-1">Spectrum Con</div>
            </AnimatedText>
            <AnimatedText delay={0.525} yPos={40} spring={spring}>
              <div className="heading-1">Design Week 2020</div>
            </AnimatedText>
          </div>

          <div className="content-wrapper-2">
            <div className="content-paragraph">
              <AnimatedText delay={0.9} yPos={0}>
                <div className="heading-2">Nov 23, 2020 - Dec 4, 2020</div>
              </AnimatedText>
              <AnimatedText delay={0.9} yPos={0}>
                <div className="body-1">
                  디자이너들이 자신의 가치를 확인하고 더욱 발전하기 위해서는
                  여러 각도에서의 자극과 탐구가 필요합니다. 그것이 온라인이든
                  오프라인이든 상관없이 디자이너들이 이러한 필요를 느낄 때
                  자유롭게 찾아와서 이야기할 수 있는 기회와 공간이 필요하다고
                  생각했습니다.
                </div>
              </AnimatedText>
            </div>
            <div>
              <AnimatedText delay={0.9} yPos={0}>
                <BuyCoupon />
              </AnimatedText>
            </div>
          </div>
        </Page>
        <Speaker data={data} />
        <Sponsor />
        <CoC />
        <FAQ />
      </div>
    </>
  );
}

function BuyCoupon() {
  return (
    <svg width="314" height="113" viewBox="0 0 314 113" fill="none">
      <rect width="157.863" height="89.7637" fill="#06ACFF" />
      <rect
        x="34.5054"
        y="9.65204"
        width="224.286"
        height="93.6245"
        fill="#06ACFF"
      />
      <rect
        x="69.011"
        y="19.304"
        width="244.989"
        height="93.6245"
        fill="#06ACFF"
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        className="ticket"
      >
        BUY EARLY BIRD
      </text>
    </svg>
  );
}
