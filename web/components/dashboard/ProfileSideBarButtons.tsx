"use client";

import { useModalStore } from "@/store/useQuizModalStore";
import React, { useState } from "react";
import toast from "react-hot-toast";

function ProfileSideBarButtons() {
  const [quizLink, setQuizLink] = useState("");
  const [loading, setLoading] = useState(false);

  const { handleOpen } = useModalStore();
  const handleJoinRoom = () => {
    setLoading(true);
    if (!quizLink) {
      toast.error("Please enter a quiz link");
      setLoading(false);
      return;
    }

    window.location.href = quizLink;
    setLoading(false);
  };

  return (
    <div className="mt-3">
      <button
        className="w-full bg-[#1e4eff] cursor-pointer text-2xl py-2 font-medium rounded-lg text-white"
        onClick={() => handleOpen(false)}
      >
        Create Quiz
      </button>
      <div className="mt-3">
        <input
          type="text"
          placeholder="Enter quiz inviation link"
          className="w-full px-3 py-2 rounded text-white border border-[#464aba] outline-none"
          value={quizLink}
          onChange={(e) => setQuizLink(e.target.value)}
        />
        <button
          className="w-full mt-2 bg-[#3439a2] text-2xl py-2 font-medium rounded-lg text-white cursor-pointer"
          onClick={handleJoinRoom}
          disabled={loading}
        >
          Join Quiz
        </button>
      </div>
    </div>
  );
}

export default ProfileSideBarButtons;
