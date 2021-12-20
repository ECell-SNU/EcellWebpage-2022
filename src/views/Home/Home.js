import { Link } from "react-router-dom";
import "./Home.scss";

export default function Home() {
  return (
    <div className="HomeWrapper">
      Use Links Here
      <ul className="links-container">
        <p className="links-container__link">Routes</p>
        <li>
          <Link className="links-container__link" to={`/home`}>
            Visit main HomePage
          </Link>
        </li>
        <li>
          <Link className="links-container__link" to={`/blogs`}>
            Visit main BlogPage
          </Link>
        </li>
        <li>
          <Link className="links-container__link" to={`/events`}>
            Visit EventPage
          </Link>
        </li>
        <li>
          <Link className="links-container__link" to={`/teams`}>
            Visit TeamPage
          </Link>
        </li>
        <li>
          <Link className="links-container__link" to={`/blogs_archive`}>
            Visit ArchivePage
          </Link>
        </li>
      </ul>
    </div>
  );
}
