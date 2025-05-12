import React from "react";

function HeaderToggle({
  mode,
  handleChangeMode,
}: {
  mode: "CREATED" | "PARTICIPATED";
  handleChangeMode: () => void;
}) {
  return (
    <div className="border border-[#6576f1] rounded-xl text-white">
      <button
        onClick={handleChangeMode}
        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
          mode === "CREATED"
            ? "bg-[#373694] shadow"
            : "opacity-70 hover:opacity-100"
        }`}
      >
        Created
      </button>
      <button
        onClick={handleChangeMode}
        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
          mode === "PARTICIPATED"
            ? "bg-[#373694] shadow"
            : "opacity-70 hover:opacity-100"
        }`}
      >
        Participated
      </button>
    </div>
  );
}

export default HeaderToggle;
