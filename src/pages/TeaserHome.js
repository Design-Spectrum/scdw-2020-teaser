import React from "react";
import { GlitchPage } from "../components/Glitch"
import { Page } from "../components/Page";

export function TeaserHome() {
    return(
        <>
        <GlitchPage />
            <div className="content">
              <Page center={true}>
                <div className="title">
                  <div className="heading-1">
                    Spectrum Con <br />
                    Design Week 2020
                  </div>
                </div>
                <div
                  style={{
                    display: "grid",
                    // gridTemplateColumns: "auto max-content",
                    gridGap: 95,
                    maxWidth: 940
                  }}
                >
                  <div style={{
                    display: "grid",
                    gridGap: 8,
                  }}>
                    <div className="heading-2">Nov 23, 2020 - Dec 4, 2020</div>
                    <div className="body-1">
                      디자이너들이 자신의 가치를 확인하고 더욱 발전하기 위해서는
                      여러 각도에서의 자극과 탐구가 필요합니다. 그것이
                      온라인이든 오프라인이든 상관없이 디자이너들이 이러한
                      필요를 느낄 때 자유롭게 찾아와서 이야기할 수 있는 기회와
                      공간이 필요하다고 생각했습니다.
                    </div>
                  </div>
                </div>
              </Page>
            </div>
            </>
    )
}