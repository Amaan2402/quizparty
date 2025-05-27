import React from "react";
import ParticipantResult from "./ParticipantResult";
import CreatorResult from "./Creator/CreatorResult";

function MainContent({
  title,
  user,
  results,
  avgScore,
  lowestScore,
  scoreDistributionGraph,
  questions,
  totalParticipants,
  quizId,
}: {
  totalParticipants: number;
  title: string;
  user: {
    userId: string;
    userType: string;
  } | null;
  results: {
    participantId: string;
    userId: string;
    name: string;
    email: string;
    score: number;
    rank: number;
  }[];
  quizId: string;
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
}) {
  return (
    <div className="text-white">
      {user && user.userType === "PARTICIPANT" ? (
        <ParticipantResult title={title} user={user} results={results} />
      ) : (
        <CreatorResult
          title={title}
          avgScore={avgScore}
          lowestScore={lowestScore}
          scoreDistributionGraph={scoreDistributionGraph}
          questions={questions}
          results={results}
          totalParticipants={totalParticipants}
          quizId={quizId}
        />
      )}
    </div>
  );
}

export default MainContent;
