import React from "react";
import Header from "./Creator/Header";
import Dashboard from "./Creator/Dashboard";

function CreatorResult({
  title,
  avgScore,
  lowestScore,
  scoreDistributionGraph,
  questions,
  results,
  totalParticipants,
}: {
  totalParticipants: number;
  title: string;
  avgScore: number;
  lowestScore: number;
  scoreDistributionGraph: {
    id: string;
    quizId: string;
    count: number;
    label: string;
  }[];
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
  results: {
    participantId: string;
    userId: string;
    name: string;
    email: string;
    score: number;
    rank: number;
  }[];
}) {
  console.log(totalParticipants);
  console.log(questions);
  console.log(avgScore);
  console.log(lowestScore);
  return (
    <div className="p-5 px-8 text-white">
      <Header title={title} />
      <Dashboard
        questions={questions}
        avgScore={avgScore}
        lowestScore={lowestScore}
        totalParticipants={totalParticipants}
        scoreDistributionGraph={scoreDistributionGraph}
        results={results}
      />
    </div>
  );
}

export default CreatorResult;
