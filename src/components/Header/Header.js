import "./Header.scss";

import instagram from "../../Assets/icons/logo-instagram.svg";
import twitter from "../../Assets/icons/logo-twitter.svg";
import meta from "../../Assets/icons/logo-facebook.svg";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function Header({
  navItem1,
  navItem2,
  navItem3,
  navItem4,
  navItem5,
  navItem6,
  navItem7,
  routeItem1,
  routeItem2,
  routeItem3,
  routeItem4,
  routeItem5,
  routeItem6,
  routeItem7,
  textColor,
}) {
  const [navState, setNavState] = useState(false);
  const thousandPixels = useMediaQuery({
    query: "(max-width: 1075px)",
  });

  const node = useRef();

  function handleClick({ target }) {
    if (
      (!node.current.contains(target) || !node.current === target) &&
      thousandPixels
    ) {
      setNavState(false);
      document.getElementById("NavBarInput").checked = false;
      hideOverflow();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    hideOverflow();
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });

  function hideOverflow() {
    if (!navState) {
      document.getElementById("root").style.overflow = "unset";
    } else {
      document.getElementById("root").style.overflow = "hidden";
    }
  }

  return (
    <div className="HeaderContainer" ref={node}>
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
            <a
              style={{
                color: textColor,
              }}
              href={routeItem1}
            >
              {navItem1}
            </a>
          </li>
          <li>
            <a
              style={{
                color: textColor,
              }}
              href={routeItem2}
            >
              {navItem2}
            </a>
          </li>
          <li>
            <a
              style={{
                color: textColor,
              }}
              href={routeItem3}
            >
              {navItem3}
            </a>
          </li>
          <li>
            <a
              style={{
                color: textColor,
              }}
              href={routeItem4}
            >
              {navItem4}
            </a>
          </li>
          <li>
            <a
              style={{
                color: textColor,
              }}
              href={routeItem5}
            >
              {navItem5}
            </a>
          </li>
        </ul>
        <ul className="HeaderContainer__secondary-nav">
          <ul className="HeaderContainer__secondary-nav__nav-btns">
            <li>
              <a
                style={{
                  color: textColor,
                }}
                href={routeItem6}
              >
                {navItem6}
              </a>
            </li>
            <li>
              <a
                style={{
                  color: textColor,
                }}
                href={routeItem7}
              >
                {navItem7}
              </a>
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
