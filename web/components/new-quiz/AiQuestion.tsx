import { generateAndGetAiQuestions } from "@/utils/quiz";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import toast from "react-hot-toast";

type Question = {
  id: string;
  questionText: string;
  questionIndex: number;
  options: {
    index: number;
    text: string;
  }[];
  correctOption: number;
};

function AiQuestion({
  quizId,
  handleAddQuestionState,
}: {
  quizId: string;
  handleAddQuestionState: (question: Question) => void;
}) {
  const [topic, setTopic] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const [isGenerateButtonDisabled, setIsGenerateButtonDisabled] =
    useState(false);

  const handleGenerateAndGetAiQuestions = async () => {
    setIsGenerateButtonDisabled(true);
    toast.promise(generateAndGetAiQuestions({ quizId, topic, description }), {
      loading: "Generating questions...",
      success: (data) => {
        if (data.length === 0) {
          return "No questions generated";
        }
        const questions: Question[] = data.data as Question[];
        handleAddQuestionState(questions);
        setIsGenerateButtonDisabled(false);
        return "Questions generated successfully";
      },
      error: (err) => {
        console.log(err);
        setIsGenerateButtonDisabled(false);
        return err.response?.data?.message || "Something went wrong";
      },
    });
  };
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
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <input
          type="text"
          className="bg-[#272971] w-full outline-none border border-[#363881] px-3 py-[2px] rounded-md textsm font-light"
          placeholder="Enter quiz description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button
        className="bg-[#008000] mt-3 w-4/12 px-2 py-[2px] font-medium rounded-md"
        onClick={handleGenerateAndGetAiQuestions}
        disabled={isGenerateButtonDisabled}
      >
        Generate Questions
      </button>
    </div>
  );
}

export default AiQuestion;
