import React from "react";
// import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";
import "./HeroSection.scss";
import LandingIllustration from "../../../../Assets/Illustration/Landing-Illustration.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function HeroSection(props) {
  const thousandPixels = useMediaQuery({
    query: "(max-width: 1075px)",
  });

  return (
    <section className="HeroSectionWrapper">
      <div className="HeroSectionWrapper__content-container">
        <div className="HeroSectionWrapper__content">
          <h1 className="HeroSectionWrapper__Title">
            A platform for students and
            <div className="HeroSectionWrapper__Title__Rotator">
              faculty to
              <span>
                create.<br />
                innovate.<br />
                incubate.<br />
                create.
              </span>
            </div>
          </h1>
          <p className="HeroSectionWrapper__Description">
            E-Cell Shiv Nadar University strives to provide a platform for
            students and faculty to create, innovate, incubate, and realize their
            entrepreneurial dreams.
          </p>
          <div className="HeroSectionWrapper__Button-container">
            <Link
              to="/teams"
              className="HeroSectionWrapper__Button-container__Button"
            >
              Our Team
            </Link>
            <Link className="HeroSectionWrapper__Button-container__Button">
              Learn More
            </Link>
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
