import "./TeamPage.scss";
import krishSec from "../../Assets/image/krshnSec.jpeg";
import vernAsec from "../../Assets/image/verAsec.jpeg";
import aarAsec from "../../Assets/image/aarAsec.jpeg";
import abhaTrea from "../../Assets/image/abhaTreas.jpeg";
import shauFc from "../../Assets/image/shaurFc.jpg";
// import sample1 from "../../Assets/image/sampleImages/sample1.jpg";
import instagram from "../../Assets/icons/logo-instagram.svg";
import twitter from "../../Assets/icons/logo-twitter.svg";
import facebook from "../../Assets/icons/logo-facebook.svg";
import AgaashEngagement from "../../Assets/image/teamLeads/AgaashEngagement.jpg";
import AnanyaContent from "../../Assets/image/teamLeads/AnanyaContent.jpg";
import IshitaPR from "../../Assets/image/teamLeads/IshitaPR.png";
import NirmitDesVid from "../../Assets/image/teamLeads/NirmitDesVid.jpg";
import PalakDesVid from "../../Assets/image/teamLeads/PalakDesVid.jpeg";
import SakshamMarketing from "../../Assets/image/teamLeads/SakshamMarketing.jpg";
import SmritiEngagement from "../../Assets/image/teamLeads/SmritiEngagement.jpg";
import PrathamWebDev from "../../Assets/image/teamLeads/Pratham.jpg";
import PrachiMarketing from "../../Assets/image/teamLeads/Prachi.jpg";
import LavanyaCotent from "../../Assets/image/teamLeads/Lavanya.jpg";
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
                  href="https://www.instagram.com/ecellsnu/?utm_medium=copy_link"
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
              MemberName={"Krishna Madhur"}
              Memberposition={"Secretary"}
              imageSrc={krishSec}
              imageSrcAlt={"Sec"}
            />

            <TeamMember
              MemberName={"Vernika Samadhiya"}
              Memberposition={"Associate Secretary"}
              imageSrc={vernAsec}
              imageSrcAlt={"ASec"}
            />

            <TeamMember
              MemberName={"Aarushi Dhir"}
              Memberposition={"Associate Secretary"}
              imageSrc={aarAsec}
              imageSrcAlt={"ASec"}
            />
            <TeamMember
              MemberName={"Abharika Mohanty"}
              Memberposition={"Treasurer"}
              imageSrc={abhaTrea}
              imageSrcAlt={"Trea"}
            />

            <TeamMember
              MemberName={"Shaurya Vaid"}
              Memberposition={"Freshman Co-ordinator"}
              imageSrc={shauFc}
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
              MemberName={"Ananya Panda"}
              Memberposition={"Content"}
              imageSrc={AnanyaContent}
              imageSrcAlt={"ContentLead1"}
            />

            <TeamMember
              MemberName={"Nirmit Jindal"}
              Memberposition={"Design & Videography"}
              imageSrc={NirmitDesVid}
              imageSrcAlt={"DesVidLead1"}
            />

            <TeamMember
              MemberName={"Agaash S.B."}
              Memberposition={"Engagement"}
              imageSrc={AgaashEngagement}
              imageSrcAlt={"EngLead1"}
            />

            <TeamMember
              MemberName={"Lavanya Kaushik"}
              Memberposition={"Content"}
              imageSrc={LavanyaCotent}
              imageSrcAlt={"ContentLead2"}
            />

            <TeamMember
              MemberName={"Palak Jain"}
              Memberposition={"Design & Videography"}
              imageSrc={PalakDesVid}
              imageSrcAlt={"DesVidLead2"}
            />

            <TeamMember
              MemberName={"Smriti Vohra"}
              Memberposition={"Engagement"}
              imageSrc={SmritiEngagement}
              imageSrcAlt={"EngLead2"}
            />

            <TeamMember
              MemberName={"Saksham Premi"}
              Memberposition={"Marketing"}
              imageSrc={SakshamMarketing}
              imageSrcAlt={"MktLead1"}
            />

            <TeamMember
              MemberName={"Ishita Satyam"}
              Memberposition={"PR"}
              imageSrc={IshitaPR}
              imageSrcAlt={"PrLead1"}
            />

            <TeamMember
              MemberName={"Pratham Aggarwal"}
              Memberposition={"Web Development"}
              imageSrc={PrathamWebDev}
              imageSrcAlt={"WdLead1"}
            />
            <TeamMember
              MemberName={"Prachi Tiwari"}
              Memberposition={"Marketing"}
              imageSrc={PrachiMarketing}
              imageSrcAlt={"MktLead2"}
            />

            <TeamMember
              MemberName={"Aryaman Gupta"}
              Memberposition={"PR"}
              imageSrc={AryamanPr}
              imageSrcAlt={"PrLead2"}
            />

            <TeamMember
              MemberName={"Akshat Sabavat"}
              Memberposition={"Web Development"}
              imageSrc={SabavatWebDev2}
              imageSrcAlt={"WdLead2"}
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
