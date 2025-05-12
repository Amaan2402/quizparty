import React from "react";
import ParticipantsList from "./ParticipantsList";
import StartQuizLinks from "./StartQuizLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

type Participant = {
  name: string;
  email: string;
  id: string;
};

function MainContent({
  quizId,
  participants,
}: {
  quizId: string;
  participants: Participant[];
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
      <div className="flex justify-between">
        <ParticipantsList participants={participants} />
        <StartQuizLinks quizId={quizId} />
      </div>
    </div>
  );
}

export default MainContent;
