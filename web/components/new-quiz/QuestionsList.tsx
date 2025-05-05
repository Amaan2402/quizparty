import React from "react";

type Questions = {
  id: number;
  questionText: string;
  options: string[];
  answer: string;
};

const sampledata: Questions[] = [
  {
    id: 1,
    questionText: "What is the capital of France?",
    options: ["Paris", "Madrid", "Berlin", "Rome"],
    answer: "Paris",
  },
  {
    id: 2,
    questionText: "Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: "Mars",
  },
  {
    id: 3,
    questionText: "Who wrote 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Jane Austen",
      "Mark Twain",
    ],
    answer: "William Shakespeare",
  },
];

function QuestionsList() {
  return (
    <div className="bg-[#23256b] w-full max-h-[495px] overflow-y-auto rounded-md p-4 scroll-container">
      {sampledata.map(({ questionText, id }) => (
        <div
          key={id}
          className="text-white bg-[#2d2d7f] mb-3 flex items-center rounded-md justify-between p-2 px-4"
        >
          <p>{questionText}</p>

          <div className="flex justify-between items-center">
            <p>T</p>
            <p>D</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuestionsList;
