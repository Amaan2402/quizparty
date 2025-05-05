"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function QuestionInput({
  idx,
  handleDeleteOption,
  handleSetOptionText,
  value,
}: {
  idx: number;
  handleDeleteOption: (idx: number) => void;
  handleSetOptionText: ({ idx, text }: { idx: number; text: string }) => void;
  value: string;
}) {
  return (
    <div className="w-full flex items-center gap-3 justify-between ">
      <input
        type="text"
        className="bg-[#272971] w-full outline-none border border-[#363881] px-3 py-[2px] rounded-md textsm font-light"
        placeholder={`option ${idx}`}
        value={value}
        onChange={(e) => handleSetOptionText({ idx, text: e.target.value })}
      />
      <button onClick={() => handleDeleteOption(idx)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}

export default QuestionInput;
