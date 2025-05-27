import React from "react";

type DataProps = {
  name: string;
  email: string;
  totalQuizzesParticipated: number;
} | null;

function ProfileSideBar({ data }: { data: DataProps }) {
  return (
    <div className="bg-[#3f3faf] relative text-white mt-12 p-3 rounded-md h-[30%]">
      <div className="rounded-full bg-white text-black h-36 w-36 absolute -top-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        user pic
      </div>

      <div>
        <h1 className="text-2xl font-semibold mt-16">{data?.name}</h1>
        <p className="text-[#6688e0]">{data?.email}</p>
        <div className="mt-2 text-sm flex items-center gap-5">
          {data?.totalQuizzesParticipated && (
            <div className="flex items-center justify-around bg-[#252474] px-3 gap-3 py-1 text-lg rounded-lg">
              <h1 className="font-bold">{data?.totalQuizzesParticipated}</h1>
              <p className="">Quizzes Participated</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileSideBar;
