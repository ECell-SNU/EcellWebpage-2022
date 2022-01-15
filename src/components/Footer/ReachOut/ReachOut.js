import logoECell from "../../../Assets/icons/ecell-bw.svg";
import propTypes from "prop-types";
import "./ReachOut.scss";

export default function ReachOut({ children, className }) {
  return (
    <div className={`ReachOutContainer ${className}`}>
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
          <form
            className="ReachOutContainer__form"
            onSubmit={() => {
              //alert(document.getElementById("sub").value)
              var mailBody = document.getElementById("sub").value;
              window.open(
                "mailto:ecell@snu.edu.in?subject=Reach%20Out%20to%20E-Cell%20SNU&body=" +
                  mailBody
              );
            }}
          >
            <input type="text" id="sub" placeholder="Send a message..." />
            <a
              href="mailto:ecellsnu@snu.edu.in"
              onClick={() => {
                //alert(document.getElementById("sub").value)
                var mailBody = document.getElementById("sub").value;
                window.open(
                  "mailto:ecell@snu.edu.in?subject=Reach%20Out%20to%20E-Cell%20SNU&body=" +
                    mailBody
                );
              }}
            >
              &#8594;
            </a>
          </form>
        </div>
      </div>
      {children}
      <p className="CRIP">
        © 2022 E-Cell Shiv Nadar University, Noida, All Rights Reserved.
      </p>
    </div>
  );
}

ReachOut.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
};

ReachOut.defaultProps = {
  children: null,
  className: "",
};
