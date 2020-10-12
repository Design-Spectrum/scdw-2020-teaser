import React from "react";
import { GlitchPage } from "../components/Glitch";
import { Page } from "../components/Page";
import { AnimatedText } from "../components/Interaction";
import backgroundVideo from "../bg_vid.mp4";

export function TeaserHome() {
  const spring = {
    type: "spring",
    damping: 1,
    stiffness: 100,
  };

  return (
    <>
      <div className="video-container">
        <video className="videoTag" autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>
      <Page center={true}>
        <div className="title">
          <AnimatedText delay={0.4} yPos={40} spring={spring}>
            <div
              className="heading-1"
              style={{ textAlign: "center", textTransform: "uppercase" }}
            >
              Spectrum Con
            </div>
          </AnimatedText>
          <AnimatedText delay={0.6} yPos={40} spring={spring}>
            <div
              className="heading-1"
              style={{ textAlign: "center", textTransform: "uppercase" }}
            >
              Design Week 2020
            </div>
          </AnimatedText>
          <AnimatedText delay={0.8} yPos={40} spring={spring}>
            <div
              className="heading-1"
              style={{ textAlign: "center", textTransform: "uppercase" }}
            >
              A WHOLE NEW WORLD
            </div>
          </AnimatedText>
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

          <div className="content-wrapper">
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
          </div>
        </Page>
      </div>
    </>
  );
}
