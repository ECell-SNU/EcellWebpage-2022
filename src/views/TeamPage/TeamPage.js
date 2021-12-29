import "./TeamPage.scss";
import krishSec from "../../Assets/image/krshnSec.jpeg";
import vernAsec from "../../Assets/image/verAsec.jpeg";
import aarAsec from "../../Assets/image/aarAsec.jpeg";
import abhaTrea from "../../Assets/image/abhaTreas.jpeg";
import shauFc from "../../Assets/image/shaurFc.jpg";
import sample1 from "../../Assets/image/sampleImages/sample1.jpg";
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

import TeamMember from "../../components/TeamComponents/TeamMember";
import DropDown from "../../components/TeamComponents/DropDownGui/DropDown";


export default function TeamPage() {
  return (
    <div className="TeamPageWrapper">
      <header>
        <nav className="TeamPageNavbar">
          <a href="/home" className="TeamPageNavbar__button">
            &larr; &nbsp; &nbsp;Go Back
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
        </nav>
      </header>

      <div className="SectionWrapper">
        <div className="TeamPageHeading">The Core</div>
        <div className="TeamPageWrapper__grid1">
          <TeamMember
            MemberName={"Krishna Madhur"}
            Memberposition={"Seceratry"}
            imageSrc={krishSec}
            imageSrcAlt={"Sec"}
          />

          <TeamMember
            MemberName={"Vernika Samadhiya"}
            Memberposition={"A.Sec"}
            imageSrc={vernAsec}
            imageSrcAlt={"ASec"}
          />

          <TeamMember
            MemberName={"Aarushi dhir"}
            Memberposition={"A.sec"}
            imageSrc={aarAsec}
            imageSrcAlt={"ASec"}
          />
        </div>
        <div className="TeamPageWrapper__grid2">
          <TeamMember
            MemberName={"Abharika Mohanty"}
            Memberposition={"Treasurer"}
            imageSrc={abhaTrea}
            imageSrcAlt={"Trea"}
          />

          <TeamMember
            MemberName={"Shaurya Vaid"}
            Memberposition={"Freshman Co."}
            imageSrc={shauFc}
            imageSrcAlt={"Fc"}
          />
        </div>
      </div>
      <section className="SectionWrapper__leads">
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
            MemberName={"Spiderman"}
            Memberposition={"Content"}
            imageSrc={sample1}
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
        </div>

        <div className="TeamPageWrapper__grid1">
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
            MemberName={"Spiderman"}
            Memberposition={"Marketing"}
            imageSrc={sample1}
            imageSrcAlt={"MktLead2"}
          />

          <TeamMember
            MemberName={"Spiderman"}
            Memberposition={"PR"}
            imageSrc={sample1}
            imageSrcAlt={"PrLead2"}
          />

          <TeamMember
            MemberName={"Spiderman"}
            Memberposition={"Web Development"}
            imageSrc={sample1}
            imageSrcAlt={"WdLead2"}
          />
        </div>
      </section>
      
      <section className="SectionWrapper__members">
        <h1 className="TeamPageHeading">Other Members</h1>
        <DropDown/>
        <DropDown/>
        <DropDown/>
      </section>
    </div>
  );
}
