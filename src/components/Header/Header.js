import "./Header.scss";

import instagram from "../../Assets/icons/logo-instagram.svg";
import twitter from "../../Assets/icons/logo-twitter.svg";
import meta from "../../Assets/icons/logo-facebook.svg";

export default function Header() {
  return (
    <div className="HeaderContainer">
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
  );
}
