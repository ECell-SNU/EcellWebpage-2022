import React from "react";
import PropTypes from "prop-types";
import "./Session.scss";

function Session({ children, className, ...props }) {
  return (
    <section className="SessionWrapper" {...props}>
      <div className={`SessionWrapper__content-container ${className}`}>
        {children}
      </div>
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
