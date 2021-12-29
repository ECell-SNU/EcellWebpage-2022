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
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-hook-inview";
import { useEffect } from "react";

export default function LandingPage() {

  const  [ref__ATS, inView__ATS] = useInView();
  const  [ref__TTS, inView__TTS] = useInView();
  const  [ref__SS1, inView__SS1] = useInView();
  const  [ref__SS2, inView__SS2] = useInView();

  const animationTrigger__ATS = useAnimation();
  const animationTrigger__TTS = useAnimation();
  const animationTrigger__SS1 = useAnimation();
  const animationTrigger__SS2 = useAnimation();

  useEffect(() => {
    if(inView__ATS){
      animationTrigger__ATS.start({
        opacity : 1,
        y : 0,
        transition : {
          delay : 0.3 ,duration : 0.6
        }
      })
    }

    if(inView__TTS){
      animationTrigger__TTS.start({
        opacity : 1,
        y : 0,
        transition : {
          delay : 0.3 ,duration : 0.6
        }
      })
    }

    if(inView__SS1){
      animationTrigger__SS1.start({
        opacity : 1,
        y : 0,
        transition : {
          delay : 0.3 ,duration : 0.6
        }
      })
    }

    if(inView__SS2){
      animationTrigger__SS2.start({
        opacity : 1,
        y : 0,
        transition : {
          delay : 0.3 ,duration : 0.6
        }
      })
    }


    if(!inView__ATS){
      animationTrigger__ATS.start({
        opacity : 0,
        y : 10
      })
    }

    if(!inView__TTS){
      animationTrigger__TTS.start({
        opacity : 0,
        y : 10
      })
    }

    if(!inView__SS1){
      animationTrigger__SS1.start({
        opacity : 0,
        y : 10
      })
    }

    if(!inView__SS2){
      animationTrigger__SS2.start({
        opacity : 0,
        y : 10
      })
    }
  }, [inView__ATS], [inView__TTS], [inView__SS1], [inView__SS2]);

  return (
    <section className="LandingPageWrapper">
      <motion.div
      initial={{opacity : 0, y: -10}}
      animate={{opacity : 1, y: 0}}
      transition={{type : "spring", stiffness : 120 ,delay : 0.6 ,duration : 1.2}}>
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
      </motion.div>

      <main>
        <motion.div 
        initial={{opacity : 0, y: -10}}
        animate={{opacity : 1, y: 0}}
        transition={{delay : 0.1 ,duration : 0.6}}
        >
        <HeroSection />
        </motion.div>

        <motion.div 
        animate={animationTrigger__ATS}
        ref={ref__ATS}
        >
        <AboutUsSection />
        </motion.div>

        
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
        <SponsorSection />
      </main>
    </section>
  );
}
