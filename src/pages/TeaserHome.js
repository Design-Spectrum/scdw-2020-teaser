import React from "react";
import { GlitchPage } from "../components/Glitch";
import { Page } from "../components/Page";
import { AnimatedText } from "../components/Interaction";
import backgroundVideo from "../bg_video.mp4";

import HomeType from "../img/homeTypo.svg";

export function TeaserHome() {
  const spring = {
    type: "spring",
    damping: 1,
    stiffness: 100,
  };

  const size = useWindowSize();

  function responsiveSize(tag, num1) {
    let screenSize = tag;
    if (
      size.height <= num1 &&
      size.height > 640 &&
      size.width < 550 &&
      size.width > 300
    ) {
      screenSize = tag + "-s";
    } else if (size.height <= 640 && size.height > 600) {
      screenSize = tag + "-xs";
    } else if (size.height <= 600) {
      screenSize = tag + "-xxs";
    } else if (size.width <= 300 && size.height <= 660) {
      screenSize = tag + "-long";
    }
    return screenSize;
  }

  return (
    <>
      <div
        className={responsiveSize("video-container", 830)}
        dangerouslySetInnerHTML={{
          __html: `
  
          <video
            autoplay
            playsinline
            loop
  muted
  class="${responsiveSize("videoTag", 830)}"
>
  <source src="${backgroundVideo}" type="video/mp4" />
</video>`,
        }}
      />

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

          <div className="content-wrapper">
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
          </div>
        </Page>
      </div>
    </>
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
