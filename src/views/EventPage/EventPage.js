import "./EventPage.scss";
import Header from "../../components/Header/Header";
import { motion } from "framer-motion";
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
    </div>
  );
}
