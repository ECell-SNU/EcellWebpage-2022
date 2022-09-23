import "./TeamPage.scss";
import revanthTreasurer from "../../Assets/image/teamLeads/revanth.jpeg";
import santhosh from "../../Assets/image/teamLeads/santhosh.png";
import prabhavFC from "../../Assets/image/prabhav.jpeg";
import siddhiEng from "../../Assets/image/teamLeads/siddhiSingh.jpg";
import devanshMk from "../../Assets/image/teamLeads/devansh.jpg";
import anya from "../../Assets/image/teamLeads/anya.png";
import sakshi from "../../Assets/image/teamLeads/sakshi.png";
import instagram from "../../Assets/icons/logo-instagram.svg";
import twitter from "../../Assets/icons/logo-twitter.svg";
import facebook from "../../Assets/icons/logo-facebook.svg";
import PalakDesVid from "../../Assets/image/teamLeads/PalakDesVid.jpeg";
import SmritiEngagement from "../../Assets/image/teamLeads/SmritiEngagement.jpg";
import PrachiMarketing from "../../Assets/image/teamLeads/Prachi.jpg";
import AryamanPr from "../../Assets/image/teamLeads/Aryaman.jpg";
// import SabavatWebDev from "../../Assets/image/teamLeads/Sabavat.jpeg"
import SabavatWebDev2 from "../../Assets/image/teamLeads/Sabavat2.jpeg";

import TeamMember from "../../components/TeamComponents/TeamMember";
import DropDown from "../../components/TeamComponents/DropDownGui/DropDown";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-hook-inview";
import { useEffect } from "react";

export default function TeamPage() {
  const [ref, inView] = useInView();
  const animationTrigger = useAnimation();

  useEffect(() => {
    if (inView) {
      animationTrigger.start({
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.1,
          duration: 0.3,
        },
      });
    }

    if (!inView) {
      animationTrigger.start({
        opacity: 0,
        y: 10,
      });
    }
  }, [animationTrigger, inView]);

  return (
    <div className="TeamPageWrapper">
      <main>
        <header>
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              delay: 0.6,
              duration: 1.2,
            }}
            className="TeamPageNavbar"
          >
            <a href="/home" className="TeamPageNavbar__button">
              &larr; &nbsp; &nbsp;Go Back
            </a>
            <a href="/home" className="TeamPageNavbar__responsive">
              &larr;
            </a>
            <ul className="TeamPageNavbar__social-media">
              <li>
                <a
                  href="https://www.instagram.com/ecellsnioe/"
                  className="TeamPageNavbar__social-media__icon"
                >
                  <img src={instagram} alt="instagram logo" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/ecellsnu?t=BDaPBAN7cuAqcLAJnpP-Uw&s=09"
                  className="TeamPageNavbar__social-media__icon"
                >
                  <img src={twitter} alt="twitter logo" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/ecellsnu/"
                  className="TeamPageNavbar__social-media__icon"
                >
                  <img src={facebook} alt="facebook logo" />
                </a>
              </li>
            </ul>
          </motion.nav>
        </header>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="SectionWrapper"
        >
          <div className="TeamPageHeading">The Core</div>
          <motion.div className="TeamPageWrapper__grid1">
            <TeamMember
              MemberName={"Akshat Sabavat"}
              Memberposition={"Secretary"}
              imageSrc={SabavatWebDev2}
              imageSrcAlt={"Sec"}
            />

            <TeamMember
              MemberName={"Prachi Tiwari"}
              Memberposition={"Associate Secretary"}
              imageSrc={PrachiMarketing}
              imageSrcAlt={"ASec"}
            />

            <TeamMember
              MemberName={"Aryaman Gupta"}
              Memberposition={"Associate Secretary"}
              imageSrc={AryamanPr}
              imageSrcAlt={"ASec"}
            />
            <TeamMember
              MemberName={"Revanth"}
              Memberposition={"Treasurer"}
              imageSrc={revanthTreasurer}
              imageSrcAlt={"Trea"}
            />

            <TeamMember
              MemberName={"Prabhav Pandey"}
              Memberposition={"Freshman Co-ordinator"}
              imageSrc={prabhavFC}
              imageSrcAlt={"Fc"}
            />
          </motion.div>
        </motion.div>

        <motion.section
          animate={animationTrigger}
          ref={ref}
          className=" SectionWrapper__leads"
        >
          <div className="TeamPageHeading leadsTitle">Team Leads</div>
          <div className="TeamPageWrapper__grid1">

            <TeamMember
              MemberName={"Siddhi Singh"}
              Memberposition={"Engagement Lead"}
              imageSrc={siddhiEng}
              imageSrcAlt={"EngLead1"}
            />

            <TeamMember
              MemberName={"Devansh Kapoor"}
              Memberposition={"Marketing Lead"}
              imageSrc={devanshMk}
              imageSrcAlt={"ContentLead2"}
            />
            <TeamMember
              MemberName={"Smriti Vohra"}
              Memberposition={"Marketing Lead"}
              imageSrc={SmritiEngagement}
              imageSrcAlt={"EngLead2"}
            />

            <TeamMember
              MemberName={"AB Santhosh"}
              Memberposition={"Web Development Lead"}
              imageSrc={santhosh}
              imageSrcAlt={"WdLead1"}
            />

            <TeamMember
              MemberName={"Palak Jain"}
              Memberposition={"Design Lead"}
              imageSrc={PalakDesVid}
              imageSrcAlt={"DesVidLead2"}
            />

            <TeamMember
              MemberName={"Anya Kalra"}
              Memberposition={"Decor Lead"}
              imageSrc={anya}
              imageSrcAlt={"decor"}
            />

            <TeamMember
              MemberName={"Sakshi Jaiswal"}
              Memberposition={"PR Lead"}
              imageSrc={sakshi}
              imageSrcAlt={"PrLead2"}
            />
          </div>
        </motion.section>

        <section className="SectionWrapper__members">
          <h1 className="TeamPageHeading">Other Members</h1>
          <DropDown year="2025" />
          <DropDown year="2024" />
          <DropDown year="2023" />
          <DropDown year="2022" />
        </section>
      </main>
    </div>
  );
}
