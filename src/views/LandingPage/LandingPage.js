import "../LandingPage/LandingPage.scss";

import Header from "../../components/Header/Header";

import LandingSectionTexts from "../../components/LandingSectionTexts/LandingSectionTexts";
import Session1Illustration from "../../Assets/Illustration/Session-1-illustration.svg";
import Session2Illustration from "../../Assets/Illustration/Session-2-illustration(to be updated).svg";
import HeroSection from "./Components/HeroSection/HeroSection";
import AboutUsSection from "./Components/AboutUsSection/AboutUsSection";
import ThinkTankSection from "./Components/ThinkTankSection/ThinkTankSection";
import Session from "./Components/Session/Session";

export default function LandingPage() {
  return (
    <section className="LandingPageWrapper">
      <Header
        navItem1="Home"
        navItem2="About Us"
        navItem3="Team"
        navItem4="Think Tank"
        navItem6="Blogs"
        navItem7="Events"
        routeItem1="/home"
        routeItem3="/teams"
      />

      <main>
        <HeroSection />

        <AboutUsSection />

        <ThinkTankSection />

        <Session>
          <LandingSectionTexts
            classifier="Think Tank Session # 1"
            title="Ecell SNU’s USP"
            content1="It takes us through multiple modules ranging from all aspects of entrepreneurship where the members contribute to the pool through interactive and lively sessions."
          />
          <img
            alt="session"
            className="SessionWrapper__content-container__illustration"
            src={Session1Illustration}
          ></img>
        </Session>

        <Session>
          <img
            alt="session"
            className="SessionWrapper__content-container__illustration"
            src={Session2Illustration}
          ></img>
          <LandingSectionTexts
            classifier="Think Tank Session # 2"
            title="Second Title"
            content1="Sit amet volutpat consequat mauris nunc congue nisi vitae. Elit eget gravida cum sociis natoque penatibus et magnis dis. Turpis egestas maecenas  convallis posuere morbi leo urna molestie. "
          />
        </Session>
      </main>
    </section>
  );
}
