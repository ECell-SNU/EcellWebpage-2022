import "./Blog.scss";
import React from "react";

export default function Blog({
  author,
  title,
  content,
  date,
  day,
  credential,
  shareLink,
}) {
  return (
    <div className="BlogContainer">
      <div className="BlogContainer__byline">
        <div className="BlogContainer__byline__author">{author}</div>
        <div className="BlogContainer__byline__credential">{credential}</div>
        <div className="BlogContainer__byline__date">{date}</div>
        <div className="BlogContainer__byline__day">{day}</div>
      </div>

      <div className="BlogContainer__blog">
        <div className="BlogContainer__blog__title">{title}</div>
        <div className="BlogContainer__blog__content">{content}</div>
      </div>
    </div>
  );
}
