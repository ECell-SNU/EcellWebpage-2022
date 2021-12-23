import "./TeamPage.scss";
import krishSec from "../../Assets/image/krshnSec.jpeg";
import vernAsec from "../../Assets/image/verAsec.jpeg";
import aarAsec from "../../Assets/image/aarAsec.jpeg";
import abhaTrea from "../../Assets/image/abhaTreas.jpeg";
import shauFc from "../../Assets/image/shaurFc.jpg";
import sample1 from "../../Assets/image/sampleImages/sample1.jpg";
import TeamMember from "../../components/TeamComponents/TeamMember";
export default function TeamPage() {
  return (
    <div className="TeamPageWrapper">
      <header>
        <nav className="TeamPageNavbar">
          <a href="/blogs" className="TeamPageNavbar__button">
            &larr; &nbsp; &nbsp;Go Back
          </a>
        </nav>
      </header>

      <div className="SectionWrapper">
        <div className="TeamPageHeading">The Core</div>
        <div className="TeamPageWrapper__grid">
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
      <div className="SectionWrapper">
        <div className="TeamPageHeading">Team Leads</div>
        <div className="TeamPageWrapper__grid">
          <div className="TeamPageWrapper__grid__members">
            <img
              className="TeamPageWrapper__grid__members__Image"
              alt="profile"
              src={sample1}
            ></img>
            <div className="TeamPageWrapper__grid__members__Name">
              Pratham Agarwal
            </div>
            <h4 className="TeamPageWrapper__grid__members__Pos">
              Web Development
            </h4>
          </div>

          <div className="TeamPageWrapper__grid__members">
            <img
              className="TeamPageWrapper__grid__members__Image"
              alt="profile"
              src={sample1}
            ></img>
            <div className="TeamPageWrapper__grid__members__Name">
              Lavanya Kaushik
            </div>
            <h4 className="TeamPageWrapper__grid__members__Pos">Content</h4>
          </div>
          <div className="TeamPageWrapper__grid__members">
            <img
              className="TeamPageWrapper__grid__members__Image"
              alt="profile"
              src={sample1}
            ></img>
            <div className="TeamPageWrapper__grid__members__Name">
              Aryaman Gupta
            </div>
            <h4 className="TeamPageWrapper__grid__members__Pos">PR</h4>
          </div>
          <div className="TeamPageWrapper__grid__members">
            <img
              className="TeamPageWrapper__grid__members__Image"
              alt="profile"
              src={sample1}
            ></img>
            <div className="TeamPageWrapper__grid__members__Name">
              Akshat Sabavat
            </div>
            <h4 className="TeamPageWrapper__grid__members__Pos">
              Web Development
            </h4>
          </div>
          <div className="TeamPageWrapper__grid__members">
            <img
              className="TeamPageWrapper__grid__members__Image"
              alt="profile"
              src={sample1}
            ></img>
            <div className="TeamPageWrapper__grid__members__Name">
              Lavanya Kaushik
            </div>
            <h4 className="TeamPageWrapper__grid__members__Pos">Content</h4>
          </div>
          <div className="TeamPageWrapper__grid__members">
            <img
              className="TeamPageWrapper__grid__members__Image"
              alt="profile"
              src={sample1}
            ></img>
            <div className="TeamPageWrapper__grid__members__Name">
              Aryaman Gupta
            </div>
            <h4 className="TeamPageWrapper__grid__members__Pos">PR</h4>
          </div>
        </div>
        <div className="TeamPageWrapper__grid">
          <div className="TeamPageWrapper__grid__members">
            <img
              className="TeamPageWrapper__grid__members__Image"
              alt="profile"
              src={sample1}
            ></img>
            <div className="TeamPageWrapper__grid__members__Name">
              Nirmit Jindal
            </div>
            <h4 className="TeamPageWrapper__grid__members__Pos">Videography</h4>
          </div>
          <div className="TeamPageWrapper__grid__members">
            <img
              className="TeamPageWrapper__grid__members__Image"
              alt="profile"
              src={sample1}
            ></img>
            <div className="TeamPageWrapper__grid__members__Name">
              John Smith
            </div>
            <h4 className="TeamPageWrapper__grid__members__Pos">Sponsorship</h4>
          </div>
          <div className="TeamPageWrapper__grid__members">
            <img
              className="TeamPageWrapper__grid__members__Image"
              alt="profile"
              src={sample1}
            ></img>
            <div className="TeamPageWrapper__grid__members__Name">
              John Smith
            </div>
            <h4 className="TeamPageWrapper__grid__members__Pos">Marketing</h4>
          </div>
          <div className="TeamPageWrapper__grid__members">
            <img
              className="TeamPageWrapper__grid__members__Image"
              alt="profile"
              src={sample1}
            ></img>
            <div className="TeamPageWrapper__grid__members__Name">
              Nirmit Jindal
            </div>
            <h4 className="TeamPageWrapper__grid__members__Pos">Videography</h4>
          </div>
          <div className="TeamPageWrapper__grid__members">
            <img
              className="TeamPageWrapper__grid__members__Image"
              alt="profile"
              src={sample1}
            ></img>
            <div className="TeamPageWrapper__grid__members__Name">
              John Smith
            </div>
            <h4 className="TeamPageWrapper__grid__members__Pos">Sponsorship</h4>
          </div>
          <div className="TeamPageWrapper__grid__members">
            <img
              className="TeamPageWrapper__grid__members__Image"
              alt="profile"
              src={sample1}
            ></img>
            <div className="TeamPageWrapper__grid__members__Name">
              John Smith
            </div>
            <h4 className="TeamPageWrapper__grid__members__Pos">Marketing</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
