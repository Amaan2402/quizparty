"use client";

import { useModalContext } from "@/context/modalContext";
import React from "react";

function ProfileSideBarButtons() {
  const { handleOpen } = useModalContext();

  return (
    <div className="mt-6">
      <button
        className="w-full bg-[#1e4eff] cursor-pointer text-2xl py-2 font-medium rounded-lg text-white"
        onClick={handleOpen}
      >
        Create Quiz
      </button>
      <button className="w-full mt-4 bg-[#3439a2] text-2xl py-2 font-medium rounded-lg text-white">
        Try AI Generator
      </button>
    </div>
  );
}

export default ProfileSideBarButtons;
