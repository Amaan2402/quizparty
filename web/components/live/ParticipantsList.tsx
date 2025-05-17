import { removeAndBanParticipant } from "@/utils/quiz";
import React from "react";
import toast from "react-hot-toast";

type Participant = {
  id: string;
  user: {
    name: string;
    email: string;
    id: string;
  };
};

function ParticipantsList({
  participants,
  quizId,
}: {
  participants: Participant[];
  quizId: string;
}) {
  if (participants.length === 0) {
    return (
      <div className="mt-2 w-8/12 bg-[#252474] rounded-md text-white max-h-[380px] overflow-auto hide-scrollbar border-b-10 border-b-[#3f3faf]">
        <p className="text-center p-4 font-semibold text-xl">
          No participants yet
        </p>
      </div>
    );
  }

  const handleRemoveUser = async (id: string) => {
    toast.promise(removeAndBanParticipant({ quizId, participantId: id }), {
      loading: "Removing user...",
      success: (data) => {
        console.log(data);
        return `User removed successfully!`;
      },
      error: (error) => {
        console.error(error);
        toast.error("Error removing user");
        return `Error removing user: ${error.message}`;
      },
    });
  };

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
              <td className="p-2">{item.user.name}</td>
              <td className="p-2">{item.user.email}</td>
              <td className="p-2">
                <button
                  className="text-red-500 bg-red-200 px-3 rounded-md font-medium cursor-pointer hover:bg-red-600 hover:text-white"
                  onClick={() => handleRemoveUser(item.id)}
                >
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
