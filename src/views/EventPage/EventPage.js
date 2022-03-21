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
        navItem5="Archive"
        routeItem1="/home"
        routeItem2="/home/#aboutus"
        routeItem3="/teams"
        routeItem4="/home/#thinktank"
        routeItem5="/blogs/archive"
      />

      <div className="EventPageWrapper__hero">
        <div className="EventPageWrapper__hero__title">Endure the Ragnarok</div>
        <div className="EventPageWrapper__hero__desc">
          E-Cell Shiv Nadar University strives to provide a platform for
          students and faculty to create, innovate, incubate and realise their
          entrepreneurial dreams
        </div>
        <button>Begin Game</button>
      </div>
    </div>
  );
}
