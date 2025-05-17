import React from "react";
import LeaderBoard from "../LeaderBoard";
import ExportAndShare from "./ExportAndShare";

function RightSideBar({
  results,
}: {
  results: {
    participantId: string;
    userId: string;
    name: string;
    email: string;
    score: number;
    rank: number;
  }[];
}) {
  return (
    <div className="w-4/12">
      <LeaderBoard results={results} />
      <ExportAndShare />
    </div>
  );
}

export default RightSideBar;
