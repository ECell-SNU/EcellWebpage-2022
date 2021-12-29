import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { useState } from "react";
import StudentData from "../../../DataFiles/Members.json";

import "../DropDownGui/DropDown.scss"

const containerVariants = {
    initial : {
        opacity: 0,
        height : 0
    },
    animate : {
        opacity: 1,
        height: "auto",

        transition: {
            type : "spring",
            stiffness : 55
        }
    }
}

export default function DropDown() {

    const [containerState, setcontainerState] = useState(false);

    function OpenSaysme(){
        setcontainerState(!containerState);
        console.log(containerState);
    }
  return (

  <div className="membersContainer">
       <button onClick={() => {
           OpenSaysme();
       }} className="membersContainer__yearTitle">
          Class of 2022
      </button>
      <AnimatePresence>
      {
          containerState && (
            <motion.div
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: "auto"}}
            transition={{ type: "spring" ,stiffness: 50}}
            exit={{opacity: 0, height: 0}} 
            className="membersContainer__studentNames">
                  <p>Rani Vani</p>
                  <p>Rani Vani</p>
                  <p>Rani Vani</p>
                  <p>Rani Vani</p>
                  <p>Rani Vani</p>
                  <p>Rani Vani</p>
                  <p>Rani Vani</p>
                  <p>Rani Vani</p>
                  <p>Rani Vani</p>
                  <p>Rani Vani</p>
            </motion.div>
          )
      }
      </AnimatePresence>
   </div>
  
  );

}
