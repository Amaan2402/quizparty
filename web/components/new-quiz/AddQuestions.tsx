import React from "react";
import ManualQuestion from "./ManualQuestion";
import AiQuestion from "./AiQuestion";

type Question = {
  id: string;
  questionText: string;
  questionIndex: number;
  options: {
    index: number;
    text: string;
  }[];
  correctOption: number;
};

function AddQuestions({
  quizId,
  handleAddQuestionState,
}: {
  quizId: string;
  handleAddQuestionState: (question: Question) => void;
}) {
  return (
    <div className="w-full">
      <ManualQuestion
        quizId={quizId}
        handleAddQuestionState={handleAddQuestionState}
      />
      <AiQuestion quizId={quizId} handleAddQuestionState={handleAddQuestionState} />
    </div>
  );
}

export default AddQuestions;
