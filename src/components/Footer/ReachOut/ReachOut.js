import logoECell from "../../../Assets/icons/ecell-bw.svg";
import "./ReachOut.scss";

export default function ReachOut() {
  return (
    <div className="ReachOutContainer">
      <div className="ReachOutContainer__top">
        <div className="ReachOutContainer__left">
          <img
            className="ReachOutContainer__heading__logo"
            alt="eCell"
            src={logoECell}
          />
        </div>
        <div className="ReachOutContainer__heading">
          <h3 className="ReachOutContainer__heading__text">
            Reach out to us today!
          </h3>
          <form className="ReachOutContainer__form">
            <input type="text" placeholder="Send a message..." />
            <a href="mailto:ecellsnu@snu.edu.in">&#8594;</a>
          </form>
        </div>
      </div>
      <p>© 2022 E-Cell Shiv Nadar University, Noida, All Rights Reserved.</p>
    </div>
  );
}
