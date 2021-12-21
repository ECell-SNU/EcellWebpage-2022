import React from "react";
import propTypes from "prop-types";
import "./BlogArchive.scss";
import { Link } from "react-router-dom";

function BlogArchive({ title, author }) {
  return (
    <div className="BlogArchiveContainer">
      <p className="BlogArchiveContainer__tag">Archive</p>
      <Link
        to={`${author}/${title}`}
        style={{ textDecoration: "none" }}
        className="BlogArchiveRouting"
      >
        <div className="BlogArchiveRouting__title">{title}</div>
        <div className="BlogArchiveRouting__author">Written By: {author}</div>
      </Link>

      <div className="BlogArchiveRouting__redirect">Read Now</div>
    </div>
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
