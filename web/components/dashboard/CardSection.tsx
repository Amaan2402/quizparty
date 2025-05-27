import React from "react";
import Card from "./Card";

function CardSection({
  data,
}: {
  data: {
    totalQuizzesCreated: number;
    totalParticipantsAcrossQuizzes: number;
    avgParticipantsPerQuiz: number;
  } | null;
}) {
  return (
    <div className="flex justify-between mt-2 gap-2 w-full">
      <Card title={data?.totalQuizzesCreated || "NA"} desc="Total Quizzes" />
      <Card
        title={data?.totalParticipantsAcrossQuizzes || "NA"}
        desc="Participants"
      />
      <Card
        title={data?.avgParticipantsPerQuiz || "NA"}
        desc="Avg Participants"
      />
    </div>
  );
}

export default CardSection;
