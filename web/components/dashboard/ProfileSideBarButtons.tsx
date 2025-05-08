"use client";

import { useModalStore } from "@/store/useModalStore";
import React from "react";

function ProfileSideBarButtons() {
  const { handleOpen } = useModalStore();

  return (
    <div className="mt-6">
      <button
        className="w-full bg-[#1e4eff] cursor-pointer text-2xl py-2 font-medium rounded-lg text-white"
        onClick={() => handleOpen(false)}
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
