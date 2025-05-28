"use client";

import { useSideBarStore } from "@/store/useSideBarStore";
import { handleLogoutUser } from "@/utils/auth";
import { faBars, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import toast from "react-hot-toast";

function Header() {
  const { handleToggleSideBar } = useSideBarStore();

  const handleLogout = () => {
    const res = handleLogoutUser();
    toast.promise(res, {
      success: (data) => {
        console.log("Logout successful:", data);
        window.location.href = "/";
        return "Logout successful!";
      },
      error: (err) => {
        console.error("Logout failed:", err);
        return "Logout failed!";
      },
      loading: "Logging out...",
    });
  };
  return (
    <div className="w-full sticky top-0 bg-[#2e2c8d] flex items-center justify-between z-30 p-4 shadow-sm">
      <div className="flex justify-between items-center ml-5">
        <div
          className="bg-[#373694] text-white px-3 py-1 rounded-md border-2 border-gray-400 cursor-pointer block sm:hidden"
          onClick={handleToggleSideBar}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="text-white font-semibold sm:text-3xl pl-4">
          <h1>QUIZ PARTY</h1>
        </div>
      </div>
      <div className="flex justify-end sm:pr-4">
        <button
          className="text-white font-medium flex justify-center items-center bg-[#fc5639] mr-2 px-2 sm:text-xl rounded-lg sm:px-4 sm:mr-10 cursor-pointer hover:bg-red-500 transition duration-300 ease-in-out"
          onClick={handleLogout}
        >
          Logout
        </button>
        <div className="bg-[#4f54db] w-10 h-10 flex items-center justify-center rounded-md">
          <FontAwesomeIcon icon={faBell} className="text-white text-xl" />
        </div>
      </div>
    </div>
  );
}

export default Header;
