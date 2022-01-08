import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./ReadBlog.scss";
import BlogData from "../../DataFiles/BlogData.json";

import instagram from "../../Assets/icons/logo-instagram.svg";
import twitter from "../../Assets/icons/logo-twitter.svg";
import meta from "../../Assets/icons/logo-facebook.svg";
import moon from "../../Assets/icons/moon.svg";
import sun from "../../Assets/icons/sun.svg";
import { useState } from "react";

export default function ReadBlog() {
  const param = useParams();
  console.log(param.id);
  const blog = BlogData[param.id];

  const [Mode, setMode] = useState("light");
  return (
    <>
      <div
        className={`BlogPage ${
          Mode === "dark" ? "colorSchemeDark" : "colorSchemeLight"
        }`}
      >
        <div
          className={`ReadBlogNav ${
            Mode === "dark" ? "colorSchemeDark" : "colorSchemeLight"
          }`}
        >
          <div className="Mode">
            <img src={Mode === "light" ? moon : sun} alt="moon" />
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                if (Mode === "light") {
                  setMode("dark");
                } else if (Mode === "dark") {
                  setMode("light");
                }
              }}
            >
              {`${Mode === "light" ? "Dark" : "Light"} Mode`}
            </a>
          </div>
          <ul>
            <li>
              <a href="/"> Go Back</a>
            </li>
            <li>
              <a href="/"> Blog Archive</a>
            </li>
            <ul>
              <li>
                <img src={instagram} height="16px" alt="instagram" />
              </li>
              <li>
                <img src={twitter} height="16px" alt="twitter" />
              </li>
            </ul>
          </ul>
        </div>
        <main
          className={`blogContent ${
            Mode === "dark" ? "colorSchemeDark" : "colorSchemeLight"
          }`}
        >
          <article className="blogContent__container">
            <h1 className="blogContent__container__top">{blog.Title}</h1>
            <div className="blogContent__container__bot">
              <div className="blogContent__container__bot__writtenBy">
                <hr className="blogContent__container__bot__writtenBy__line" />
                <p>
                  written by <br></br>
                  <span>{blog.Author},</span> {blog.Creds}
                  <br></br>
                  {blog.Date}
                </p>
              </div>
              <p className="blogContent__container__bot__text">
                {blog.Content}
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
