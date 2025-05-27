"use client";

import React from "react";
import SideBarNavItem from "./SideBarNavItem";
import {
  faHouse,
  faRobot,
  faGear,
  faListCheck,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSideBarStore } from "@/store/useSideBarStore";

function SideBar({ onlyIcon, width }: { onlyIcon: boolean; width?: boolean }) {
  const { handleToggleSideBar } = useSideBarStore();
  return (
    <div
      className={`bg-[#23246f] text-white py-4 px-2 h-screen`}
      style={{ width: width ? "200px" : undefined }}
    >
      <div
        onClick={handleToggleSideBar}
        className={`bg-[#373694] mb-3 p-4 rounded-md border-2 border-gray-400 cursor-pointer text-white font-medium flex justify-center items-center ${
          onlyIcon ? null : "w-[55.2px] h-[55.2px] "
        }`}
      >
        <div style={{ width: "20px", height: "20px" }}>
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "#ffffff", width: "100%", height: "100%" }}
          />
        </div>
      </div>
      <div>
        <SideBarNavItem
          title="Dashboard"
          redirectUrl="/dashboard"
          icon={faHouse}
          onlyIcon={onlyIcon}
        />
        <SideBarNavItem
          title="My quizzes"
          redirectUrl="/dashboard/my-quizzes"
          icon={faListCheck}
          onlyIcon={onlyIcon}
        />
        <SideBarNavItem
          title="Automation tools"
          redirectUrl="/dashboard/automation-tools"
          icon={faRobot}
          onlyIcon={onlyIcon}
        />
        <SideBarNavItem
          title="Settings"
          redirectUrl="/dashboard/settings"
          icon={faGear}
          onlyIcon={onlyIcon}
        />
      </div>
    </div>
  );
}

export default SideBar;
