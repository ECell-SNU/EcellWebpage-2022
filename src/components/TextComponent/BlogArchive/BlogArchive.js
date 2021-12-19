import React from "react";
import propTypes from "prop-types";
import "./BlogArchive.scss";
import { Link } from "react-router-dom";

function BlogArchive({ title, author }) {
  return (
    <Link
      to={`${title}/${author}`}
      style={{ textDecoration: "none" }}
      className="BlogArchiveWrapper"
    >
      <div className="BlogArchiveWrapper__title">{title}</div>
      <div className="BlogArchiveWrapper__author">{author}</div>
    </Link>
  );
}

BlogArchive.propTypes = {
  content: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};

BlogArchive.defaultProps = {
  content: "idk",
};

export default BlogArchive;
