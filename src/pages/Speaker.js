import React from "react";
import "../components/Speaker.css";
import { Page } from "../components/Page";
// import BG1 from "../img/bg1.svg";
// import BG2 from "../img/bg2.svg";
// import BG3 from "../img/bg3.svg";

import { SpeakerList } from "../components/SpeakerList";
import { AnimatedText } from "../components/Interaction";

export function Speaker({ data, myRef }) {
  const spring = {
    type: "spring",
    damping: 1,
    stiffness: 100,
  };

  return (
    <Page center={false} myRef={myRef}>
      <div className="title">
        <AnimatedText delay={0.1} yPos={40} spring={spring}>
          <div className="heading-1">Program</div>
        </AnimatedText>
      </div>

      <SpeakerList data={data} />
    </Page>
  );
}

// function SpeakerBG({ top, left, src, alt }) {
//   return (
//     <img
//       className="speaker-bg-img"
//       style={{
//         top: top,
//         left: left,
//       }}
//       src={src}
//       alt={alt}
//     />
//   );
// }

// <SpeakerBG top={0} left={-480} src={BG1} alt={"bg1"} />
// <SpeakerBG top={820} left={-800} src={BG2} alt={"bg2"} />
// <SpeakerBG top={440} left={460} src={BG3} alt={"bg3"} />

// <AnimatedText delay={0.4}>
//   <div className="body-1">2주간 진행되는 다양한 세션을 들어보세요.</div>
// </AnimatedText>;
