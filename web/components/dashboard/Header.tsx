"use client";

import { handleLogoutUser } from "@/utils/auth";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

function Header() {
  const router = useRouter();
  const handleLogout = () => {
    const res = handleLogoutUser();
    toast.promise(res, {
      success: (data) => {
        console.log("Logout successful:", data);
        router.push("/");
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
    <div className="w-full">
      <div className="flex justify-end pr-4">
        <button
          className="text-white font-medium flex justify-center items-center bg-[#fc5639] text-xl rounded-lg px-4 mr-10 cursor-pointer hover:bg-red-500 transition duration-300 ease-in-out"
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
