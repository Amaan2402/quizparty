import React from "react";

const data = [
  {
    QuizName: "Quiz-1",
    Created: "2023-10-01",
    Status: "Completed",
    participants: 100,
  },
  {
    QuizName: "Quiz-2",
    Created: "2023-10-02",
    Status: "In Progress",
    participants: 50,
  },
  {
    QuizName: "Quiz-3",
    Created: "2023-10-03",
    Status: "Not Started",
    participants: 0,
  },
];

function RecentQuizTable() {
  return (
    <div className="mt-3">
      <h1 className="text-white font-medium text-xl">Recent Quizzes</h1>

      <div className="mt-2 bg-[#252474] rounded-md text-white overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-[#3f3faf]">
              <th className="p-2">Quiz Name</th>
              <th className="p-2">Created</th>
              <th className="p-2">Participants</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="p-2">{item.QuizName}</td>
                <td className="p-2">{item.Created}</td>
                <td className="p-2">{item.participants}</td>
                <td className="p-2">{item.Status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end gap-3 mt-3 font-medium">
        <button className="bg-blue-500 text-white px-4 py-1 rounded cursor-pointer">
          Previous
        </button>
        <button className="bg-blue-500 text-white px-4 py-1 rounded cursor-pointer">
          Next
        </button>
      </div>
    </div>
  );
}

export default RecentQuizTable;
