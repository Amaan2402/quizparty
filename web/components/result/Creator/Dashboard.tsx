import React from "react";
import StatsDashBoard from "./StatsDashBoard";
import RightSideBar from "./RightSideBar";

function Dashboard({
  questions,
  totalParticipants,
  avgScore,
  lowestScore,
  scoreDistributionGraph,
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
  totalParticipants: number;
  questions: {
    id: string;
    questionText: string;
    options: {
      text: string;
      index: number;
    }[];
    correctOption: number;
    CorrectAnswerPercentage: number;
  }[];
  avgScore: number;
  lowestScore: number;
  scoreDistributionGraph: {
    id: string;
    quizId: string;
    count: number;
    label: string;
  }[];
}) {
  return (
    <div className="flex gap-10 mt-5">
      <StatsDashBoard
        questions={questions}
        totalParticipants={totalParticipants}
        avgScore={avgScore}
        lowestScore={lowestScore}
        scoreDistributionGraph={scoreDistributionGraph}
      />
      <RightSideBar results={results} />
    </div>
  );
}

export default Dashboard;
