import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-hook-inview";
import { useState } from "react";

export default function AnimationRender(props) {
  const [ref__ATS, inView__ATS] = useInView({
    threshold: 0.3,
  });

  const [triggered, setTriggered] = useState(false);
  const animationTrigger__ATS = useAnimation();
  if (inView__ATS && !triggered) {
    console.log(triggered);
    setTriggered(true);
    animationTrigger__ATS.start({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.6,
      },
    });
  }

  if (!inView__ATS && !triggered) {
    animationTrigger__ATS.start({
      opacity: 0,
      y: 10,
    });
  }
  return (
    <motion.div animate={animationTrigger__ATS} ref={ref__ATS}>
      {props.children}
    </motion.div>
  );
}
