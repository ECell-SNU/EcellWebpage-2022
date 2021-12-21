import React from "react";
import PropTypes from "prop-types";
import "./Session.scss";

function Session({ children }) {
  return (
    <section className="SessionWrapper">
      <div className="SessionWrapper__content-container">{children}</div>
    </section>
  );
}

Session.propTypes = {
  children: PropTypes.node.isRequired, 
};

Session.defaultProps = {
  children: null,
};

export default Session;
