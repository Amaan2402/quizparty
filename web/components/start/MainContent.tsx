import React, { useEffect, useState, useCallback } from "react";
import QuestionTimeSideBar from "./QuestionTimeSideBar";
import QuizQuestion from "./QuizQuestion";
import { submitAnswer } from "@/utils/participant";

type Question = {
  questionText: string;
  options: {
    index: number;
    text: string;
  }[];
  id: string;
  questionIndex: number;
};

function MainContent({
  question,
  timePerQuestion,
  questionIndex,
}: {
  question: Question;
  timePerQuestion: number;
  questionIndex: number;
}) {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(0);
  const [isQuestionChanged, setIsQuestionChanged] = useState(false);

  const handleSetSelectedOptionIndex = (index: number) => {
    setSelectedOptionIndex(index);
  };

  const handleQuestionChange = (val: boolean) => {
    setIsQuestionChanged(val);
  };

  const handleSubmitAnswer = useCallback(async () => {
    if (questionIndex > 0) {
      const answerRef = selectedOptionIndex;
      await submitAnswer({
        questionId: question.id,
        selectedOption: answerRef,
      });
      handleSetSelectedOptionIndex(0); // Reset selected option index after submission
      handleQuestionChange(false); // Reset question change state
    }
  }, [questionIndex, selectedOptionIndex, question.id]);

  useEffect(() => {
    if (isQuestionChanged) {
      handleSubmitAnswer();
    }
  }, [isQuestionChanged, handleSubmitAnswer]);

  return (
    <div className="flex flex-col items-center md:flex-row px-6 md:px-24 lg:px-52 mt-5">
      <QuestionTimeSideBar
        timePerQuestion={timePerQuestion}
        questionIndex={questionIndex}
        handleQuestionChange={handleQuestionChange}
      />
      <QuizQuestion
        question={question}
        selectedOptionIndex={selectedOptionIndex}
        handleSetSelectedOptionIndex={handleSetSelectedOptionIndex}
      />
    </div>
  );
}

export default MainContent;
