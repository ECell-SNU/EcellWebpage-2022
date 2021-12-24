import "./TeamPage.scss";
import krishSec from "../../Assets/image/krshnSec.jpeg";
import vernAsec from "../../Assets/image/verAsec.jpeg";
import aarAsec from "../../Assets/image/aarAsec.jpeg";
import abhaTrea from "../../Assets/image/abhaTreas.jpeg";
import shauFc from "../../Assets/image/shaurFc.jpg";
import sample1 from "../../Assets/image/sampleImages/sample1.jpg";
import TeamMember from "../../components/TeamComponents/TeamMember";
import TeamLeads from "../../DataFiles/TeamLeads.json";
import instagram from "../../Assets/icons/logo-instagram.svg"
import twitter from "../../Assets/icons/logo-twitter.svg";
import facebook from "../../Assets/icons/logo-facebook.svg"
export default function TeamPage() {
  return (
    <div className="TeamPageWrapper">
      <header>
        <nav className="TeamPageNavbar">
          <a href="/blogs" className="TeamPageNavbar__button">
            &larr; &nbsp; &nbsp;Go Back
          </a>
          <ul className="TeamPageNavbar__social-media">
            <li>
              <a href="https://www.instagram.com/ecellsnu/?utm_medium=copy_link" className="TeamPageNavbar__social-media__icon"><img src={instagram}></img></a>
            </li>
            <li>
              <a href="https://twitter.com/ecellsnu?t=BDaPBAN7cuAqcLAJnpP-Uw&s=09" className="TeamPageNavbar__social-media__icon"><img src={twitter}></img></a>
            </li>
            <li>
              <a href="https://www.facebook.com/ecellsnu/" className="TeamPageNavbar__social-media__icon"><img src={facebook}></img></a>
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
          imageSrcAlt={"Sec"}/>

         <TeamMember 
          MemberName={"Vernika Samadhiya"}
          Memberposition={"A.Sec"}
          imageSrc={vernAsec}
          imageSrcAlt={"ASec"}/>

         <TeamMember 
          MemberName={"Aarushi dhir"}
          Memberposition={"A.sec"}
          imageSrc={aarAsec}
          imageSrcAlt={"ASec"}/>
        </div>
        <div className="TeamPageWrapper__grid2">       
         <TeamMember 
          MemberName={"Abharika Mohanty"}
          Memberposition={"Treasurer"}
          imageSrc={abhaTrea}
          imageSrcAlt={"Trea"}/>

         <TeamMember 
          MemberName={"Shaurya Vaid"}
          Memberposition={"Freshman Co."}
          imageSrc={shauFc}
          imageSrcAlt={"Fc"}/>
        </div>
      </div>
      <div className="SectionWrapper__leads">
        <div className="TeamPageHeading leadsTitle">Team Leads</div>
        <div className="TeamPageWrapper__grid1">
        <TeamMember 
          MemberName={"Spiderman"}
          Memberposition={"No way Home"}
          imageSrc={sample1}
          imageSrcAlt={"Fc"}/>

<TeamMember 
          MemberName={"Spiderman"}
          Memberposition={"No way Home"}
          imageSrc={sample1}
          imageSrcAlt={"Fc"}/>

<TeamMember 
          MemberName={"Spiderman"}
          Memberposition={"No way Home"}
          imageSrc={sample1}
          imageSrcAlt={"Fc"}/>

<TeamMember 
          MemberName={"Spiderman"}
          Memberposition={"No way Home"}
          imageSrc={sample1}
          imageSrcAlt={"Fc"}/>

<TeamMember 
          MemberName={"Spiderman"}
          Memberposition={"No way Home"}
          imageSrc={sample1}
          imageSrcAlt={"Fc"}/>

<TeamMember 
          MemberName={"Spiderman"}
          Memberposition={"No way Home"}
          imageSrc={sample1}
          imageSrcAlt={"Fc"}/>
          
          
        </div>
    </div>
    </div>
  );
}
