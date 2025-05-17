import React from "react";

function Option({
  option,
  selectedOptionIndex,
  handleSetSelectedOptionIndex,
}: {
  option: { index: number; text: string };
  selectedOptionIndex: number | null;
  handleSetSelectedOptionIndex: (index: number) => void;
}) {
  return (
    console.log("Option component rendered", option),
    (
      <div
        className={`cursor-pointer rounded-lg p-5 min-w-[45%] max-w-[45%] ${
          selectedOptionIndex === option.index
            ? "bg-[#00ab81] "
            : "bg-[#2e39a0]"
        }`}
        onClick={() => handleSetSelectedOptionIndex(option.index)}
      >
        <h1 className="text-white text-xl font-medium">{option.text}</h1>
      </div>
    )
  );
}

export default Option;
