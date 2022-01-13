import "../LandingPage/LandingPage.scss";

import Header from "../../components/Header/Header";

import LandingSectionTexts from "../../components/LandingSectionTexts/LandingSectionTexts";
import Session1Illustration from "../../Assets/Illustration/Session-1-illustration.svg";
import Session2Illustration from "../../Assets/Illustration/Session-2-illustration(to be updated).svg";
import HeroSection from "./Components/HeroSection/HeroSection";
import AboutUsSection from "./Components/AboutUsSection/AboutUsSection";
import ThinkTankSection from "./Components/ThinkTankSection/ThinkTankSection";
import Session from "./Components/Session/Session";
import SponsorSection from "./Components/SponsorSection/SponsorSection";
import FooterSection from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import AnimationRender from "../../components/AnimationRender/AnimationRender";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function LandingPage() {
  // AOS.init({
  //   offset: 200,
  //   duration: 800,
  //   easing: "ease-in-back",
  //   delay: 60,

  // });

  // useEffect(() => {
  //   AOS.refresh();
  // });

  const sections = [
    <AboutUsSection />,
    <ThinkTankSection />,
    <Session className="SessionWrapper__content--first">
      <LandingSectionTexts
        classifier="Think Tank Session # 1"
        title="E-Cell SNU’s USP"
        content1="It takes us through multiple modules ranging from all aspects of entrepreneurship where the members contribute to the pool through interactive and lively sessions."
      />
      <img
        alt="session"
        className="SessionWrapper__content-container__illustration"
        src={Session1Illustration}
      ></img>
    </Session>,
    <Session className="SessionWrapper__content--second">
      <img
        alt="session"
        className="SessionWrapper__content-container__illustration"
        src={Session2Illustration}
      ></img>
      <LandingSectionTexts
        classifier="Think Tank Session # 2"
        title="Business Model of Amazon"
        content1=" We dissected the structure of the company through a business canvas model. Most of us barely know the specifics that go into running a company like Customer Relationships, Market Analysis, Marketing, Management, Products and much more"
      />
    </Session>,
    <SponsorSection />,
  ];

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
        routeItem5="/blog/archive"
        routeItem6="/blogs"
        routeItem7="/events"
      />

      <main>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <HeroSection />
        </motion.div>

        {sections.map((section, index) => (
          <AnimationRender key={index}>{section}</AnimationRender>
        ))}
      </main>
        <FooterSection />
    </section>
  );
}
