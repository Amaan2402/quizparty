import React from "react";

type Participant = {
  participantId: string;
  userId: string;
  name: string;
  email: string;
  score: number;
  rank: number;
};

function LeaderBoard({ results }: { results: Participant[] }) {
  return (
    <div className="bg-[#252474] rounded-md text-white max-h-[380px] overflow-auto hide-scrollbar border-b-10 border-b-[#3f3faf]">
      <table className="w-full text-left">
        <thead className="sticky top-0">
          <tr className="bg-[#3f3faf]">
            <th className="p-2 w-5/12">Name</th>
            <th className="p-2 w-5/12">Score</th>
            <th className="p-2 w-2/12">Rank</th>
          </tr>
        </thead>
        <tbody>
          {results.map((participant) => (
            <tr key={participant.participantId}>
              <td className="p-2">{participant.name}</td>
              <td className="p-2">{participant.score}</td>
              <td className="p-2 font-bold">{participant.rank}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaderBoard;
