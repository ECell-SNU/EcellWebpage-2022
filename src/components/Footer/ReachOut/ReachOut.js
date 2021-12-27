import logoECell from "../../../Assets/icons/ecell-bw.svg";
import arrow from "../../../Assets/icons/arrow.svg";
import "./ReachOut.scss";

export default function ReachOut() {
  return (
    <div className="ReachOutContainer">
      <div className="ReachOutContainer__heading">
        <img className="ReachOutContainer__heading__logo" src={logoECell}></img>
        <h3 className="ReachOutContainer__heading__text">
          Reach out to us today!
        </h3>
      </div>
      <form className="ReachOutContainer__form">
        <input type="text" placeholder="Send a message..." />
        <a href="mailto:ecellsnu@snu.edu.in">&#8594;</a>
      </form>
      <hr></hr>
      <p>© 2022 E-Cell Shiv Nadar University, Noida, All Rights Reserved.</p>
    </div>
  );
}
