import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { useState } from "react";
import StudentData from "../../../DataFiles/Members.json";
import OpenIcon from "../../../Assets/icons/OpenIcon.svg";
import CloseIcon from "../../../Assets/icons/CloseIcon.svg";

import "../DropDownGui/DropDown.scss";

const containerVariants = {
  initial: {
    opacity: 0,
    height: 0,
  },
  animate: {
    opacity: 1,
    height: "auto",

    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
  },
};

export default function DropDown(props) {
  const [containerState, setContainerState] = useState(false);
  const [reverseState, setReverseState] = useState(true);

  function OpenSaysMe() {
    setContainerState(!containerState);
    console.log(containerState);
  }

  function OpenReverseSaysMe() {
    setReverseState(!reverseState);
  }
  return (
    <div className="membersContainer">
      <div className="membersContainer__button">
        <button
          onClick={() => {
            props.year === "2025" ? OpenReverseSaysMe() : OpenSaysMe();
          }}
          className="membersContainer__yearTitle"
        >
          Class of {props.year}
        </button>
        <img
          onClick={() => {
            props.year === "2025" ? OpenReverseSaysMe() : OpenSaysMe();
          }}
          alt="OpenIcon"
          className={
            props.year === "2025"
              ? reverseState === true
                ? "membersContainer__iconClose membersContainer__HideIcon"
                : "membersContainer__iconOpen"
              : containerState === true
              ? "membersContainer__iconOpen membersContainer__HideIcon"
              : " membersContainer__iconOpen"
          }
          src={OpenIcon}
        />
        <img
          onClick={() => {
            props.year === "2025" ? OpenReverseSaysMe() : OpenSaysMe();
          }}
          alt="CloseIcon"
          className={
            props.year === "2025"
              ? reverseState === true
                ? "membersContainer__iconClose"
                : "membersContainer__iconClose membersContainer__HideIcon"
              : containerState === true
              ? "membersContainer__iconClose"
              : " membersContainer__iconClose membersContainer__HideIcon"
          }
          src={CloseIcon}
        />
      </div>
      <AnimatePresence>
        {props.year === "2025"
          ? reverseState && (
              <motion.div
                variants={containerVariants}
                initial="initial"
                animate="animate"
                transition="transition"
                exit="exit"
                className="membersContainer__studentNames"
              >
                {StudentData.filter((data) => {
                  return data["year"] === props.year;
                }).map((student) => {
                  return <p>{student.name}</p>;
                })}
              </motion.div>
            )
          : containerState && (
              <motion.div
                variants={containerVariants}
                initial="initial"
                animate="animate"
                transition="transition"
                exit="exit"
                className="membersContainer__studentNames"
              >
                {StudentData.filter((data) => {
                  return data["year"] === props.year;
                }).map((student) => {
                  return <p>{student.name}</p>;
                })}
              </motion.div>
            )}
      </AnimatePresence>
    </div>
  );
}
