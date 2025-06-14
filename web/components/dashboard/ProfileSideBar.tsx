import React from "react";

type DataProps = {
  name: string;
  email: string;
  totalQuizzesParticipated: number;
} | null;

function ProfileSideBar({ data }: { data: DataProps }) {
  return (
    <div className="bg-[#3f3faf] relative text-white mt-12 p-3 rounded-md h-[30%]">
      <div className="rounded-full bg-white text-black h-26 w-26 md:h-36 md:w-36 absolute -top-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        user pic
      </div>

      <div>
        <h1 className="sm:text-xl md:text-2xl font-semibold mt-8 md:mt-20 lg:mt-16">
          {data?.name}
        </h1>
        <p className="text-[#6688e0] text-sm">{data?.email}</p>
        <div className="mt-2 text-sm sm:text-base flex items-center gap-5">
          {data?.totalQuizzesParticipated && (
            <div className="flex items-center justify-around bg-[#252474] px-3 gap-3 py-1 md:text-lg rounded-lg">
              <h1 className="font-medium sm:font-bold">
                {data?.totalQuizzesParticipated}
              </h1>
              <p className="">Quizzes Participated</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileSideBar;
