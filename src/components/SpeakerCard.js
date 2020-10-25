import React from "react";
import "./Speaker.css";
import { motion } from "framer-motion";
// import Arrow from "../img/Arrow.svg";

export function SpeakerCard({ data }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={`speaker-card-container`}
    >
      <div className="speaker-card-bg"></div>
      <div className="speaker-card-wrapper">
        <div className="speaker-card-content">
          <div className="speaker-card-small-text-3">
            {data.date} {data.day} {data.time}
          </div>
          <div className="speaker-card-info">
            <div className="speaker-card-small-text-2">
              {data.speaker}, {data.company}
            </div>
            <div className="speaker-card-small-text-1">{data.title}</div>
          </div>
          <div className="speaker-card-tags-container">
            <div className="speaker-card-tags-wrapper">
              {data.tags && (
                <div className="speaker-card-tags">
                  <div className={`symbol ${data.tags[0].type}`}></div>
                  <div className="heading-5">{data.tags[0].text}</div>
                </div>
              )}
              {data.tags && data.tags.length > 1 && (
                <div className="speaker-card-tags">
                  <div className="heading-5">{data.tags[1].text}</div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="speaker-card-img">
          <img
            src={`./profile/${data.week}_${data.order}.png`}
            alt={data.speaker}
          />
        </div>
        <motion.div
          className="speaker-card-arrow"
          whileHover={{ x: 20 }}
        >
          <Arrow type={data.tags[0].type}/>
        </motion.div>
      </div>
    </motion.div>
  );
}

function Arrow({type}) {

  let color = ""
  if (type == "opening") {
    color= "#FBBC43"
  } else if (type == "talks") {
    color= "#90F78A"
  } else if (type == "keynote") {
    color= "#388DF7"
  }

  return (
    <svg width="74" height="74" viewBox="0 0 74 74" fill={color}>
      <rect
        x="62.7565"
        y="31.7667"
        width="10.3175"
        height="10.3175"
        
      />
      <rect
        x="52.4391"
        y="42.0847"
        width="10.3175"
        height="10.3175"
      />
      <rect
        x="42.1218"
        y="52.4023"
        width="10.3175"
        height="10.3175"
      />
      <rect
        x="31.8043"
        y="62.7188"
        width="10.3175"
        height="10.3175"
      />
      <rect
        x="0.851868"
        y="31.7667"
        width="61.9048"
        height="10.3175"
      />
      <rect
        x="42.1218"
        y="11.1332"
        width="10.3175"
        height="10.3175"
      />
      <rect
        x="31.8043"
        y="0.814697"
        width="10.3175"
        height="10.3175"
      />
      <rect
        x="52.4391"
        y="21.4489"
        width="10.3175"
        height="10.3175"
      />
    </svg>
  );
}
