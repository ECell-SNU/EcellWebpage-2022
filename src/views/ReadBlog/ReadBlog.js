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
  const blog = BlogData[param.id];
  const iconsLight = [
    {
      icon: twitter,
      link: "https://twitter.com/ecellsnu?t=BDaPBAN7cuAqcLAJnpP-Uw&s=09",
    },
    {
      icon: facebook,
      link: "https://www.facebook.com/ecellsnu/",
    },
    {
      icon: instagram,
      link: "https://www.instagram.com/ecellsnu/?utm_medium=copy_link",
    },
    {
      icon: share,
      link: navigator.clipboard.writeText(document.location.href),
    },
  ];
  let text = blog.Content;
  const iconsDark = [
    {
      icon: twitterD,
      link: "https://twitter.com/ecellsnu?t=BDaPBAN7cuAqcLAJnpP-Uw&s=09",
    },
    {
      icon: facebookD,
      link: "https://www.facebook.com/ecellsnu/",
    },
    {
      icon: instaD,
      link: "https://www.instagram.com/ecellsnu/?utm_medium=copy_link",
    },
    {
      icon: shareD,
      link: navigator.clipboard.writeText(document.location.href),
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
            <div className="Mode">
              <img src={Mode === "light" ? moon : sun} alt="moon" />

              <p>{`${Mode === "light" ? "Dark" : "Light"} Mode`}</p>
            </div>
          </a>
          <ul>
            <li>
              <a href="/"> Go Back</a>
            </li>
            <li>
              <a href="/"> Blog Archive</a>
            </li>
            <ul>
              {Mode === "light"
                ? iconsLight.map((icon, index) => {
                    if (index !== 3)
                      return (
                        <li key={index}>
                          <a href={icon.link} rel="noreferrer" target="_blank">
                            <img src={icon.icon} alt="icon" height="20px" />
                          </a>
                        </li>
                      );
                    else
                      return (
                        <li key={index}>
                          <img src={icon.icon} alt="icon" height="20px" />
                        </li>
                      );
                  })
                : iconsDark.map((icon, index) => {
                    if (index !== 3)
                      return (
                        <li key={index}>
                          <a href={icon.link} rel="noreferrer" target="_blank">
                            <img src={icon.icon} alt="icon" height="20px" />
                          </a>
                        </li>
                      );
                    else
                      return (
                        <li key={index}>
                          <img src={icon.icon} alt="icon" height="20px" />
                        </li>
                      );
                  })}
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
            {/* <div className="blogContent__container__middle">
              <p>
                written by <br></br>
                <span>{blog.Author}</span>
                {blog.Creds}
                <br></br>
                {blog.Date}
              </p>
            </div> */}
            <div className="blogContent__container__bot">
              <div className="blogContent__container__bot__writtenBy">
                <img src={byline} width="150px" height="5" alt="byline" />

                <p>
                  written by <br />
                  <span>{blog.Author},</span> <br /> {blog.Creds},<br />
                  {blog.Date}
                </p>
              </div>
              <p
                dangerouslySetInnerHTML={{ __html: text }}
                className="blogContent__container__bot__text"
              >
                {/* {blog.Content} */}
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
