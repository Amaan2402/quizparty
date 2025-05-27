import { faBook, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import QuestionInput from "./QuestionInput";
import toast from "react-hot-toast";
import { createQuizQuestion } from "@/utils/question";
import { useQuestionStore } from "@/store/useQuestionStore";

type Options = {
  index: number;
  text: string;
};

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

function ManualQuestion({ quizId }: { quizId: string }) {
  const [questionText, setQuestionText] = React.useState<string>("");
  const [optionsCount, setOptionsCount] = React.useState<number>(2);
  const [options, setOptions] = useState<Options[]>([
    { index: 1, text: "" },
    { index: 2, text: "" },
  ]);
  const [correctOption, setCorrectOption] = useState<number>(0);

  const [isLoading, setIsLoading] = useState(false);
  const { setQuestionsList } = useQuestionStore();
  const handleAddOption = () => {
    if (optionsCount < 4 && optionsCount >= 2) {
      setOptions((prev) => {
        return [
          ...prev,
          {
            index: optionsCount + 1,
            text: "",
          },
        ];
      });
      setOptionsCount((prev) => prev + 1);
    } else {
      toast.error("You can only add up to 4 options.");
    }
  };

  const handleDeleteOption = (idx: number) => {
    console.log(correctOption, idx);
    if (optionsCount > 2 && optionsCount <= 4) {
      if (correctOption === idx) {
        setCorrectOption(0);
      }
      const newOptions = [...options];
      newOptions.splice(idx - 1, 1);
      setOptions(newOptions);
      setOptionsCount((prev) => prev - 1);
    } else {
      toast.error("You must have at least 2 options.");
    }
  };

  const handleSetOptionText = ({
    idx,
    text,
  }: {
    idx: number;
    text: string;
  }) => {
    const newOptions = [...options];
    newOptions[idx - 1].text = text;
    setOptions(newOptions);
  };

  const handleCreateQuestion = () => {
    if (questionText.length < 10) {
      toast.error("Question must be at least 10 characters long.");
      return;
    }

    if (optionsCount < 2) {
      toast.error("You must have at least 2 options.");
      return;
    }

    if (optionsCount > 4) {
      toast.error("You can only add up to 4 options.");
      return;
    }

    if (!correctOption) {
      toast.error("You must select a correct option.");
      return;
    }
    setIsLoading(true);

    toast.promise(
      createQuizQuestion({ quizId, questionText, options, correctOption }),
      {
        loading: "Creating question...",
        success: (data) => {
          const question: Question = data.data as Question;
          setQuestionsList([question]);
          setQuestionText("");
          setOptionsCount(2);
          setOptions([
            { index: 1, text: "" },
            { index: 2, text: "" },
          ]);
          setIsLoading(false);
          return `Question created successfully!`;
        },
        error: (error) => {
          console.error("Error creating question:", error);
          setIsLoading(false);
          return `Error creating question: ${
            error.response?.data?.message || "Something went wrong"
          }`;
        },
      }
    );
  };

  return (
    <div className="bg-[#23256b] rounded-md p-2 px-5">
      <div className="flex items-center gap-2 mb-2 text-2xl font-semibold">
        <FontAwesomeIcon icon={faBook} color="#546efe" />
        <h1>Add Questions Manually</h1>
      </div>

      <div className="flex flex-col gap-2 mt-3">
        <textarea
          className="resize-none bg-[#272971] outline-none border border-[#363881] px-3 py-[2px] rounded-md"
          rows={3}
          placeholder="Question"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          maxLength={120}
        ></textarea>
        {options.map((option, idx) => {
          return (
            <QuestionInput
              key={idx}
              handleDeleteOption={handleDeleteOption}
              handleSetOptionText={handleSetOptionText}
              idx={idx + 1}
              value={option.text}
              setCorrectOption={setCorrectOption}
              correctOption={correctOption}
            />
          );
        })}
        <div className="mt-2 w-full">
          <button
            className="bg-[#2553fc] mb-2 px-2 py-[2px] font-medium rounded-md"
            onClick={handleAddOption}
            disabled={isLoading}
          >
            Add option
          </button>
          <br />
          <button
            className={`px-2 py-[2px] font-medium rounded-md ${
              isLoading ? "bg-[#439b43] cursor-not-allowed" : "bg-[#008000]"
            }`}
            onClick={handleCreateQuestion}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                Creating Question
                <FontAwesomeIcon icon={faSpinner} spin />
              </span>
            ) : (
              "Create Question"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ManualQuestion;
