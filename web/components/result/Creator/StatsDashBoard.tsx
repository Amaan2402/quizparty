import React from "react";
import QuizStatsCard from "./QuizStatsCard";
import ScoreDistributionGraph from "./ScoreDistributionGraph";
import QuestionBreakDown from "./QuestionBreakDown";

function StatsDashBoard({
  questions,
  totalParticipants,
  avgScore,
  lowestScore,
  scoreDistributionGraph,
}: {
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
    <div className="w-8/12">
      <QuizStatsCard
        totalQuestions={questions.length}
        totalParticipants={totalParticipants}
        avgScore={avgScore}
        lowestScore={lowestScore}
      />
      <ScoreDistributionGraph scoreDistributionGraph={scoreDistributionGraph} />
      <QuestionBreakDown questions={questions} />
    </div>
  );
}

export default StatsDashBoard;
