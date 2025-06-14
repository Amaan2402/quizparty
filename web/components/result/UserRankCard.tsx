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
    <div className="flex py-1 sm:py-3 sm:px-4 px-2 justify-between items-center bg-[#3f3faf] rounded-xl shadow-md">
      <div className="flex items-center gap-3 sm:gap-10">
        <div className="bg-[#252474] rounded-full h-12 w-12 flex items-center justify-center p-2 text-white">
          <FontAwesomeIcon icon={faUser} size={`1x`} />
        </div>

        <div className="flex flex-col items-start">
          <p className="text-lg sm:text-3xl font-semibold">{name}</p>
          <p className="text-sm font-light text-[#8a88de]">{email}</p>
        </div>
      </div>

      <div className="bg-[#f7f7f7] rounded-lg p-1 sm:p-2 flex flex-col items-center text-black">
        <p className="sm:font-bold font-semibold text-sm sm:text-lg">
          {rank} / {participantsCount}
        </p>
        <p className="text-[#8a88de] text-xs">Rank</p>
      </div>
    </div>
  );
}

export default UserRankCard;
