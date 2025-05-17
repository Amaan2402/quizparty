import React from "react";

function QuizStatsCard({
  totalQuestions,
  totalParticipants,
  avgScore,
  lowestScore,
}: {
  totalQuestions: number;
  totalParticipants: number;
  avgScore: number;
  lowestScore: number;
}) {
  return (
    <div className="p-3 rounded-lg bg-[#3f3faf] flex justify-between items-center gap-3 border border-[#6b6bc8]">
      <div>
        <h2 className="text-2xl font-medium">Quiz Overview</h2>
        <p className="text-[#bcc1e6] font-light">
          Total Questions: {totalQuestions}
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-medium">{totalParticipants}</h2>
        <p className="text-[#bcc1e6] font-light">Participants</p>
      </div>

      <div>
        <h2 className="text-2xl font-medium">{avgScore}</h2>
        <p className="text-[#bcc1e6] font-light">Average Score</p>
      </div>

      <div>
        <h2 className="text-2xl font-medium">{lowestScore}</h2>
        <p className="text-[#bcc1e6] font-light">Lowest Score</p>
      </div>
    </div>
  );
}

export default QuizStatsCard;
