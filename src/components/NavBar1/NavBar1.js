import "../NavBar1/NavBar1.scss";
import instagram from "../../assests/icons/logo-instagram.svg";
import twitter from "../../assests/icons/logo-twitter.svg";
import meta from "../../assests/icons/logo-facebook.svg";
export default function NavBar1(){
    return (
        <div className="Nav-container">
          
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
              <a href="/">Think Tank</a>
            </li>
          </ul>
          <ul className="Nav-container__secondary-nav">
            <ul className="Nav-container__secondary-nav__nav-btns">
            <li>
              <a href="/blogs">Blogs</a>
            </li>{" "}
            <li>
              <a href="/">Events</a>
            </li>
            </ul>
            <ul className="Nav-container__secondary-nav__social-medias">
              <li>
                <a  href="https://www.instagram.com/ecellsnu/?utm_medium=copy_link" target="_blank">
                 <img class="navbarIcons" src={instagram}></img>
                </a>
              </li>{" "}
              <li>
              <a class="navbarIcons" href="https://twitter.com/ecellsnu?t=BDaPBAN7cuAqcLAJnpP-Uw&s=09" target="_blank">
                    <img class="navbarIcons" src={twitter}></img>
                </a>
              </li>{" "}
              <li>
              <a href="https://www.facebook.com/ecellsnu/" target="_blank">
                    <img class="navbarIcons" src={meta}></img>
                </a>
              </li>
            </ul>
          </ul>
        </div>
      );
}