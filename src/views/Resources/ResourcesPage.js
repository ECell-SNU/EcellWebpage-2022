import "./ResourcesPage.scss";
import { useState } from "react";
export default function Resources() {
  const [currentTab, setCurrentTab] = useState(null);
  return (
    <div className="ResourcesPageWrapper">
      <div className="ResourcesPageWrapper__Tab">
        <button className="ResourcesPageWrapper__Tab__Btn1">OurEvent</button>
        <button className="ResourcesPageWrapper__Tab__Btn1">
          The Companies
        </button>
        <button className="ResourcesPageWrapper__Tab__Btn1">The Heroes</button>
      </div>
    </div>
  );
}
