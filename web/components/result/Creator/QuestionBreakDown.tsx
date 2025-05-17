import React from "react";

function QuestionBreakDown({
  questions,
}: {
  questions: {
    id: string;
    questionText: string;
    options: {
      text: string;
      index: number;
    }[];
    correctOption: number;
    CorrectAnswerPercentage: number;
  }[];
}) {
  return (
    <div className="bg-[#252474] border border-[#6b6bc8] rounded-md text-white max-h-[380px] overflow-auto hide-scrollbar border-b-10 border-b-[#3f3faf]">
      <table className="w-full text-left">
        <thead className="sticky top-0">
          <tr className="bg-[#3f3faf] text-white">
            <th className="p-2 w-7/12">Question</th>
            <th className="p-2 w-3/12">Correct Answer</th>
            <th className="p-2 w-2/12">Answer %</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => {
            const correctOptionText =
              question.options.find(
                (opt) => opt.index === question.correctOption
              )?.text ?? "N/A";

            return (
              <tr key={question.id}>
                <td className="p-2">{question.questionText}</td>
                <td className="p-2 font-bold">{correctOptionText}</td>
                <td className="p-2">{question.CorrectAnswerPercentage}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default QuestionBreakDown;
