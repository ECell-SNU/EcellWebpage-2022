import "./TeamPage.scss";
import krishSec from "../../Assets/image/krshnSec.jpeg";
import vernAsec from "../../Assets/image/verAsec.jpeg";
import aarAsec from "../../Assets/image/aarAsec.jpeg";
import abhaTrea from "../../Assets/image/abhaTreas.jpeg";
import shauFc from "../../Assets/image/shaurFc.jpg";

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

      <main>
        <div className="TeamPageHeading">The Core</div>
        <div className="TeamPageWrapper__grid">
          <div className="TeamPageWrapper__grid__members">
            <img className="TeamPageWrapper__grid__members__Image" src={krishSec} alt="Sec"></img>
            <div className="TeamPageWrapper__grid__members__Name">Krishna Madhur</div>
            <h4 className="TeamPageWrapper__grid__members__Pos">Seceratry</h4>
          </div>

          <div className="TeamPageWrapper__grid__members">
            <img className="TeamPageWrapper__grid__members__Image" src={vernAsec} alt="Sec"></img>
            <div className="TeamPageWrapper__grid__members__Name">Vernika Samadhiya</div>
            <h4 className="TeamPageWrapper__grid__members__Pos">A.Sec</h4>
          </div>

          <div className="TeamPageWrapper__grid__members">
            <img className="TeamPageWrapper__grid__members__Image" src={aarAsec} alt="Sec"></img>
            <div className="TeamPageWrapper__grid__members__Name">Aarushi dhir</div>
            <h4 className="TeamPageWrapper__grid__members__Pos">A.Sec</h4>
          </div>

          <div className="TeamPageWrapper__grid__members">
            <img className="TeamPageWrapper__grid__members__Image" src={abhaTrea} alt="Sec"></img>
            <div className="TeamPageWrapper__grid__members__Name">Abharika Mohanty</div>
            <h4 className="TeamPageWrapper__grid__members__Pos">Treasurer</h4>
          </div>

          <div className="TeamPageWrapper__grid__members">
            <img className="TeamPageWrapper__grid__members__Image" src={shauFc} alt="Sec"></img>
            <div className="TeamPageWrapper__grid__members__Name">Shaurya Vaid</div>
            <h4 className="TeamPageWrapper__grid__members__Pos">Freshman Co.</h4>
          </div>
        </div>
      </main>
      
    </div>
  );
}
