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
        routeItem1="/home"
        routeItem2="/home/#aboutus"
        routeItem3="/teams"
      />

      <div className="ContentWrapper">
        <div className="ContentWrapper__hero">
          <h1 className="ContentWrapper__hero__subTitle">ENDURE THE</h1>
          <h1 className="ContentWrapper__hero__title">RAGNAROK</h1>
          {/* <div className="ContentWrapper__hero__desc">
            E-Cell Shiv Nadar University strives to provide a platform for
            students and faculty to create, innovate, incubate and realise their
            entrepreneurial dreams
          </div> */}
        </div>
      </div>
      <a
        href="https://snubreeze.live/events/technical/ragnarocked"
        className="ContentWrapper__RegBtn"
      >
        Register Now
      </a>
    </div>
  );
}
