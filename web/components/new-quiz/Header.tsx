import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Header({
  title,
  timePerQuestion,
  maxParticipants,
  createdAt,
}: {
  title: string;
  timePerQuestion: number;
  maxParticipants: number;
  createdAt: string;
}) {
  return (
    <div className="flex justify-between items-center text-white p-2">
      <div className="flex gap-10 justify-between">
        <div className="flex items-center gap-2 mb-2 text-3xl">
          <FontAwesomeIcon icon={faBook} style={{ color: "#4145a4" }} />
          <h1>{title}</h1>
        </div>
        <div>
          <p>Time per question: {timePerQuestion} sec</p>
          <p>Max participants: {maxParticipants}</p>
        </div>
      </div>

      <div>
        <button className="bg-[#3b3f9b] text-xl px-3 py-1 font-medium rounded-md">
          Edit
        </button>
      </div>
    </div>
  );
}

export default Header;
