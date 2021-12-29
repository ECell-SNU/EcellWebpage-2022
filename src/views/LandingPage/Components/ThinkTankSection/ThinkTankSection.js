import React from "react";
// import PropTypes from "prop-types";
import "./ThinkTankSection.scss";
import LandingSectionTexts from "../../../../components/LandingSectionTexts/LandingSectionTexts";
import icon from "../../../../Assets/Illustration/Desgin-frame.svg";
import movingIcon from "../../../../Assets/Illustration/Bigboy-animation.svg";
// import { motion } from "framer-motion";

function ThinkTankSection(props) {
  return (
    <section className="ThinkTankSectionWrapper">
      <div className="ThinkTankSectionWrapper__content-container">
        <div className="animationWrapper">
          <img className="animation-holder" src={icon} alt="icon" />
          {/*<motion.div
            className="animation-motion"
            animate={{ x: 100, y: -100 }}
            transition={{ duration: 3, yoyo: Infinity }}
          >
            <img src={movingIcon} alt="movingIcon" />
					</motion.div> */}
          <img src={movingIcon} className="animation-motion" alt="movingIcon" />
        </div>
        <LandingSectionTexts
          classifier="Think Tank"
          title="What is the think tank ?"
          content1="Its a session that takes members through multiple modules ranging from all aspects of entrepreneurship where the members contribute to the pool through interactive and lively sessions. "
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
