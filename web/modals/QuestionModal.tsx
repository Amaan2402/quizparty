"use client";

import React, { useEffect, useState } from "react";
import { useQuestionModalStore } from "@/store/useQuestionModalStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";
import QuestionInput from "@/components/new-quiz/QuestionInput";
import { useQuestionStore } from "@/store/useQuestionStore";
import { editQuizQuestion } from "@/utils/quiz";

type questionUpdateFields = {
  questionText?: string;
  options?: {
    index: number;
    text: string;
  }[];
  correctOption?: number;
};

function QuestionModal() {
  const { question } = useQuestionModalStore();
  const { options, questionText, correctOption } = question;
  const { isOpen, handleClose } = useQuestionModalStore();
  const { editQuestion } = useQuestionStore();

  const [localQuestionText, setLocalQuestionText] = useState<string>("");
  const [localOptions, setLocalOptions] = useState(
    options.map((opt) => ({ ...opt }))
  );
  const [optionsCount, setOptionsCount] = useState<number>(options.length);
  const [localCorrectOption, setLocalCorrectOption] = useState<number>(
    correctOption || 0
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setLocalQuestionText(questionText);
      setLocalOptions(options.map((opt) => ({ ...opt }))); // deep copy here too
      setOptionsCount(options.length);
      setLocalCorrectOption(correctOption || 0);
    }
  }, [isOpen, questionText, options, correctOption]);

  const handleSetOptionText = ({
    idx,
    text,
  }: {
    idx: number;
    text: string;
  }) => {
    const newOptions = [...localOptions];
    newOptions[idx - 1].text = text;
    setLocalOptions(newOptions);
  };

  const handleAddOption = () => {
    if (optionsCount < 4) {
      setLocalOptions((prev) => [
        ...prev,
        {
          index: optionsCount + 1,
          text: "",
        },
      ]);
      setOptionsCount((prev) => prev + 1);
    } else {
      toast.error("You can only add up to 4 options.");
    }
  };

  const handleDeleteOption = (idx: number) => {
    if (optionsCount > 2) {
      if (idx === localCorrectOption) {
        setLocalCorrectOption(0);
      }
      const newOptions = [...localOptions];
      newOptions.splice(idx - 1, 1);
      // Reset index after deletion
      const reIndexed = newOptions.map((opt, i) => ({ ...opt, index: i + 1 }));
      setLocalOptions(reIndexed);
      setOptionsCount((prev) => prev - 1);
    } else {
      toast.error("You must have at least 2 options.");
    }
  };

  const handleUpdate = () => {
    setIsLoading(true);
    const isQuestionValid = localQuestionText.length > 10;
    const hasValidOptionCount = optionsCount >= 2 && optionsCount <= 4;
    const allOptionsFilled = localOptions.every(
      (opt) => opt.text.trim() !== ""
    );

    if (!isQuestionValid) {
      toast.error("Question must be at least 10 characters long.");
      setIsLoading(false);
      return;
    }
    if (!hasValidOptionCount) {
      toast.error("You must have between 2 and 4 options.");
      setIsLoading(false);
      return;
    }
    if (!allOptionsFilled) {
      toast.error("All options must be filled.");
      setIsLoading(false);
      return;
    }

    const hasEmptyOption = localOptions.some((opt) => opt.text.trim() === "");
    if (hasEmptyOption) {
      toast.error("All options must be filled.");
      return;
    }

    const questionUpdateFields: questionUpdateFields = {};
    if (localQuestionText !== questionText) {
      questionUpdateFields.questionText = localQuestionText;
    }
    const optionsChanged =
      localOptions.length !== options.length ||
      localOptions.some((opt, i) => opt.text !== options[i]?.text);

    if (optionsChanged) {
      questionUpdateFields.options = localOptions;
    }

    if (
      !questionUpdateFields.questionText &&
      !questionUpdateFields.options &&
      localCorrectOption === correctOption
    ) {
      toast.error("No changes made.");
      setIsLoading(false);
      return;
    }

    if (localCorrectOption !== correctOption) {
      questionUpdateFields.correctOption = localCorrectOption;
    }

    toast.promise(
      editQuizQuestion({ questionId: question.id, questionUpdateFields }),
      {
        loading: "Updating question...",
        success: (data) => {
          console.log(data);
          setIsLoading(false);
          editQuestion({
            id: question.id,
            question: {
              questionText: localQuestionText,
              options: localOptions,
              correctOption: localCorrectOption,
            },
          });
          setIsLoading(false);
          handleClose();
          return "Question updated successfully.";
        },
        error: (err) => {
          console.log(err);
          setIsLoading(false);
          return `${err.response.data.message}` || "Error updating question.";
        },
      }
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={handleClose}
      ></div>

      <div className="relative bg-[#2f32a1] text-white flex flex-col items-center rounded-xl shadow-lg p-4 px-6 z-60 w-[90%] max-w-md">
        <h2 className="text-xl font-bold mb-4">Edit Question</h2>

        <div className="w-full">
          <label htmlFor="questionText" className="font-medium">
            Question
          </label>
          <textarea
            className="resize-none bg-[#272971] outline-none border border-[#363881] px-3 py-[2px] rounded-md w-full mb-3"
            id="questionText"
            rows={3}
            placeholder="Question"
            value={localQuestionText}
            onChange={(e) => setLocalQuestionText(e.target.value)}
            maxLength={120}
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="questionOptions" className="font-medium">
            Options
          </label>
          {localOptions.map((option, idx) => (
            <QuestionInput
              key={idx}
              handleDeleteOption={handleDeleteOption}
              handleSetOptionText={handleSetOptionText}
              idx={idx + 1}
              value={option.text}
              correctOption={localCorrectOption}
              setCorrectOption={setLocalCorrectOption}
            />
          ))}
        </div>

        <div className="mt-3 w-full flex flex-col items-start">
          <button
            className="bg-[#2553fc] w-5/12 mb-2 px-2 py-[2px] font-medium rounded-md"
            onClick={handleAddOption}
            disabled={isLoading}
          >
            Add option
          </button>
        </div>

        <div className="w-full mt-2 flex justify-between gap-2">
          <button
            className="bg-gray-500 text-white px-4 py-[2px] rounded-md w-5/12"
            onClick={handleClose}
            disabled={isLoading}
          >
            Cancel
          </button>
          <button
            className={`px-4 py-[2px] rounded-md w-5/12 font-medium ${
              isLoading ? "bg-[#439b43] cursor-not-allowed" : "bg-[#008000]"
            }`}
            onClick={handleUpdate}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center gap-2 justify-center">
                Updating
                <FontAwesomeIcon icon={faSpinner} spin />
              </span>
            ) : (
              "Update"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionModal;
