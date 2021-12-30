import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { useState } from "react";
import StudentData from "../../../DataFiles/Members.json";

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

  function OpenSaysMe() {
    setContainerState(!containerState);
    console.log(containerState);
  }
  return (
    <div className="membersContainer">
      <div className="membersContainer__button">
        <button
          onClick={() => {
            OpenSaysMe();
          }}
          className="membersContainer__yearTitle"
        >
          Class of {props.year}
        </button>
        <img
          src="https://img.icons8.com/ios-glyphs/30/4a90e2/sort-down.png"
          height="14.4px"
          className="icon"
        />
      </div>
      <AnimatePresence>
        {containerState && (
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
