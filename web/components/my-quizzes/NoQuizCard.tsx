import { useModalStore } from "@/store/useQuizModalStore";
import Image from "next/image";
import React from "react";

function NoQuizCard() {
  const { handleOpen } = useModalStore();
  return (
    <div className="w-full bg-[#252474] rounded-md flex items-center justify-center">
      <div className="w-[200px] h-[150px] flex items-center justify-center">
        <Image
          src="https://nyc.cloud.appwrite.io/v1/storage/buckets/681203a2000746e35401/files/6820816b0032667a8053/view?project=6809910a000e66c57d35&mode=admin"
          alt="No Quiz Available"
          height={1536}
          width={500}
        />
      </div>
      <div className="text-white">
        <h1 className="font-medium text-lg sm:text-2xl">
          You haven&apos;t created any quizzes yet
        </h1>
        <button
          className="font-medium bg-[#3439a2] text-lg sm:text-xl py-1 px-4 rounded-2xl mt-3"
          onClick={() => handleOpen(false)}
        >
          Create Quiz
        </button>
      </div>
    </div>
  );
}

export default NoQuizCard;
