import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function UserRankCard({
  name,
  email,
  rank,
  participantsCount,
}: {
  name: string;
  email: string;
  rank: number;
  participantsCount: number;
}) {
  return (
    <div className="flex py-3 sm:px-4 px-2 justify-between items-center bg-[#3f3faf] rounded-xl shadow-md">
      <div className="flex items-center gap-5 sm:gap-10">
        <div className="bg-[#252474] rounded-full h-16 w-16 flex items-center justify-center p-2 text-white">
          <FontAwesomeIcon icon={faUser} size="xl" />
        </div>

        <div className="flex flex-col items-start">
          <p className="text-2xl sm:text-3xl font-semibold">{name}</p>
          <p className="text-xl font-light text-[#8a88de]">{email}</p>
        </div>
      </div>

      <div className="bg-[#f7f7f7] rounded-lg p-1 sm:p-2 flex flex-col items-center text-black">
        <p className="font-bold text-xl">
          {rank} / {participantsCount}
        </p>
        <p className="text-[#8a88de]">Rank</p>
      </div>
    </div>
  );
}

export default UserRankCard;
