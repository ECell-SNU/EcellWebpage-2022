import React, { useEffect, useState } from "react";
// import PropTypes from 'prop-types';
import "./Tab.scss";
import innovate from "../../Assets/icons/bulb.svg";
import create from "../../Assets/icons/create.svg";
import incubate from "../../Assets/icons/flask.svg";

function Tab() {
  const list = [
    {
      title: "Create",
      content: `We at E-Cell believe in the power of creativity, from think tanks about business models
      to organizing large scale events, E-Cell is at every step of the way to provide a platform for creative minded
      people and artistic liberty`,
      icon: create,
    },
    {
      title: "Innovate",
      content: `In a world of quick startups and hundreds of unicorns, E-Cell SNU is head first to proved an
      environment for its members to innovate, bring their vision to reality and muster an entrepreneurial spirit`,
      icon: innovate,
    },
    {
      title: "Incubate",
      content: `E-Cell SNU is designed to accelerate the growth and success of the entrepreneurial minds of
      its members and everyone associated to it, we have an array of business support resources and services.`,
      icon: incubate,
    },
  ];
  const [activeTab, setActiveTab] = useState("Create");
  const [firstActive, setFirstActive] = useState(false);
  useEffect(() => {
    if (!firstActive) {
      var parentPos = document
        .querySelector(".TabWrapper__TabButtonContainer")
        .getBoundingClientRect();
      var childPos = document
        .getElementById(`TabButton-${0}`)
        .getBoundingClientRect();
      var indicator = document.querySelector(
        ".TabWrapper__TabButtonContainer--indicator"
      );

      indicator.style.left = `${childPos.left - parentPos.left}px`;
    }
  });

  return (
    <div className="TabWrapper">
      <div className="TabWrapper__TabButtonContainer">
        <div className="TabWrapper__TabButtonContainer--indicator" />
        {list.map((item, index) => (
          <button
            id={`TabButton-${index}`}
            key={index}
            onClick={() => {
              setFirstActive(true);
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
        {list.map((item, index) => {
          return (
            <>
              {activeTab === item.title && (
                <img alt="tabIndicator" src={item.icon} />
              )}
              {activeTab === item.title && (
                <div
                  key={index}
                  className="TabWrapper__ContentContainer--TabContent"
                >
                  {item.content}
                </div>
              )}
            </>
          );
        })}
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
