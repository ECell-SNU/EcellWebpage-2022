import "./ResourcesPage.scss";
import { useState } from "react";
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
            This is OurEvent Content
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
