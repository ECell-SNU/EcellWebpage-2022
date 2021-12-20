import React from "react";
// import PropTypes from "prop-types";
import "./TextComponent.scss";

export default function TextComponent(props) {
  return (
    <div className="TextComponentWrapper">
      <h4 className="TextComponentSubHeading">{props.subheading}</h4>
      <h1 className="TextComponentHeading">{props.heading}</h1>
      <p className="TextComponentContent">{props.content}</p>
    </div>
  );
}
