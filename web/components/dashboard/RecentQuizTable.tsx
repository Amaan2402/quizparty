import React from "react";

type DataProps = {
  createdAt: number;
  id: string;
  status: string;
  title: string;
  totalParticipants: number;
};

function RecentQuizTable({ data }: { data: DataProps[] }) {
  if (data.length === 0) {
    return (
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
            <tr>
              <td colSpan={4} className="p-2 text-center">
                No quizzes created yet
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
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
                <td className="p-2">{item.title}</td>
                <td className="p-2">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>
                <td className="p-2">{item.totalParticipants}</td>
                <td className="p-2">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentQuizTable;
