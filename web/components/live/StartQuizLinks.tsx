import { useDeleteModalStore } from "@/store/useDeleteModalStore";
import { faCopy, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import toast from "react-hot-toast";

function StartQuizLinks({ quizId }: { quizId: string }) {
  const copyInviteLink = () => {
    toast.success("Invite link copied to clipboard", {
      style: {
        fontWeight: "bold",
      },
    });
    return navigator.clipboard.writeText(
      `${window.location.origin}/quiz/join/${quizId}`
    );
  };

  const { handleOpenDeleteModal } = useDeleteModalStore();

  return (
    <div className="w-4/12 p-2 text-white">
      <div>
        <button className="bg-[#2c4cee] w-full font-semibold text-2xl py-1 rounded-md">
          Start Quiz
        </button>
      </div>

      <div
        className="flex items-center gap-2 mt-4 text-lg cursor-pointer hover:font-medium"
        onClick={copyInviteLink}
      >
        <FontAwesomeIcon icon={faCopy} color="#a0a4dd" />
        <p>Copy invite link</p>
      </div>

      <div
        className="flex items-center gap-2 mt-4 text-lg cursor-pointer hover:font-medium"
        onClick={() => handleOpenDeleteModal(quizId)}
      >
        <FontAwesomeIcon icon={faTrashCan} color="#a0a4dd" />
        <p>Delete Quiz</p>
      </div>
    </div>
  );
}

export default StartQuizLinks;
