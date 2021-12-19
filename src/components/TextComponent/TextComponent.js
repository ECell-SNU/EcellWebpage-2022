import React from "react";
// import PropTypes from "prop-types";
import "./TextComponent.scss";

function TextComponent(props) {
  return (
    <div className="TextComponentWrapper">
      <h5>{props.subheading}</h5>
      <h1>{props.heading}</h1>
      <p>{props.content}</p>
    </div>
  );
}

TextComponent.propTypes = {
  // bla: PropTypes.string,
};

TextComponent.defaultProps = {
  // bla: 'test',
};

export default TextComponent;
