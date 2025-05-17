import React from "react";
import Option from "./Option";

type Question = {
  questionText: string;
  options: {
    index: number;
    text: string;
  }[];
};

const options = [
  {
    index: 1,
    text: "Option 1",
  },
  {
    index: 2,
    text: "Option 2",
  },
  {
    index: 3,
    text: "Option 3",
  },
  {
    index: 4,
    text: "Option 4",
  },
];

function QuizQuestion({
  question,
  selectedOptionIndex,
  handleSetSelectedOptionIndex,
}: {
  question: Question;
  selectedOptionIndex: number;
  handleSetSelectedOptionIndex: (index: number) => void;
}) {
  return (
    <div className="w-8/12 bg-[#2b3294] rounded-lg p-5 px-20">
      <div className="max-h-42 mb-5">
        <h1 className="text-white text-xl font-medium">
          {question?.questionText}
        </h1>
      </div>

      <div className="flex w-full flex-wrap justify-between gap-5">
        {question?.options.map((opt, idx) => (
          <Option
            key={idx}
            option={opt}
            selectedOptionIndex={selectedOptionIndex}
            handleSetSelectedOptionIndex={handleSetSelectedOptionIndex}
          />
        ))}
      </div>

      <div className="mt-10 text-white">
        <p className="text-2xl font-medium">Selected option:</p>
        <p className="text-xl">
          {options
            .filter((opt) => opt.index === selectedOptionIndex)
            .map((opt) => opt.text)}
        </p>
      </div>
    </div>
  );
}

export default QuizQuestion;
