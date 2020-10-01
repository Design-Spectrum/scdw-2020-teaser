import React from "react";
import "./Speaker.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { SpeakerCard } from "./SpeakerCard";
import { AnimatedText } from "./Interaction";

export function SpeakerList({ data }) {
  const [state, setState] = React.useState(true);
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
    console.log(inView);
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="speaker-list-wrapper">
      <AnimatedText delay={0.6}>
        <div className="speaker-list-nav">
          <div
            className={
              state
                ? "speaker-list-nav-list-selected"
                : "speaker-list-nav-list-unselected"
            }
            onClick={() => setState(!state)}
          >
            Week 1 Nov 23 - Nov 29
          </div>
          <div
            className={
              !state
                ? "speaker-list-nav-list-selected"
                : "speaker-list-nav-list-unselected"
            }
            onClick={() => setState(!state)}
          >
            Week 2 Dec 1 - Dec 6
          </div>
        </div>
      </AnimatedText>
      <div style={{ position: "relative" }}>
        <motion.div
          className="speaker-list-container"
          style={state ? { display: "grid" } : { display: "none" }}
          ref={ref}
          //   animate={state ? { opacity: 1 } : { opacity: 0 }}
        >
          {data
            .filter((x) => x.week === 1)
            .map((x, i) => {
              return (
                <motion.div
                  custom={i}
                  animate={controls}
                  initial={"hidden"}
                  variants={variants}
                  className={x.order}
                  key={i}
                >
                  <NavLink to={`/${x.link}`} key={i}>
                    <SpeakerCard data={x} />
                  </NavLink>
                </motion.div>
              );
            })}
        </motion.div>
        <motion.div
          className="speaker-list-container"
          style={state ? { display: "none" } : { display: "grid" }}
          //   animate={state ? { opacity: 0 } : { opacity: 1 }}
        >
          {data
            .filter((x) => x.week === 2)
            .map((x, i) => {
              return (
                <motion.div
                  custom={i}
                  animate={!state ? "visible" : "hidden"}
                  variants={variants}
                  className={x.order}
                  key={i}
                >
                  <NavLink to={`/${x.link}`} key={i}>
                    <SpeakerCard data={x} />
                  </NavLink>
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
