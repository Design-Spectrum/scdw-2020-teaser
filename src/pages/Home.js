import React from "react";
import { Page } from "../components/Page";
import { AnimatedText } from "../components/Interaction";
import { Sponsor } from "./Sponsor";
import { Partner } from "./Partner";
import { CoC } from "./CoC";
// import { FAQ } from "./FAQ";
import { Speaker } from "./Speaker";
import Hero from "../img/hero.svg";
import backgroundVideo from "../bg_video_final.mp4";
import bgPoster from "../bg_poster.webp";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import data from "../data/talks";
import analytics from "../components/analytics";

export function Home() {
  const spring = {
    type: "spring",
    damping: 1,
    stiffness: 100,
  };

  const aboutControls = useAnimation();
  const partnerControls = useAnimation();
  const programControls = useAnimation();
  const cocControls = useAnimation();
  const [aboutPosRef, aboutInView] = useInView();
  const [partnerPosRef, partnerInView] = useInView();
  const [programPosRef, programInView] = useInView();
  const [cocPosRef, cocInView] = useInView();

  React.useEffect(() => {
    if (aboutInView) {
      aboutControls.start("visible");
    } else {
      aboutControls.start("hidden");
    }
  }, [aboutControls, aboutInView]);

  React.useEffect(() => {
    if (partnerInView) {
      partnerControls.start("visible");
    } else {
      partnerControls.start("hidden");
    }
  }, [partnerControls, partnerInView]);

  React.useEffect(() => {
    if (programInView) {
      programControls.start("visible");
    } else {
      programControls.start("hidden");
    }
  }, [programControls, programInView]);

  React.useEffect(() => {
    if (cocInView) {
      cocControls.start("visible");
    } else {
      cocControls.start("hidden");
    }
  }, [cocControls, cocInView]);

  const aboutRef = React.useRef();
  const partnerRef = React.useRef();
  const programRef = React.useRef();
  const cocRef = React.useRef();

  const size = useWindowSize();

  const topMargin = () => {
    if (size.width >= 600) {
      return 180;
    } else {
      return 120;
    }
  };

  const aboutMargin = () => {
    if (size.width >= 600) {
      return 0;
    } else {
      return -120;
    }
  };

  return (
    <>
      <div
        className="video-container"
        dangerouslySetInnerHTML={{
          __html: `
  
          <video
            autoplay
            playsinline
            loop
            preload="auto"
            muted
            poster="${bgPoster}"
            style=${
              size.width >= size.height ? `"width: 100%;"` : `"height: 100%;"`
            }
          >
            <source src="${backgroundVideo}" type="video/mp4" />
          </video>`,
        }}
      />
      <div className="header" style={{ pointerEvents: "none" }}>
        <div className="container-header bookmark">
          <div className="bookmark-container">
            <div className="dummy-logo"></div>
            <div className="bookmark-item-container">
              <motion.div
                initial={"hidden"}
                animate={aboutControls}
                variants={{
                  visible: { opacity: 1 },
                  hidden: { opacity: 0.5 },
                }}
                className="bookmark-item"
                onClick={() => {
                  window.scrollTo({
                    top: aboutRef.current.offsetTop + aboutMargin(),
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                <div className="bookmark-text">About</div>
              </motion.div>
              <motion.div
                initial={"hidden"}
                animate={partnerControls}
                variants={{
                  visible: { opacity: 1 },
                  hidden: { opacity: 0.5 },
                }}
                className="bookmark-item"
                onClick={() => {
                  window.scrollTo({
                    top: partnerRef.current.offsetTop + topMargin(),
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                <div className="bookmark-text">Partner</div>
              </motion.div>
              <motion.div
                initial={"hidden"}
                animate={programControls}
                variants={{
                  visible: { opacity: 1 },
                  hidden: { opacity: 0.5 },
                }}
                className="bookmark-item"
                onClick={() => {
                  window.scrollTo({
                    top: programRef.current.offsetTop + topMargin(),
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                <div className="bookmark-text">Program</div>
              </motion.div>
              <motion.div
                initial={"hidden"}
                animate={cocControls}
                variants={{
                  visible: { opacity: 1 },
                  hidden: { opacity: 0.5 },
                }}
                className="bookmark-item"
                onClick={() => {
                  window.scrollTo({
                    top: cocRef.current.offsetTop + topMargin(),
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                <div className="bookmark-text">CoC</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Page center={true}>
        <div className="title">
          <img
            src={Hero}
            style={{ width: "100%", height: "50vh" }}
            alt="Hero"
          />
        </div>
      </Page>
      <div className="content" style={{ marginTop: 60 }} ref={aboutRef}>
        <Page center={size.width > 480 ? true : false} myRef={aboutPosRef}>
          <div className="title">
            <AnimatedText delay={0.4} yPos={40} spring={spring}>
              <div className="heading-1">A Whole New World</div>
            </AnimatedText>
          </div>

          <div className="content-wrapper-2">
            <div style={{ display: "grid", gridGap: 40 }}>
              <div className="content-paragraph">
                <AnimatedText delay={0.8} yPos={0}>
                  <div className="heading-2">새로운 형식</div>
                </AnimatedText>
                <AnimatedText delay={0.8} yPos={0}>
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
                <AnimatedText delay={1.2} yPos={0}>
                  <div className="heading-2">팀 단위 스피커</div>
                </AnimatedText>
                <AnimatedText delay={1.2} yPos={0}>
                  <div className="body-1">
                    프로덕트 제작 과정에 참여하는 모든 이들과 함께합니다.
                    {size.width >= 640 && <br />}디자이너 뿐만 아니라, 그들과
                    협업하는 팀원들도 스피커로 초청하여{" "}
                    {size.width >= 640 && <br />}팀 단위의 경험을 공유합니다.
                  </div>
                </AnimatedText>
              </div>
              <div className="content-paragraph">
                <AnimatedText delay={1.6} yPos={0}>
                  <div className="heading-2">솔직한 실패</div>
                </AnimatedText>
                <AnimatedText delay={1.6} yPos={0}>
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
              <AnimatedText delay={2} yPos={0}>
                <a
                  href="https://event-us.kr/designspectrum/event/25161"
                  onClick={() =>
                    analytics.sendEvent({
                      category: "User",
                      action: "Go to Register Page (About Section)",
                      label: "Register",
                    })
                  }
                >
                  <div className="coupon-btn">
                    <BuyCoupon text={"REGISTER NOW"} />
                  </div>
                </a>
              </AnimatedText>
            </div>
          </div>
        </Page>
        <div className="margin-1" ref={partnerRef}></div>
        <Partner myRef={partnerPosRef} />

        <div className="margin-1" ref={programRef}></div>
        <Speaker data={data} myRef={programPosRef} />
        <div className="margin-1"></div>
        <Sponsor />
        {/* <div className="margin-1"></div>
              <FAQ /> */}
        <div className="margin-1" ref={cocRef}></div>
        <CoC myRef={cocPosRef} />
        <div className="margin-1"></div>
      </div>
    </>
  );
}

function BuyCoupon({ text }) {
  return (
    <svg width="399" height="145" viewBox="0 0 399 145" fill="none">
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
