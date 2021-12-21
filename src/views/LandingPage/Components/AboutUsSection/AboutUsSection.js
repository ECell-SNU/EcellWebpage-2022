import React from "react";
import PropTypes from "prop-types";
import "./AboutUsSection.scss";
import LandingSectionTexts from "../../../../components/LandingSectionTexts/LandingSectionTexts";
import Tab from "../../../../components/Tab/Tab";

function AboutUsSection(props) {
  return (
    <section className="AboutUsSectionWrapper">
      <div className="AboutUsSectionWrapper__content-container">
        <LandingSectionTexts
          classifier="About us"
          title="Venture Beyond the norm"
          content1="  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Mauris augue neque
  gravida in fermentum et sollicitudin ac. Sit amet volutpat consequat
  mauris nunc congue nisi vitae."
        />

        <Tab />
      </div>
    </section>
  );
}

AboutUsSection.propTypes = {
  // bla: PropTypes.string,
};

AboutUsSection.defaultProps = {
  // bla: 'test',
};

export default AboutUsSection;
