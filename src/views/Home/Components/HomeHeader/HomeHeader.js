import "./HomeHeader.scss";

import instagram from "../../../../Assets/icons/logo-instagram.svg";
import twitter from "../../../../Assets/icons/logo-twitter.svg";
import meta from "../../../../Assets/icons/logo-facebook.svg";

export default function HomeHeader() {
  return (
    <div className="HomeHeaderContainer">
      <ul className="HomeHeaderContainer__primary-nav">
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
      <ul className="HomeHeaderContainer__secondary-nav">
        <ul className="HomeHeaderContainer__secondary-nav__nav-btns">
          <li>
            <a href="/blogs">Blogs</a>
          </li>
          <li>
            <a href="/">Events</a>
          </li>
        </ul>
        <ul className="HomeHeaderContainer__secondary-nav__social-medias">
          <li>
            <a
              href="https://www.instagram.com/ecellsnu/?utm_medium=copy_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img class="navbarIcons" alt="Instagram" src={instagram}></img>
            </a>
          </li>
          <li>
            <a
              class="navbarIcons"
              href="https://twitter.com/ecellsnu?t=BDaPBAN7cuAqcLAJnpP-Uw&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img class="navbarIcons" alt="Twitter" src={twitter}></img>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/ecellsnu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="Facebook" class="navbarIcons" src={meta}></img>
            </a>
          </li>
        </ul>
      </ul>
    </div>
  );
}
