"use client";

import React from "react";
import HeaderToggle from "./HeaderToggle";

function Header({
  mode,
  handleChangeMode,
}: {
  mode: "CREATED" | "PARTICIPATED";
  handleChangeMode: () => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-white font-semibold text-2xl">My Quizzes</h1>
      <HeaderToggle mode={mode} handleChangeMode={handleChangeMode} />
    </div>
  );
}

export default Header;
