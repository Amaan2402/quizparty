import React from "react";
import Header from "./Header";
import Dashboard from "./Dashboard";

function CreatorResult({
  title,
  avgScore,
  lowestScore,
  scoreDistributionGraph,
  questions,
  results,
  totalParticipants,
  quizId,
}: {
  totalParticipants: number;
  title: string;
  avgScore: number;
  lowestScore: number;
  quizId: string;
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
    <div className="p-3 md:p-5 md:px-8 text-white">
      <Header title={title} />
      <Dashboard
        questions={questions}
        avgScore={avgScore}
        lowestScore={lowestScore}
        totalParticipants={totalParticipants}
        scoreDistributionGraph={scoreDistributionGraph}
        results={results}
        quizId={quizId}
      />
    </div>
  );
}

export default CreatorResult;
