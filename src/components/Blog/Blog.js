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
      <div className="BlogByline">
        <div className="BlogByline__author">{author}</div>
        <div className="BlogByline__credential">{credential}</div>
        <div className="BlogByline__date">
          {date}, {day}
        </div>
      </div>

      <div className="BlogContent">
        <div className="BlogContent__title">{title}</div>
        <div className="BlogContent__content">{content}</div>
      </div>
    </div>
  );
}
