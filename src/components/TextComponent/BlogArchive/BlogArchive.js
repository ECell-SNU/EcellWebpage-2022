import React from "react";
import propTypes from "prop-types";
import "./BlogArchive.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function BlogArchive({ title, author, status, tag }) {
  return (
    <motion.div 
    whileHover={{y: -10}}
    className="BlogArchiveContainer">
      <p className={tag}>{status}</p>
      <Link
        to={`${author}/${title}`}
        style={{ textDecoration: "none" }}
        className="BlogArchiveRouting"
      >
        <div className="BlogArchiveRouting__title">{title}</div>
        <div className="BlogArchiveRouting__author">Written By: {author}</div>
      </Link>

      <button className="BlogArchiveRouting__redirect">Read Now</button>
    </motion.div>
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
