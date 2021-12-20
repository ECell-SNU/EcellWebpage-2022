import instagram from "../../assests/icons/logo-instagram.svg";
import twitter from "../../assests/icons/logo-twitter.svg";
import meta from "../../assests/icons/logo-facebook.svg";
import "../NavBar2/NavBar2.scss";
export default function NavBar2() {
    return (<div className="Nav-container">
          
    <ul className="Nav-container__primary-nav">
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
        <a href="/blogs_archive">Archive</a>
      </li>
    </ul>
      <ul className="Nav-container__social-medias">
        <li>
          <a  href="https://www.instagram.com/ecellsnu/?utm_medium=copy_link" target="_blank">
           <img class="Nav-container__social-medias__navbarIcons" src={instagram}></img>
          </a>
        </li>{" "}
        <li>
        <a class="navbarIcons" href="https://twitter.com/ecellsnu?t=BDaPBAN7cuAqcLAJnpP-Uw&s=09" target="_blank">
              <img class="Nav-container__social-medias__navbarIcons" src={twitter}></img>
          </a>
        </li>{" "}
        <li>
        <a href="https://www.facebook.com/ecellsnu/" target="_blank">
              <img class="Nav-container__social-medias__navbarIcons" src={meta}></img>
          </a>
        </li>
      </ul>
  </div>);
}