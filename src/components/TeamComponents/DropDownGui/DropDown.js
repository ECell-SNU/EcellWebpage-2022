import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import StudentData from "../../../DataFiles/Members.json";

import "../DropDownGui/DropDown.scss"

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
      <div className="membersContainer__studentNames">
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
      </div>
   </div>
  
  );

}
