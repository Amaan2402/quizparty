import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import QuestionInput from "./QuestionInput";
import toast from "react-hot-toast";

type Options = {
  index: number;
  text: string;
};

function ManualQuestion() {
  const [questionText, setQuestionText] = React.useState<string>("");
  const [optionsCount, setOptionsCount] = React.useState<number>(2);
  const [options, setOptions] = useState<Options[]>([
    { index: 1, text: "" },
    { index: 2, text: "" },
  ]);

  const handleAddOption = () => {
    if (optionsCount < 4 && optionsCount >= 2) {
      setOptions((prev) => {
        return [
          ...prev,
          {
            index: optionsCount + 1,
            text: "",
          },
        ];
      });
      setOptionsCount((prev) => prev + 1);
    } else {
      toast.error("You can only add up to 4 options.");
    }
  };

  const handleDeleteOption = (idx: number) => {
    if (optionsCount > 2 && optionsCount <= 4) {
      const newOptions = [...options];
      newOptions.splice(idx - 1, 1);
      setOptions(newOptions);
      setOptionsCount((prev) => prev - 1);
    } else {
      toast.error("You must have at least 2 options.");
    }
  };

  const handleSetOptionText = ({
    idx,
    text,
  }: {
    idx: number;
    text: string;
  }) => {
    const newOptions = [...options];
    newOptions[idx - 1].text = text;
    console.log(newOptions);
    setOptions(newOptions);
  };

  const handleAddQuestion = () => {
    console.log("Question: ", questionText);
    console.log("Options: ", options);

    toast.success("Question added successfully!");
  };

  return (
    <div className="bg-[#23256b] rounded-md p-2 px-5">
      <div className="flex items-center gap-2 mb-2 text-2xl font-semibold">
        <FontAwesomeIcon icon={faBook} color="#546efe" />
        <h1>Add Questions Manually</h1>
      </div>

      <div className="flex flex-col gap-2 mt-3">
        <textarea
          className="resize-none bg-[#272971] outline-none border border-[#363881] px-3 py-[2px] rounded-md"
          rows={4}
          placeholder="Question"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          maxLength={60}
        ></textarea>
        {options.map((option, idx) => {
          return (
            <QuestionInput
              key={idx}
              handleDeleteOption={handleDeleteOption}
              handleSetOptionText={handleSetOptionText}
              idx={idx + 1}
              value={option.text}
            />
          );
        })}
        <div className="mt-2 w-full">
          <button
            className="bg-[#2553fc] w-3/12 mb-2 px-2 py-[2px] font-medium rounded-md"
            onClick={handleAddOption}
          >
            Add option
          </button>
          <br />
          <button
            className="bg-[#008000] w-4/12 px-2 py-[2px] font-medium rounded-md"
            onClick={handleAddQuestion}
          >
            Create Question
          </button>
        </div>
      </div>
    </div>
  );
}

export default ManualQuestion;
