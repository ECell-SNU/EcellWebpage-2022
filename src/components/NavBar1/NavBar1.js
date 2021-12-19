import "../NavBar1/NavBar1.scss";
export default function NavBar1(){
    return (
        <div className="Nav-container">
          <ul className="Nav-container__primary-nav">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">Team</a>
            </li>
            <li>
              <a href="/">Think Tank</a>
            </li>
          </ul>
          <ul className="Nav-container__secondary-nav">
            <li>
              <a href="/">Blogs</a>
            </li>{" "}
            <li>
              <a href="/">Events</a>
            </li>
            <ul className="Nav-container__secondary-nav__social-medias">
              <li>
                <a href="/">IN</a>
              </li>{" "}
              <li>
                <a href="/">TW</a>
              </li>{" "}
              <li>
                <a href="/">ME</a>
              </li>
            </ul>
          </ul>
        </div>
      );
}