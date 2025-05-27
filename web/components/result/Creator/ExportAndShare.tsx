"use client";

import { generateCSV } from "@/utils/generateCsv";
import { sendResultsToParticipants } from "@/utils/result";
import {
  faCopy,
  faEnvelope,
  faFileCsv,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import toast from "react-hot-toast";

function ExportAndShare({
  quizId,
  results,
}: {
  quizId: string;
  results: {
    participantId: string;
    userId: string;
    name: string;
    email: string;
    score: number;
    rank: number;
  }[];
}) {
  const handleCopyLeaderBoardLink = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/dashboard/quiz/result/${quizId}`
    );
    toast("Leaderboard link copied to clipboard!", {
      icon: "✅",
      duration: 2000,
    });
  };
  return (
    <div className="mt-5 bg-[#252474] rounded-lg p-4">
      <h1 className="text-xl font-semibold">Export and Share</h1>

      <div
        className="flex items-center gap-2 mt-2 cursor-pointer"
        onClick={() =>
          toast.promise(generateCSV(results), {
            loading: "Generating CSV...",
            success: "CSV generated successfully!",
            error: "Failed to generate CSV",
          })
        }
      >
        <FontAwesomeIcon icon={faFileCsv} />
        <p>Export CSV</p>
      </div>

      <div
        className="flex items-center gap-2 mt-2 cursor-pointer"
        onClick={() => {
          toast("Coming soon!", {
            icon: "🛠️",
            duration: 2000,
          });
        }}
      >
        <FontAwesomeIcon icon={faFilePdf} />
        <p>Export PDF</p>
      </div>

      <hr className="border-[#6b6bc8] my-4" />

      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={handleCopyLeaderBoardLink}
      >
        <FontAwesomeIcon icon={faCopy} />
        <p>Copy leaderboard link</p>
      </div>

      <div
        className="flex items-center gap-2 mt-2 cursor-pointer"
        onClick={() => {
          toast.promise(sendResultsToParticipants(quizId), {
            loading: "Sending results...",
            success: (data) => {
              console.log(data);
              return "Results sent successfully!";
            },
            error: (err) => {
              return (
                err?.response?.data?.message ||
                "Failed to send results. Please try again."
              );
            },
          });
        }}
      >
        <FontAwesomeIcon icon={faEnvelope} />
        <p>Send quiz results via email to all participants</p>
      </div>
    </div>
  );
}

export default ExportAndShare;
