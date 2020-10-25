import React from "react";
import { Page } from "../components/Page";
import { AnimatedText } from "../components/Interaction";
import { Sponsor } from "./Sponsor";
import { CoC } from "./CoC";
import { FAQ } from "./FAQ";
import { Speaker } from "./Speaker";
import HomeType from "../img/homeTypo.svg";

import data from "../data/talks";

export function Home() {
  const spring = {
    type: "spring",
    damping: 1,
    stiffness: 100,
  };

  const size = useWindowSize();

  return (
    <>
      <Page center={true}>
        <div className="title">
          <img src={HomeType} style={{ width: "100%", height: "50vh" }} />
        </div>
      </Page>
      <div className="content">
        <Page center={size.height > 680 ? true : false}>
          <div className="title">
            <AnimatedText delay={0.4} yPos={40} spring={spring}>
              <div className="heading-1">A Whole New World</div>
            </AnimatedText>
          </div>

          <div className="content-wrapper-2">
            <div style={{ display: "grid", gridGap: 40, marginBottom: 80 }}>
              <div className="content-paragraph">
                <AnimatedText delay={0.9} yPos={0}>
                  <div className="heading-2">새로운 형식</div>
                </AnimatedText>
                <AnimatedText delay={0.9} yPos={0}>
                  <div className="body-1">
                    코로나19로 열린 비대면 시대. <br />
                    2020 스펙트럼콘은 새로운 형식의 온라인 콘퍼런스를
                    시도합니다. {size.width >= 640 && <br />}이번 콘퍼런스는
                    온라인으로, 2주 동안 네 가지 주제로 진행합니다.{" "}
                    {size.width >= 640 && <br />}퀄리티 높은 온라인 경험을
                    드리기 위해, 스타트업 미디어 채널 EO와 협업합니다.
                  </div>
                </AnimatedText>
              </div>
              <div className="content-paragraph">
                <AnimatedText delay={0.9} yPos={0}>
                  <div className="heading-2">팀 단위 스피커</div>
                </AnimatedText>
                <AnimatedText delay={0.9} yPos={0}>
                  <div className="body-1">
                    프로덕트 제작 과정에 참여하는 모든 이들과 함께합니다.
                    {size.width >= 640 && <br />}디자이너 뿐만 아니라, 그들과
                    협업하는 팀원들도 스피커로 초청하여{" "}
                    {size.width >= 640 && <br />}팀 단위의 경험을 공유합니다.
                  </div>
                </AnimatedText>
              </div>
              <div className="content-paragraph">
                <AnimatedText delay={0.9} yPos={0}>
                  <div className="heading-2">솔직한 실패</div>
                </AnimatedText>
                <AnimatedText delay={0.9} yPos={0}>
                  <div className="body-1">
                    번듯한 성공이 아닌 솔직한 실패를 공유합니다.
                    {size.width >= 640 && <br />}
                    새로운 시대를 대처하는 저마다의 방법들을 결과만이 아닌
                    {size.width >= 640 && <br />}
                    과정에도 초점을 맞추어 전달합니다.
                  </div>
                </AnimatedText>
              </div>
            </div>
          <div>
          <AnimatedText delay={0.9} yPos={0}>
            <BuyCoupon text={"REGISTER NOW"}/>
            </AnimatedText>
          </div>
            </div>
        </Page>
        <Speaker data={data} />
        <Sponsor />
        <FAQ />
        <CoC />
      </div>
    </>
  );
}

function BuyCoupon({text}) {
  return (
    <svg
      width="399"
      height="145"
      viewBox="0 0 399 145"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M386.468 69.7213V65.8057H373.742V62.2692H359.125V57.1537H345.012V51.9752H329.576V46.8598H313.509V40.8602H296.939V34.7975H280.621V28.8611H266.571V24.5666H255.545V20.3985H240.865V14.9673H228.706V10.8624H216.042V5.6838H205.961V0H192.352V5.6838H182.271V10.8624H169.545V14.9673H157.385V20.3985H142.705V24.5666H131.742V28.8611H117.629V34.7975H101.374V40.8602H84.8038V46.8598H68.7377V51.9752H53.2386V57.1537H39.1887V62.2692H24.5717V65.8057H11.8448V69.7213H0V75.2787H11.8448V79.1311V79.1943H24.5717V82.7308H39.1887V87.8463H53.2386V93.0248H68.7377V98.0771H84.8038V104.14H101.374V110.203H117.629V116.139H131.742V120.433H142.705V124.601H157.385V130.033H169.545V134.138H182.271V139.253H192.352V145H205.961V139.253H216.042V134.138H228.706V130.033H240.865V124.601H255.545V120.433H266.571V116.139H280.621V110.203H296.939V104.14H313.509V98.0771H329.576V93.0248H345.012V87.8463H359.125V82.7308H373.742V79.1943H386.468V79.1311V75.2787H398.313V69.7213H386.468Z"
        fill="black"
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        className="ticket"
      >
        {text}
      </text>
    </svg>
  );
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.outerWidth,
        height: window.outerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
