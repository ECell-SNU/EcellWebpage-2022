import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../../logo.svg";
import "./Home.scss";

export default function Home() {
  return (
    <div className="App">
      Use Links Here
      <ul className="links-container">
        <p classname="links-container__link">Hi</p>
        <li><Link classname="links-container__link" to={`/home`}>Visit main HomePage</Link></li>
        <li><Link classname="links-container__link" to={`/home`}>Visit main BlogPage</Link></li>
        <li><Link classname="links-container__link" to={`/home`}>Visit EventPage</Link></li>
        <li><Link classname="links-container__link" to={`/home`}>Visit TeamPage</Link></li>
        </ul>
    </div>
  );
}
