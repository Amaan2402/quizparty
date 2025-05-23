import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function RecentActivityItem({
  title,
  score,
}: {
  title: string;
  score: number;
}) {
  return (
    <div className="mb-2 flex items-center justify-between w-7/12">
      <div className="rounded-full bg-[#353a8c] h-[25px] w-[25px] flex items-center justify-center shadow-sm">
        <FontAwesomeIcon icon={faCheck} style={{ color: "#FFD43B" }} />
      </div>
      <div className="flex items-center justify-between w-full ml-4">
        <p>{title}</p>
        <p>{score}</p>
      </div>
    </div>
  );
}

export default RecentActivityItem;
