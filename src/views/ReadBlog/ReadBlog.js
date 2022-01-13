import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./ReadBlog.scss";
import BlogData from "../../DataFiles/BlogData.json";

import moon from "../../Assets/icons/mooon.svg";
import sun from "../../Assets/icons/sun.svg";
import byline from "../../Assets/icons/byline-top.svg";
import { useState } from "react";
import instagram from "../../Assets/icons/instaL.svg";
import twitter from "../../Assets/icons/twitterL.svg";
import share from "../../Assets/icons/shareL.svg";
import facebook from "../../Assets/icons/fbL.svg";

import instaD from "../../Assets/icons/instaD.svg";
import twitterD from "../../Assets/icons/twitterD.svg";
import shareD from "../../Assets/icons/shareD.svg";
import facebookD from "../../Assets/icons/fbD.svg";

export default function ReadBlog() {
  const param = useParams();
  console.log(param.id);
  const blog = BlogData[param.id];
  const iconsLight = [
    {
      icon: twitter,
      link: "asd",
    },
    {
      icon: facebook,
      link: "asd",
    },
    {
      icon: instagram,
      link: "asd",
    },
    {
      icon: share,
      link: "asd",
    },
  ];

  const iconsDark = [
    {
      icon: twitterD,
      link: "asd",
    },
    {
      icon: facebookD,
      link: "asd",
    },
    {
      icon: instaD,
      link: "asd",
    },
    {
      icon: shareD,
      link: "asd",
    },
  ];
  const [Mode, setMode] = useState("dark");
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
              {Mode === "light"
                ? iconsLight.map((icon, index) => (
                    <li key={index}>
                      <a href={icon.link}>
                        <img src={icon.icon} alt="icon" height="20px" />
                      </a>
                    </li>
                  ))
                : iconsDark.map((icon, index) => (
                    <li key={index}>
                      <a href={icon.link}>
                        <img src={icon.icon} alt="icon" height="20px" />
                      </a>
                    </li>
                  ))}
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
                <img src={byline} alt="byline" />

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
