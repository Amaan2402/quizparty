import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function AiQuestion() {
  return (
    <div className="bg-[#23256b] rounded-md mt-3 p-2 px-5">
      <div className="flex items-center gap-3">
        <FontAwesomeIcon icon={faRobot} color="#8393ff" />
        <h1 className="text-2xl font-semibold">Generate Questions with AI</h1>
      </div>

      <div className="mt-3">
        <input
          type="text"
          className="bg-[#272971] mb-2 w-full outline-none border border-[#363881] px-3 py-[2px] rounded-md textsm font-light"
          placeholder="Enter a topic "
        />
        <input
          type="text"
          className="bg-[#272971] w-full outline-none border border-[#363881] px-3 py-[2px] rounded-md textsm font-light"
          placeholder="Enter quiz description"
        />
      </div>

      <button className="bg-[#008000] mt-3 w-4/12 px-2 py-[2px] font-medium rounded-md">
        Generate Questions
      </button>
    </div>
  );
}

export default AiQuestion;
