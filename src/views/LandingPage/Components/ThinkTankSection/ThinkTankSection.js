import React from "react";
// import PropTypes from "prop-types";
import "./ThinkTankSection.scss";
import LandingSectionTexts from "../../../../components/LandingSectionTexts/LandingSectionTexts";
import icon from "../../../../Assets/Illustration/Desgin-frame.svg";
import { motion, useMotionValue, useTransform } from "framer-motion";

function ThinkTankSection(props) {
  return (
    <section className="ThinkTankSectionWrapper">
      <div className="ThinkTankSectionWrapper__content-container">
          <img className="animation-holder" src={icon} height="500px" alt="icon" />
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
