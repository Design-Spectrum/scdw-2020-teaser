import React from "react";
import "./Speaker.css";
import { motion } from "framer-motion";
// import Arrow from "../img/Arrow.svg";

export function SpeakerCard({ data }) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className="speaker-card-container">
      <div></div>
      <div></div>
      <div className="speaker-card-wrapper">
        <div className="speaker-card-content">
          <div className="speaker-card-small-text-3">
            {data.date} {data.day} {data.time}
          </div>
          <div className="speaker-card-info">
            <div className="speaker-card-small-text-2">
              {data.open ? `${data.speaker}, ${data.company}` : "추후 공개됩니다"}
            </div>
            <div className="speaker-card-small-text-1">{data.open ? `${data.title}` : "COMING SOON"}</div>
          </div>
          <div className="speaker-card-tags-container">
            <div className="speaker-card-tags-wrapper">
              {data.tags && (
                <div className="speaker-card-tags">
                  <div className={`symbol ${data.tags[0].type}`}></div>
                  <div className="speaker-card-tag-text">{data.tags[0].text}</div>
                </div>
              )}
              {data.tags && data.tags.length > 1 && (
                <div className="speaker-card-tags">
                  <div className="speaker-card-tag-text">{data.tags[1].text}</div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="speaker-card-img">
          {data.open ? (
            <img
              src={`./profile/${data.week}_${data.order}.png`}
              alt={data.speaker}
            />
          ) : (
            <QMark />
          )}
        </div>
        <motion.div className="speaker-card-arrow" whileHover={{ x: 20 }}>
          <Arrow type={data.tags[0].type} />
        </motion.div>
      </div>
    </motion.div>
  );
}

function Arrow({ type }) {
  let color = "";
  if (type === "opening") {
    color = "#FBBC43";
  } else if (type === "talks") {
    color = "#90F78A";
  } else if (type === "keynote") {
    color = "#388DF7";
  }

  return (
    <svg width="74" height="74" viewBox="0 0 74 74" fill={color}>
      <rect x="62.7565" y="31.7667" width="10.3175" height="10.3175" />
      <rect x="52.4391" y="42.0847" width="10.3175" height="10.3175" />
      <rect x="42.1218" y="52.4023" width="10.3175" height="10.3175" />
      <rect x="31.8043" y="62.7188" width="10.3175" height="10.3175" />
      <rect x="0.851868" y="31.7667" width="61.9048" height="10.3175" />
      <rect x="42.1218" y="11.1332" width="10.3175" height="10.3175" />
      <rect x="31.8043" y="0.814697" width="10.3175" height="10.3175" />
      <rect x="52.4391" y="21.4489" width="10.3175" height="10.3175" />
    </svg>
  );
}

function QMark() {
  return (
    <svg
      width="62"
      height="100"
      viewBox="0 0 62 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="12.3362" width="12.3362" height="12.3362" fill="#C6CED5" />
      <rect x="12.5123" width="12.3362" height="12.3362" fill="#C6CED5" />
      <rect x="24.8486" width="12.3362" height="12.3362" fill="#C6CED5" />
      <rect x="37.1848" width="12.3362" height="12.3362" fill="#C6CED5" />
      <rect
        x="49.521"
        y="12.3362"
        width="12.3362"
        height="12.3362"
        fill="#C6CED5"
      />
      <rect
        x="0.176147"
        y="24.6724"
        width="12.3362"
        height="12.3362"
        fill="#C6CED5"
      />
      <rect
        x="49.521"
        y="24.6724"
        width="12.3362"
        height="12.3362"
        fill="#C6CED5"
      />
      <rect
        x="37.1848"
        y="37.0086"
        width="12.3362"
        height="12.3362"
        fill="#C6CED5"
      />
      <rect
        x="24.8486"
        y="49.3448"
        width="12.3362"
        height="12.3362"
        fill="#C6CED5"
      />
      <rect
        x="24.8486"
        y="61.681"
        width="12.3362"
        height="12.3362"
        fill="#C6CED5"
      />
      <rect
        x="24.8486"
        y="87.587"
        width="12.3362"
        height="12.3362"
        fill="#C6CED5"
      />
    </svg>
  );
}
