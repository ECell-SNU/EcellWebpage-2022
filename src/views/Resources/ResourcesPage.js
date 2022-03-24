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
                ? "ResourcesPageWrapper__TabContentContainer__TabOneContent"
                : "ResourcesPageWrapper__TabContentContainer__TabOneContent HideContent"
            }
          >
            <h2>Gameplay Design</h2>
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
              </p>
            </div>
          </div>
          <div
            className={
              currentTab === 2
                ? "ResourcesPageWrapper__TabContentContainer__TabTwoContent"
                : "ResourcesPageWrapper__TabContentContainer__TabTwoContent HideContent"
            }
          >
            This is Companies Content
          </div>
          <div
            className={
              currentTab === 3
                ? "ResourcesPageWrapper__TabContentContainer__TabThreeContent"
                : "ResourcesPageWrapper__TabContentContainer__TabThreeContent HideContent"
            }
          >
            This is Heroes Content
          </div>
        </div>
      </div>
    </div>
  );
}
