import React from "react";

function Header({
  status,
  totalParticipants,
  timePerQuestion,
  title,
}: {
  status: string;
  totalParticipants: number;
  timePerQuestion: number;
  title: string;
}) {
  return (
    <div className="p-4 bg-[#3f3faf] rounded-md text-white md:px-12 lg:px-28 relative">
      <h1 className="font-semibold text-xl md:text-3xl">{title}</h1>
      <div className="flex gap-2 md:gap-4 md:max-w-10/12 justify-between items-center mt-2">
        <p className="w-[33%]">Status</p>
        <p className="w-[33%]">Total Participants</p>
        <p className="w-[33%]">Time per question</p>
      </div>

      <div className="flex justify-between md:max-w-10/12 md:text-lg items-center mt-2">
        <p className="w-[32%] font-medium">{status}</p>
        <p className="w-[32%] font-medium">{totalParticipants}</p>
        <p className="w-[32%] font-medium">{timePerQuestion}</p>
      </div>
    </div>
  );
}

export default Header;
