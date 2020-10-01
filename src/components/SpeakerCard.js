import React from "react";
import "./Speaker.css";
import { motion } from "framer-motion";
import Arrow from "../img/Arrow.svg";


export function SpeakerCard({ data }) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className={`speaker-card-container`}>
      <div className="speaker-card-bg"></div>
      <div className="speaker-card-wrapper">
        <div className="speaker-card-content">
          <div className="speaker-card-small-text-3">{data.date}</div>
          <div className="speaker-card-info">
            <div className="speaker-card-small-text-2">
              {data.speaker}, {data.company}
            </div>
            <div className="speaker-card-small-text-1">{data.title}</div>
            <div className="speaker-card-small-text-4">{data.time}</div>
          </div>
        </div>
        <div className="speaker-card-img"></div>
        <motion.div className="speaker-card-arrow" whileHover={{ x: 20 }}>
          <img src={Arrow} alt={"arrow"} />
        </motion.div>
      </div>
    </motion.div>
  );
}
