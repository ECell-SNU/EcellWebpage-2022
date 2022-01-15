import React from "react";
// import PropTypes from "prop-types";
import "./AboutUsSection.scss";
import LandingSectionTexts from "../../../../components/LandingSectionTexts/LandingSectionTexts";
import Tab from "../../../../components/Tab/Tab";

function AboutUsSection(props) {
  return (
    <section className="AboutUsSectionWrapper" id="aboutus" {...props}>
      <div className="AboutUsSectionWrapper__content-container">
        <LandingSectionTexts
          classifier="About us"
          title="Venture Beyond the Norm"
          content1="The E-Cell at SNU is a collective of like minded induviduals with an intention to bring change, brainstorm and build products to solve real world problems. The club provides a very conducive environment which helps all members connect and grow together."
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
