"use client";

import React from "react";
import SideBar from "./SideBar";
import { useSideBarStore } from "@/store/useSideBarStore";

function SideBarOverLay({ onlyIcon }: { onlyIcon: boolean }) {
  const { isOpen, handleToggleSideBar } = useSideBarStore();
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={handleToggleSideBar}
      ></div>

      <div className="relative z-60 h-screen">
        <SideBar onlyIcon={onlyIcon} width />
      </div>
    </div>
  );
}

export default SideBarOverLay;
