import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Header() {
  return (
    <div className="w-full">
      <div className="flex justify-end p-2 pr-4">
        <div className="bg-[#4f54db] w-10 h-10 flex items-center justify-center rounded-md">
          <FontAwesomeIcon icon={faBell} className="text-white text-xl" />
        </div>
      </div>
    </div>
  );
}

export default Header;
