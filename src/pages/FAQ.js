import React from "react";
import { Page } from "../components/Page";
import FAQData from "../data/faq";
import { motion } from "framer-motion";

export function FAQ({ myRef }) {
  return (
    <Page center={false} myRef={myRef} marginBottom={240}>
      <div className="title">
        <div className="heading-1">FAQ</div>
      </div>
      <div style={{ display: "grid" }}>
        {FAQData.map((x, i) => {
          return <Accordion key={i} data={x} />;
        })}
      </div>
    </Page>
  );
}

function Accordion({ data }) {
  const [state, setState] = React.useState(false);
  return (
    <motion.div className="accordion-item">
      <div className="accordion-title" onClick={() => setState(!state)}>
        <div className="heading-2">{data.title}</div>
        <motion.div
          animate={state ? { rotate: 180, y: -4 } : { rotate: 0, y: 0 }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 12L16 20L24 12"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </motion.div>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          state
            ? { height: "max-content", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
      >
        <div className="accordion-content">
          <div className="body-1">{data.text}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
