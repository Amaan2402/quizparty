import { useDeleteModalStore } from "@/store/useDeleteModalStore";
import { startQuiz } from "@/utils/quizStatus";
import { faCopy, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import toast from "react-hot-toast";

function StartQuizLinks({
  quizId,
  handleSetStartQuiz,
}: {
  quizId: string;
  handleSetStartQuiz: (status: boolean) => void;
}) {
  const copyInviteLink = () => {
    toast.success("Invite link copied to clipboard", {
      style: {
        fontWeight: "bold",
      },
    });
    return navigator.clipboard.writeText(
      `${window.location.origin}/quiz/start/${quizId}`
    );
  };

  const { handleOpenDeleteModal } = useDeleteModalStore();

  const handleStartQuiz = async () => {
    if (!quizId) {
      toast.error("Quiz ID is required");
      return;
    }

    toast.promise(startQuiz(quizId), {
      loading: "Starting quiz...",
      success: (data) => {
        console.log(data);
        handleSetStartQuiz(true);
        return "Quiz started successfully";
      },
      error: (error) => {
        console.error(error);
        return error.response.data.message;
      },
    });
  };

  return (
    <div className="md:w-4/12 p-2 text-white mt-5 md:mt-0">
      <div>
        <button
          className="bg-[#2c4cee] w-full font-semibold text-lg md:text-2xl py-1 rounded-md"
          onClick={handleStartQuiz}
        >
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
