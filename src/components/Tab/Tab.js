import React, { useState } from "react";
// import PropTypes from 'prop-types';
import "./Tab.scss";

function Tab() {
  const list = [
    {
      title: "Create",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
  praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
  vel voluptatum?`,
    },
    {
      title: "Innovate",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
  praesentium incidunt quia aspernatur`,
    },
    {
      title: "Incubate",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
  praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
  vel voluptatum?`,
    },
  ];
  const [activeTab, setActiveTab] = useState("Create");
  return (
    <div className="TabWrapper">
      <div className="TabWrapper__TabButtonContainer">
        <div className="TabWrapper__TabButtonContainer--indicator" />
        {list.map((item, index) => (
          <button
            id={`TabButton-${index}`}
            key={index}
            onClick={() => {
              setActiveTab(item.title);
              var parentPos = document
                .querySelector(".TabWrapper__TabButtonContainer")
                .getBoundingClientRect();
              var childPos = document
                .getElementById(`TabButton-${index}`)
                .getBoundingClientRect();
              var indicator = document.querySelector(
                ".TabWrapper__TabButtonContainer--indicator"
              );

              indicator.style.left = `${childPos.left - parentPos.left}px`;
            }}
            className="TabWrapper__TabButtonContainer--TabButton"
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="TabWrapper__ContentContainer">
        {list.map((item, index) => (
          <div key={index} className="TabWrapper__ContentContainer--TabContent">
            {activeTab === item.title && item.content}
          </div>
        ))}
      </div>
    </div>
  );
}

Tab.propTypes = {
  // bla: PropTypes.string,
};

Tab.defaultProps = {
  // bla: 'test',
};

export default Tab;
