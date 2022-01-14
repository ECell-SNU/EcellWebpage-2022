import "./EventPage.scss";
import image from "../../Assets/icons/events.svg";
export default function EventPage() {
  return (
    <div className="EventPageWrapper">
      <img height="360px" src={image}></img>
      <p>
        Our Team is currently hard at work to bring beautiful experiences to
        your screen Be sure to tune in during Breeze and other events <br />
        <br />
        ~The Web Development Team
      </p>
      <a href="/">
        <button>Back to Home</button>
      </a>
    </div>
  );
}
