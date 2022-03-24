import { useState } from "react";
import "./ResourcesPage.scss";
export default function Resources() {
  const [currentTab, setCurrentTab] = useState(1);
  const StateManage = function (TabValue) {
    setCurrentTab(TabValue);
    console.log(currentTab);
  };
  return (
    <div className="ResourcesPageWrapper">
      <div className="ResourcesPageWrapper__ContentWrapper">
        <div className="ResourcesPageWrapper__Tab">
          <button
            className={
              currentTab === 1
                ? "ResourcesPageWrapper__Tab__Btn1"
                : "ResourcesPageWrapper__Tab__Btn1 Unselected"
            }
            onClick={() => StateManage(1)}
          >
            Our Event
          </button>
          <button
            className={
              currentTab === 2
                ? "ResourcesPageWrapper__Tab__Btn1"
                : "ResourcesPageWrapper__Tab__Btn1 Unselected"
            }
            onClick={() => StateManage(2)}
          >
            The Companies
          </button>
          <button
            className={
              currentTab === 3
                ? "ResourcesPageWrapper__Tab__Btn1"
                : "ResourcesPageWrapper__Tab__Btn1 Unselected"
            }
            onClick={() => StateManage(3)}
          >
            The Heroes
          </button>
        </div>
        <div className="ResourcesPageWrapper__TabContentContainer">
          <div
            className={
              currentTab === 1
                ? "ResourcesPageWrapper__TabContentContainer__TabContent"
                : "ResourcesPageWrapper__TabContentContainer__TabContent HideContent"
            }
          >
            <h2 className="TabHeader">GAMEPLAY</h2>
            <div className="RecourceContent">
              <p className="ResourceContent__title">The Companies </p>
              <p className="ResourceContent__desc">
                so as to allow the players of the game to develop a
                cognitivenderstanding of the companies from both a fandom
                andindustry pov. this will let us create awareness and
                transparencymitigating any chances of confusion based on an
                inability tounderstand what the game situations
                insinuate/demand.
              </p>
            </div>
            <div className="RecourceContent">
              <p className="ResourceContent__title">The Heroes</p>
              <p className="ResourceContent__desc">
                so as to allow the players of the game to develop a
                cognitivenderstanding of the companies from both a fandom
                andindustry pov. this will let us create awareness and
                transparencymitigating any chances of confusion based on an
                inability tounderstand what the game situations
                insinuate/demand.
              </p>
            </div>
          </div>
          <div
            className={
              currentTab === 2
                ? "ResourcesPageWrapper__TabContentContainer__TabContent"
                : "ResourcesPageWrapper__TabContentContainer__TabContent HideContent"
            }
          >
            <h2 className="TabHeader">THE COMPANIES</h2>
            <div className="RecourceContent">
              <p className="ResourceContent__title">Oscorp</p>
              <p className="ResourceContent__desc">
                Oscorp Industries is a multi-national corporation that was
                founded by the wealthy scientist Norman Osborn. The company
                typically deals with experimental science, military research and
                cross-species genetics. According to Forbes, it had an estimated
                sales of $3.1 billion, ranking it at number 23.
              </p>
            </div>
            <div className="RecourceContent">
              <p className="ResourceContent__title">Stark</p>
              <p className="ResourceContent__desc">
                Stark Industries is a multinational industrial company founded
                by Howard Stark in 1939. Tony Stark officially assumed the
                position of CEO after he turned twenty-one, the company
                flourished financially for nearly two decades sunder his
                control. According to Forbes 25's "Largest Fictional Companies"
                it had an estimated sales of $20.3 billion, ranking it at number
                16..
              </p>
            </div>
            <div className="RecourceContent">
              <p className="ResourceContent__title">Daily Bugle</p>
              <p className="ResourceContent__desc">
                The Daily Bugle (later DB!) is an American newspaper based in
                New York City. It operates from the Daily Bugle Building located
                on 39th Street and Second Avenue. It is one of the most read
                newspapers in the USA with J.Jonah Jameson as editor-in-chief.
                16..
              </p>
            </div>
            <div className="RecourceContent">
              <p className="ResourceContent__title">Nelson and Murdok</p>
              <p className="ResourceContent__desc">
                Nelson and Murdock is a law firm in New York City founded by
                Foggy Nelson and Matt Murdock. They were essential in taking
                down Wilson Fisk and defending Frank Castle after Karen Page was
                hired as the firm's office manager. After Wilson Fisk was
                released from prison and reincarnated in a new firm, Nelson,
                Murdock, and Page, the firm regrouped to stop him once more.
                16..
              </p>
            </div>
          </div>
          <div
            className={
              currentTab === 3
                ? "ResourcesPageWrapper__TabContentContainer__TabContent"
                : "ResourcesPageWrapper__TabContentContainer__TabContent HideContent"
            }
          >
            This is Heroes Content
          </div>
        </div>
      </div>
    </div>
  );
}
