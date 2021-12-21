import React from "react";
import propTypes from "prop-types";
import "./BlogArchive.scss";
import { Link } from "react-router-dom";

function BlogArchive({ title, author, status }) {
  return (
    <div className="BlogArchiveContainer">
      <p className="BlogArchiveContainer__tag">{status}</p>
      <Link
        to={`${title}/${author}`}
        style={{ textDecoration: "none" }}
        className="BlogArchiveRouting"
      >
        <div className="BlogArchiveRouting__title">{title}</div>
        <div className="BlogArchiveRouting__author">Written By: {author}</div>
      </Link>

      <button className="BlogArchiveRouting__redirect">Read Now</button>
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
