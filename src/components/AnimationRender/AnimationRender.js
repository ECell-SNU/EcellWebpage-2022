import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-hook-inview";
import { useEffect } from "react";
import propTypes from "prop-types";

export default function AnimationRender(props) {
  const [ref__ATS, inView__ATS] = useInView({
    threshold: 0.3,
  });

  const animationTrigger__ATS = useAnimation();

  useEffect(() => {
    if (inView__ATS) {
      animationTrigger__ATS.start({
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.1,
          duration: 0.6,
        },
      });
    }

    if (!inView__ATS) {
      animationTrigger__ATS.start({
        opacity: 0,
        y: 10,
      });
    }
  }, [inView__ATS]);
  return (
    <motion.div animate={animationTrigger__ATS} ref={ref__ATS}>
      {props.children}
    </motion.div>
  );
}
