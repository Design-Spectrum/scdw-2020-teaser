import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function AnimatedText({ children, delay, yPos, spring }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={"hidden"}
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { delay: delay } },
        hidden: { opacity: 0, y: yPos },
      }}
      transition={spring}
    >
      {children}
    </motion.div>
  );
}
