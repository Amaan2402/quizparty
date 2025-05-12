import React from "react";

type Participant = {
  name: string;
  email: string;
  id: string;
};

function ParticipantsList({ participants }: { participants: Participant[] }) {
  if (participants.length === 0) {
    return (
      <div className="mt-2 w-8/12 bg-[#252474] rounded-md text-white max-h-[380px] overflow-auto hide-scrollbar border-b-10 border-b-[#3f3faf]">
        <p className="text-center p-4 font-semibold text-xl">No participants yet</p>
      </div>
    );
  }
  return (
    <div className="mt-2 w-8/12 bg-[#252474] rounded-md text-white max-h-[380px] overflow-auto hide-scrollbar border-b-10 border-b-[#3f3faf]">
      <table className="w-full text-left">
        <thead className="sticky top-0">
          <tr className="bg-[#3f3faf]">
            <th className="p-2 w-5/12">Name</th>
            <th className="p-2 w-5/12">Email</th>
            <th className="p-2 w-2/12">
              <p>Kick</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {participants.map((item, index) => (
            <tr key={index}>
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.email}</td>
              <td className="p-2">
                <button className="text-red-500 bg-red-200 px-3 rounded-md font-medium cursor-pointer hover:bg-red-600 hover:text-white">
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ParticipantsList;
