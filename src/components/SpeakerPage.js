import React from "react";
import "./Speaker.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import { Page } from "./Page";
import { SpeakerCard } from "./SpeakerCard";

export function SpeakerPage({ localData, globalData, index }) {
  return (
    <div className="content speaker-page">
      <Page>
        <div className="speaker-page-wrapper">
          <div className="speaker-page-info-container">
            <div style={{ display: "grid", gridGap: 24 }}>
              <div className="speaker-page-tags-wrapper">
                {localData.tags && (
                  <div className="speaker-card-tags">
                    <div className={`symbol ${localData.tags[0].type}`}></div>
                    <div className="speaker-page-tag-text">
                      {localData.tags[0].text}
                    </div>
                  </div>
                )}
                {localData.tags && localData.tags.length > 1 && (
                  <div className="speaker-card-tags">
                    <div className="speaker-page-tag-text">
                      {localData.tags[1].text}
                    </div>
                  </div>
                )}
              </div>
              <div className="speaker-card-large-text-3">
                2020/{localData.date} {localData.day} {localData.time}
              </div>
            </div>
            <div className="speaker-page-info">
              <div className="speaker-card-large-text-2">
                {localData.open && localData.speaker !== "" && `${localData.speaker} | `}
                {localData.open && localData.company !== "" && `${localData.company}`}
              </div>
              <div className="speaker-card-large-text-1">{localData.title}</div>
            </div>
            <div>
              <div className="btn">캘린더에 추가하기</div>
            </div>
          </div>
          <div></div>
          <div className="speaker-page-img">
            <img
              src={`./profile/${localData.link}.jpg`}
              alt={localData.speaker}
            />
          </div>
        </div>
        <div className="speaker-page-content-container">
          <div className="speaker-page-content-title">
            <div className="heading-3">Contents</div>
          </div>
          <div className="speaker-page-content-wrapper">
            {localData.contents.map((x, i) => {
              return (
                <div key={i}>
                  {x.title && <div className="heading-2">{x.title}</div>}
                  <div className="body-1">{x.text}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="speaker-page-nav-wrapper">
          {index !== 0 && (
            <div style={{ display: "grid" }}>
              <div className="heading-2">이전 프로그램</div>
              <NavLink to={globalData[index - 1].link}>
                <SpeakerCard data={globalData[index - 1]} />
              </NavLink>
            </div>
          )}
          {index !== globalData.length - 1 && (
            <div style={{ display: "grid" }}>
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
