import React from "react";
// import PropTypes from "prop-types";
import image from "../../Assets/icons/events.svg";
import "./PageNotFound.scss";

function PageNotFound(props) {
  return (
    <div className="PageNotFoundWrapper">
      <img alt="Events page" height="50%" src={image} />
      <p>
        Our Team is currently hard at work to bring forth beautiful experiences
        to your screens. Be sure to tune in during Breeze and other events! <br />
        <em>
          <i>~The Web Dev Team</i>
        </em>
      </p>
      <a href="/">
        <button>Back to Home</button>
      </a>
    </div>
  );
}

PageNotFound.propTypes = {
  // bla: PropTypes.string,
};

PageNotFound.defaultProps = {
  // bla: 'test',
};

export default PageNotFound;
