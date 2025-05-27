import React from "react";
import Header from "./Header";
import UserRankCard from "./UserRankCard";
import DetailedBreakdown from "./DetailedBreakdown";
import LeaderBoard from "./LeaderBoard";

function ParticipantResult({
  title,
  user,
  results,
}: {
  title: string;
  user: {
    userId: string;
    userType: string;
  } | null;
  results: {
    participantId: string;
    userId: string;
    name: string;
    email: string;
    score: number;
    rank: number;
  }[];
}) {
  const userRank = results.find(
    (participant) => participant.userId === user?.userId
  );
  return (
    <div className="p-10">
      <Header title={title} />
      <div className="flex flex-col lg:flex-row lg:gap-10 justify-between mt-5">
        <div className="lg:w-6/12">
          <UserRankCard
            name={userRank?.name || ""}
            email={userRank?.email || ""}
            rank={userRank?.rank || 0}
            participantsCount={results.length}
          />
          <DetailedBreakdown />
        </div>

        <div className="lg:w-5/12 mt-4 lg:mt-0">
          <LeaderBoard results={results} />
        </div>
      </div>
    </div>
  );
}

export default ParticipantResult;
