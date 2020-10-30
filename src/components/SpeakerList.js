import React from "react";
import "./Speaker.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { SpeakerCard } from "./SpeakerCard";

export function SpeakerList({ data }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05 + 0.65,
      },
    }),
    hidden: { y: 80, opacity: 0 },
  };

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } 
    // else {
    //   controls.start("hidden");
    // }
  }, [controls, inView]);

  return (
    <div className="speaker-list-wrapper">
      <div style={{ position: "relative" }}>
        <motion.div
          className="speaker-list-container"
          // style={state ? { display: "grid" } : { display: "none" }}
          ref={ref}
          //   animate={state ? { opacity: 1 } : { opacity: 0 }}
        >
          {data.map((x, i) => {
            return (
              <motion.div
                custom={i}
                animate={controls}
                initial={"hidden"}
                variants={variants}
                className={x.order}
                key={i}
              >
                {i % 2 !== 0 && (
                  <div className="right-item-margin"></div>
                )}
                <NavLink to={x.open === true ? `/${x.link}` : "/"} key={i}>
                  <SpeakerCard data={x} />
                </NavLink>
                {i % 2 === 0 && (
                  <div className="left-item-margin"></div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

function ListTest() {
  return <Router />;
}
