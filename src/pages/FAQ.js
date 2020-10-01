import React from "react";
import { Page } from "../components/Page";
import FAQData from "../data/faq";

export function FAQ({ myRef }) {
  return (
    <Page center={false} myRef={myRef} marginBottom={240}>
      <div className="title">
        <div className="heading-1">FAQ</div>
      </div>
      <div style={{ display: "grid", gridGap: 40, maxWidth: 940 }}>
        {FAQData.map((x, i) => {
          return (
            <div key={i}>
              <div className="heading-2">{x.title}</div>
              <div className="body-1">{x.text}</div>
            </div>
          );
        })}
      </div>
    </Page>
  );
}
