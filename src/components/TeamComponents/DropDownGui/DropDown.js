import { motion } from "framer-motion";
import React from "react";
import StudentData from "../../../DataFiles/Members.json";

import "../DropDownGui/DropDown.scss"

export default function DropDown() {
  return (

  <div className="membersContainer">
       <button className="membersContainer__yearTitle">
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
