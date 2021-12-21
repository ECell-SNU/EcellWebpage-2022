import React from "react";
// import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";
import "./HeroSection.scss";
import LandingIllustration from "../../../../Assets/Illustration/Landing-Illustration.svg";

function HeroSection(props) {
  const thousandPixels = useMediaQuery({
    query: "(max-width: 1075px)",
  });

  return (
    <section className="HeroSectionWrapper">
      <div className="HeroSectionWrapper__content-container">
        <div className="HeroSectionWrapper__content">
          <h1 className="HeroSectionWrapper__Title">
            A platform for students and faculty to
            <span className="HeroSectionWrapper__Title__Rotator">
              &nbsp;create .
            </span>
          </h1>
          <p className="HeroSectionWrapper__Description">
            E-cell Shiv Nadar University strives to provide a platform for
            students and faculty to create, innovate, incubate and realize their
            entrepreneurial dreams
          </p>
          <div className="HeroSectionWrapper__Button-container">
            <button className="HeroSectionWrapper__Button-container__Button">
              Our Team
            </button>
            <button className="HeroSectionWrapper__Button-container__Button">
              Learn More
            </button>
          </div>
        </div>
        {!thousandPixels && (
          <img
            alt="hero"
            className="HeroSectionWrapper__content-container__illustration"
            src={LandingIllustration}
          />
        )}
      </div>
    </section>
  );
}

HeroSection.propTypes = {
  // bla: PropTypes.string,
};

HeroSection.defaultProps = {
  // bla: 'test',
};

export default HeroSection;
