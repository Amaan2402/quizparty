"use client";

import { useDeleteModalStore } from "@/store/useDeleteModalStore";
import { deleteQuiz } from "@/utils/quiz";
import React from "react";
import toast from "react-hot-toast";

function DeleteQuizModal() {
  const { handleCloseDeleteModal, quizId, isOpen } = useDeleteModalStore();

  const handleDeleteQuiz = () => {
    toast.promise(deleteQuiz(quizId), {
      loading: "Deleting quiz...",
      success: () => {
        handleCloseDeleteModal();
        return "Quiz deleted successfully";
      },
      error: (err) => {
        handleCloseDeleteModal();
        return err.message;
      },
    });
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={handleCloseDeleteModal}
      ></div>

      <div className="relative bg-[#2f32a1] text-white flex flex-col items-center rounded-xl shadow-lg p-4 px-6 z-60 w-[90%] max-w-md">
        <h1 className="text-white font-bold text-xl">
          Are you sure you want to delete this quiz?
        </h1>
        <button
          className="bg-red-400 text-white font-semibold text-lg w-full rounded-md py-1 mt-4 hover:bg-red-500"
          onClick={handleDeleteQuiz}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeleteQuizModal;
