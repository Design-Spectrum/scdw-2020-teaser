import React from "react";
import { GlitchPage } from "../components/Glitch";
import { Page } from "../components/Page";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AnimatedText({ children, delay, yPos }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={"hidden"}
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { delay: delay } },
        hidden: { opacity: 0, y: yPos },
      }}
    >
      {children}
    </motion.div>
  );
}

export function TeaserHome() {
  return (
    <>
      <GlitchPage />
      <div className="content">
        <Page center={true}>
          <div className="title">
            <AnimatedText delay={0.2} yPos={80}>
              <div className="heading-1">Spectrum Con</div>
            </AnimatedText>
            <AnimatedText delay={0.4} yPos={80}>
              <div className="heading-1">Design Week 2020</div>
            </AnimatedText>
          </div>

          <div
            style={{
              display: "grid",
              // gridTemplateColumns: "auto max-content",
              gridGap: 95,
              maxWidth: 940,
            }}
          >
            <div
              style={{
                display: "grid",
                gridGap: 8,
              }}
            >
              <AnimatedText delay={0.7} yPos={0}>
                <div className="heading-2">Nov 23, 2020 - Dec 4, 2020</div>
              </AnimatedText>
              <AnimatedText delay={0.7} yPos={0}>
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
