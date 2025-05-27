import React from "react";
import LeaderBoard from "../LeaderBoard";
import ExportAndShare from "./ExportAndShare";

function RightSideBar({
  results,
  quizId,
}: {
  results: {
    participantId: string;
    userId: string;
    name: string;
    email: string;
    score: number;
    rank: number;
  }[];
  quizId: string;
}) {
  return (
    <div className="md:w-4/12 mt-5 md:mt-0">
      <LeaderBoard results={results} />
      <ExportAndShare quizId={quizId} results={results} />
    </div>
  );
}

export default RightSideBar;
