import React from "react";
import ManualQuestion from "./ManualQuestion";
import AiQuestion from "./AiQuestion";

function AddQuestions({ quizId }: { quizId: string }) {
  return (
    <div className="w-full">
      <ManualQuestion quizId={quizId} />
      <AiQuestion quizId={quizId} />
    </div>
  );
}

export default AddQuestions;
