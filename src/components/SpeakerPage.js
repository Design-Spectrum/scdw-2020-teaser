import React from "react";
import "./Speaker.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import { Page } from "./Page";
import { SpeakerCard } from "./SpeakerCard";

export function SpeakerPage({ localData, globalData, index }) {
  return (
    <div className="content" style={{ marginTop: 220, marginBottom: 160 }}>
      <Page>
        <div className="speaker-page-wrapper">
          <div>
            <div className="speaker-card-large-text-3">{localData.date}</div>
            <div className="speaker-page-info">
              <div className="speaker-card-large-text-2">
                {localData.speaker}, {localData.company}
              </div>
              <div className="speaker-card-large-text-1">{localData.title}</div>
              <div className="speaker-card-large-text-4">{localData.time}</div>
            </div>
            <div className="btn">캘린더에 추가하기</div>
          </div>
          <div className="speaker-page-img"></div>
        </div>
        <div className="speaker-page-content-container">
          <div className="speaker-page-content-title">
            <div className="heading-3">Contents</div>
          </div>
          <div className="speaker-page-content-wrapper">
            {localData.contents.map((x, i) => {
              return (
                <div key={i}>
                  <div className="heading-2">{x.title}</div>
                  <div className="body-1">{x.text}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="speaker-page-nav-wrapper">
          {index !== 0 && (
            <div>
              <div className="heading-2">이전 프로그램</div>
              <NavLink to={globalData[index - 1].link}>
                <SpeakerCard data={globalData[index - 1]} />
              </NavLink>
            </div>
          )}
          {index !== globalData.length - 1 && (
            <div>
              <div className="heading-2">다음 프로그램</div>
              <NavLink to={globalData[index + 1].link}>
                <SpeakerCard data={globalData[index + 1]} />
              </NavLink>
            </div>
          )}
        </div>
      </Page>
    </div>
  );
}

function ListTest() {
    return <Router />;
  }
  