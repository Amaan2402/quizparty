import { leaveQuiz } from "@/utils/participant";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

function Header({
  reward,
  quizId,
}: {
  reward: { brand: string; voucherCode: string } | null;
  quizId: string;
}) {
  const handleLeaveQuiz = async () => {
    toast.promise(leaveQuiz(quizId), {
      loading: "Leaving quiz...",
      success: () => {
        window.location.href = "/dashboard/my-quizzes";
        return "Left quiz successfully";
      },
      error: (err) => {
        return err.response?.data?.message || "Failed to leave quiz";
      },
    });
  };

  return (
    <div className="w-full px-3 sm:px-20 py-8 text-white flex justify-between items-center ">
      <Link href={"/dashboard"}>
        <div>
          <h1 className="text-xl sm:text-3xl font-bold">QUIZ PARTY</h1>
        </div>
      </Link>

      <div className="flex items-center gap-2 text-[#cfd4e9] text-sm sm:text-lg">
        <FontAwesomeIcon bounce icon={faTrophy} color="#f9c66a" />
        {reward ? (
          <p className="text-white font-medium">Reward: {reward.brand} </p>
        ) : (
          <p className="text-white font-medium">No Reward</p>
        )}
      </div>

      <div>
        <button
          className="font-medium text bg-[#2d359e] sm:text-xl px-4 py-1 rounded-md cursor-pointer hover:bg-red-500 transition-all duration-300 ease-in-out"
          onClick={handleLeaveQuiz}
        >
          Leave Quiz
        </button>
      </div>
    </div>
  );
}

export default Header;
