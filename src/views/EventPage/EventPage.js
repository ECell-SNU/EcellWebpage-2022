import background from "../../Assets/image/background2.jpeg";
import Header from "../../components/Header/Header";
import "./EventPage.scss";
// import image from "../../Assets/icons/events.svg";
export default function EventPage() {
  return (
    <div className="EventPageWrapper">
      <Header
        navItem1="Home"
        navItem2="About Us"
        navItem3="Team"
        navItem4="Think Tank"
        navItem5="Blogs"
        routeItem1="/home"
        routeItem2="/home/#aboutus"
        routeItem3="/teams"
        routeItem4="/home/#thinktank"
        routeItem5="/blogs"
        textColor="white"
        s
      />

      <div className="ContentWrapper">
        <div className="ContentWrapper__hero">
          <h1 className="ContentWrapper__hero__subTitle">Endure the</h1>
          <h1 className="ContentWrapper__hero__title">Ragnarok</h1>
          <div className="ContentWrapper__hero__desc">
            E-Cell Shiv Nadar University strives to provide a platform for
            students and faculty to create, innovate, incubate and realise their
            entrepreneurial dreams
          </div>
          <button className="ContentWrapper__hero__button">
            <a
              href="https://snubreeze.live/events/technical/ragnarocked"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register!
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
