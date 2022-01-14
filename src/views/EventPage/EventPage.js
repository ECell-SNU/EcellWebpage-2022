import "./EventPage.scss";
import image from "../../Assets/icons/events.svg";
export default function EventPage() {
  return (
    <div className="EventPageWrapper">
      <img height="50%" src={image}></img>
      <p>
        Our Team is currently hard at work to bring beautiful experiences to
        your screen Be sure to tune in during Breeze and other events <br />
        ~The Web Dev Team
      </p>
      <a href="/">
        <button>Back to Home</button>
      </a>
    </div>
  );
}
