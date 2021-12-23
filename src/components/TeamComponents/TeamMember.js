import "../TeamComponents/TeamMember.scss";
import memberIllustration from "../../Assets/Illustration/memberillustration.svg"
export default function TeamMember({imageSrc, imageSrcAlt, MemberName, Memberposition}){
    return <div className="memberContainer">
    <img
      className="memberContainer__Image"
      src={imageSrc}
      alt={imageSrcAlt}
    ></img>
    <div className="memberContainer__Name">
      {MemberName}
    </div>
    <h4 className="memberContainer__Pos">{Memberposition}</h4>
  </div>
}