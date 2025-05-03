import React from "react";
import SideBarNavItem from "./SideBarNavItem";
import {
  faHouse,
  faUser,
  faBarsStaggered,
  faRobot,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  return (
    <div className="bg-[#23246f] w-[20%] text-white p-6">
      <div className="mb-5 pl-4">
        <h1 className="text-3xl font-semibold">Quiz party</h1>
      </div>
      <div>
        <SideBarNavItem
          title="Dashboard"
          redirectUrl="/dashboard"
          icon={faHouse}
        />
        <SideBarNavItem
          title="My quizzes"
          redirectUrl="/dashboard/my-quizzes"
          icon={faBarsStaggered}
        />
        <SideBarNavItem
          title="Profile"
          redirectUrl="/dashboard/profile"
          icon={faUser}
        />
        <SideBarNavItem
          title="Automation tools"
          redirectUrl="/dashboard/automation-tools"
          icon={faRobot}
        />
        <SideBarNavItem
          title="Settings"
          redirectUrl="/dashboard/profile/settings"
          icon={faGear}
        />
      </div>
    </div>
  );
}

export default SideBar;
