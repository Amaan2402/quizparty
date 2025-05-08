import { useModalStore } from "@/store/useModalStore";
import React from "react";
import { useQuestionStore } from "../store/useQuestionsStore";

function QuestionModal() {
  const { isOpen, handleClose } = useModalStore();
  const { question } = useQuestionStore();
  const { id, correctOption, options, questionIndex, questionText } = question;
  console.log(
    "QuestionModal: question data",
    questionText,
    options,
    correctOption,
    id,
    questionIndex
  );
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={handleClose}
      ></div>

      <div className="relative bg-[#2f32a1] text-white flex flex-col items-center rounded-xl shadow-lg p-4 px-6 z-60 w-[90%] max-w-md"></div>
    </div>
  );
}

export default QuestionModal;
