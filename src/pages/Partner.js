import React from "react";
import { Page } from "../components/Page";
import Duotone from "../img/logo/Duotone.png";
import { AnimatedText } from "../components/Interaction";
import EO from "../img/logo/EO.png";
import {ChevronRight} from "react-feather"

const partnerData = [
  {
    title: "EO Studio",
    desc:
      "EO는 국내 최고의 스타트업 영상 미디어이자 기업가 정신과 기회에서 이야기를 발굴하는 콘텐츠 스타트업입니다. 창업, 취업, 진로, 교육, 임팩트 투자, 스타트업, 기업가 정신 등의 분야에 있어 최고의 영상제작과 스토리텔링 능력을 가지고 있습니다.",
    logo: EO,
    link: "https://www.youtube.com/channel/UCQ2DWm5Md16Dc3xRwwhVE7Q",
    tag: "logo-eo",
  },
  {
    title: "DUOTONE",
    desc:
      "듀오톤은 내일의 디지털 프로덕트를 위한 전략과 프로세스를 수립하고, 디자인 시스템을 설계합니다. 다양한 관점으로 사용자의 문제에 공감하고, 완성도 높고 균형 잡힌 디자인 결과물을 함께 만들어나갑니다.",
    logo: Duotone,
    link: "https://duotone.io/",
    tag: "logo-duotone",
  },
];

export function Partner({ myRef }) {
  return (
    <Page center={false} myRef={myRef}>
      <div className="title">
        <AnimatedText delay={0.4} yPos={40}>
          <div className="heading-1">Creative Partner</div>
        </AnimatedText>
      </div>
      <div className="partner-container">
        {partnerData.map((x, i) => {
          return (
            <div className="partner-item" key={i}>
              <div style={{ textAlign: "center" }}>
                <AnimatedText delay={0.4 * i + 0.6} yPos={40}>
                  <img src={x.logo} alt="EO Logo" className={x.tag} />
                </AnimatedText>
              </div>
              <div className="partner-item-info">
                <div className="partner-item-info-text">
                  <AnimatedText delay={0.4 * i + 0.8} yPos={0}>
                    <div className="heading-5">{x.title}</div>
                  </AnimatedText>
                  <AnimatedText delay={0.4 * i + 0.8} yPos={0}>
                    <div className="body-1">{x.desc}</div>
                  </AnimatedText>
                </div>
                <div>
                  <AnimatedText delay={0.4 * i + 0.8} yPos={0}>
                    <a href={x.link}>
                      <div className="btn">
                        <div style={{display: "grid", gridTemplateColumns:"max-content max-content", gridGap: 4, alignItems:"center", justifyContent: "center"}}>
                          <div>{x.title} 바로가기</div>
                          <ChevronRight />
                        </div>
                      </div>
                    </a>
                  </AnimatedText>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Page>
  );
}
