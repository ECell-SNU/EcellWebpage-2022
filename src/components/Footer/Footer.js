import ReachOut from "./ReachOut/ReachOut";
import "./Footer.scss";
import instagram from "../../Assets/icons/insta-bw.svg";
import twitter from "../../Assets/icons/twitter-bw.svg";
import meta from "../../Assets/icons/fb-bw.svg";
import { useMediaQuery } from "react-responsive";

export default function Footer() {
  const isMobile = useMediaQuery({ query: "(max-width: 1075px)" });

  return (
    <div
      className={`FooterContainer ${isMobile ? "FooterContainer--mobile" : ""}`}
    >
      {!isMobile && (
        <>
          <ReachOut />
          <div className="FooterContainer__right">
            <div className="FooterContainer__elements">
              <ul>
                <li>
                  <h4>E-Cell</h4>
                </li>
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="#aboutus">About us</a>
                </li>
                <li>
                  <a href="/teams">Members</a>
                </li>
                <li>
                  <a href="#thinktank">Think Tank</a>
                </li>
              </ul>
            </div>

            <ul className="FooterContainer__elements__contact">
              <li>
                <h4 style={{ marginBottom: "20px", fontWeight: "600" }}>
                  Contact Us
                </h4>
              </li>
              <li>
                <a href="/">+919678829992</a>
              </li>
              <li>
                <a href="mailto:ecell@snu.edu.in">ecell@snu.edu.in</a>
              </li>
            </ul>
            <ul className="FooterContainer__elements__socials">
              <li>
                <a
                  href="https://www.instagram.com/ecellsnioe/"
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
                  <img
                    className="navbarIcons"
                    alt="Twitter"
                    src={twitter}
                  ></img>
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
          </div>
        </>
      )}
      {isMobile && (
        <ReachOut className="ReachOutContainer__mobile">
          <div className="FooterContainer__right--mobile">
            <ul className="FooterContainer__elements__contact--mobile">
              <li>
                <h4>Contact Us</h4>
              </li>
              <ul>
                <li>
                  <a href="/">+919678829992</a>
                </li>
                <li>
                  <a href="mailto:ecell@snu.edu.in">ecell@snu.edu.in</a>
                </li>
              </ul>
            </ul>
            <ul className="FooterContainer__elements__socials--mobile">
              <li>
                <a
                  href="https://www.instagram.com/ecellsnioe/"
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
                  <img
                    className="navbarIcons"
                    alt="Twitter"
                    src={twitter}
                  ></img>
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
          </div>
        </ReachOut>
      )}
    </div>
  );
}
