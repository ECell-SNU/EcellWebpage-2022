import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./ReadBlog.scss";
import BlogData from "../../DataFiles/BlogData.json";
/*
import instagram from "../../Assets/icons/logo-instagram.svg";
import twitter from "../../Assets/icons/logo-twitter.svg";
import meta from "../../Assets/icons/logo-facebook.svg";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

*/
export default function ReadBlog() {
  const param = useParams();
  console.log(param.id);
  const blog = BlogData[param.id];
  console.log(blog);
  // useEffect(() => {
  //   let blog = BlogData.find((blog) => blog.ID === param.id);
  //   console.log(blog);
  // }, [param.id]);
  return (
    <>
      <nav>Navbar goes here</nav>
      <hr />
      <main className="blogContent">
        <article className="blogContent__container">
          <h1 className="blogContet__container__top">{blog.Title}</h1>
          <div className="blogContent__container__bot">
            <div className="blogContent__container__bot__writtenBy">
              <div className="blogContent__container__bot__writtenBy__line"></div>
              <p>
                written by <br></br>
                <span>{blog.Author},</span> {blog.Creds}
                <br></br>
                {blog.Date}
              </p>
            </div>
            <p className="blogContent__container__bot__text">{blog.Content}</p>
          </div>
        </article>
      </main>
    </>
  );
}
