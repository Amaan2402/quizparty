import React from "react";
import ParticipantsList from "./ParticipantsList";
import StartQuizLinks from "./StartQuizLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

type Participant = {
  id: string;
  user: {
    name: string;
    email: string;
    id: string;
  };
};

function MainContent({
  quizId,
  participants,
  isQuizStarted,
  question,
  handleSetStartQuiz,
}: {
  quizId: string;
  participants: Participant[];
  isQuizStarted: boolean;
  question: string;
  handleSetStartQuiz: (status: boolean) => void;
}) {
  return (
    <div className="mt-5">
      <div className="flex items-center h-10 w-8/12 justify-between">
        <h1 className="text-white font-semibold text-xl">Participants</h1>
        <div className="flex items-center gap-5 font-light text-gray-400">
          <p className="text-white text-xl">Live sync</p>
          <FontAwesomeIcon icon={faSpinner} spinPulse color="white" size="xl" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between">
        <ParticipantsList participants={participants} quizId={quizId} />
        {isQuizStarted ? (
          <div className="md:w-4/12 p-2 text-white pl-10">
            <h1 className="text-white font-semibold text-xl">
              Current question
            </h1>
            <p className="text-white font-light text-lg">{question}</p>
          </div>
        ) : (
          <StartQuizLinks
            quizId={quizId}
            handleSetStartQuiz={handleSetStartQuiz}
          />
        )}
      </div>
    </div>
  );
}

export default MainContent;
