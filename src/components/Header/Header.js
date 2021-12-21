import "./Header.scss";

import instagram from "../../Assets/icons/logo-instagram.svg";
import twitter from "../../Assets/icons/logo-twitter.svg";
import meta from "../../Assets/icons/logo-facebook.svg";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function Header({
  navItem1,
  navItem2,
  navItem3,
  navItem4,
  navItem5,
  navItem6,
  navItem7,
}) {
  const [navState, setNavState] = useState(false);
  const thousandPixels = useMediaQuery({
    query: "(max-width: 1075px)",
  });

  function hideOverflow() {
    if (document.getElementById("root").style.overflow === "hidden") {
      document.getElementById("root").style.overflow = "unset";
    } else {
      document.getElementById("root").style.overflow = "hidden";
    }
  }

  return (
    <div className="HeaderContainer">
      {thousandPixels && (
        <div className="HeaderContainer__Hamburger">
          <input
            type="checkbox"
            id="NavBarInput"
            onChange={() => {
              setNavState(!navState);
              hideOverflow();
            }}
          />
          <div className="hamButton">
            <label className="HamMenu" htmlFor="NavBarInput">
              <span className="span HL1" />
              <span className="span HL2" />
              <span className="span HL3" />
            </label>
          </div>
        </div>
      )}
      <div
        className={`HeaderContainer__Menu ${
          navState ? "HeaderContainer__Menu--open" : ""
        }`}
      >
        <ul className="HeaderContainer__primary-nav">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/">About us</a>
          </li>
          <li>
            <a href="/teams">Team</a>
          </li>
          <li>
            <a href="/">Think Tank</a>
          </li>
          <li>
            <a href="/">Archive</a>
          </li>
        </ul>
        <ul className="HeaderContainer__secondary-nav">
          <ul className="HeaderContainer__secondary-nav__nav-btns">
            <li>
              <a href="/blogs">Blogs</a>
            </li>
            <li>
              <a href="/">Events</a>
            </li>
          </ul>
          <ul className="HeaderContainer__secondary-nav__social-medias">
            <li>
              <a
                href="https://www.instagram.com/ecellsnu/?utm_medium=copy_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="navbarIcons"
                  alt="Instagram"
                  src={instagram}
                ></img>
              </a>
            </li>
            <li>
              <a
                className="navbarIcons"
                href="https://twitter.com/ecellsnu?t=BDaPBAN7cuAqcLAJnpP-Uw&s=09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="navbarIcons" alt="Twitter" src={twitter}></img>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/ecellsnu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="Facebook" className="navbarIcons" src={meta}></img>
              </a>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
}
