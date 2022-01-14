import React from "react";
// import PropTypes from "prop-types";
import "./ThinkTankSection.scss";
import LandingSectionTexts from "../../../../components/LandingSectionTexts/LandingSectionTexts";
import icon from "../../../../Assets/Illustration/Desgin-frame.svg";
import movingIcon from "../../../../Assets/Illustration/Bigboy-animation.svg";
// import { motion } from "framer-motion";

import { useMediaQuery } from "react-responsive";

function ThinkTankSection(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 1075px)" });

  return (
    <section className="ThinkTankSectionWrapper" {...props}>
      <div className="ThinkTankSectionWrapper__content-container">
        {!isMobile && (
          <div className="animationWrapper">
            <img className="animation-holder" src={icon} alt="icon" />
            {/*<motion.div
            className="animation-motion"
            animate={{ x: 100, y: -100 }}
            transition={{ duration: 3, yoyo: Infinity }}
          >
            <img src={movingIcon} alt="movingIcon" />
					</motion.div> */}
            <img
              src={movingIcon}
              className="animation-motion"
              alt="movingIcon"
            />
          </div>
        )}
        <LandingSectionTexts
          classifier="Think Tank"
          title="What is the think tank ?"
          content1="It's a session that takes members through multiple modules ranging from all aspects of entrepreneurship where the members contribute to the pool through interactive and lively sessions. "
          content2="Upcoming events and ideas are first displayed during our think tank sessions for feedback and further improvements before being released. have a look at some of them below"
        />
      </div>
    </section>
  );
}

ThinkTankSection.propTypes = {
  // bla: PropTypes.string,
};

ThinkTankSection.defaultProps = {
  // bla: 'test',
};

export default ThinkTankSection;
