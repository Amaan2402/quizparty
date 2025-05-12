import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="flex justify-between items-center p-4 bg-[#3f3faf] rounded-md text-white px-24">
      <div className="w-8/12">
        <h1 className="font-semibold text-3xl">Quiz title</h1>
        <div className="flex gap-4 justify-between items-center mt-2 max-w-8/12">
          <p className="w-[30%]">Status</p>
          <p className="w-[30%]">Total Participants</p>
          <p className="w-[30%]">Time per question</p>
        </div>

        <div className="flex justify-between items-center mt-2 max-w-8/12">
          <p className="w-[30%]">Quiz status</p>
          <p>|</p>
          <p className="w-[30%]">participants count</p>
          <p>|</p>
          <p className="w-[30%]">time per question</p>
        </div>
      </div>

      <div className="w-2/12 flex justify-end absolute right-10 top-25">
        <Image
          src="https://nyc.cloud.appwrite.io/v1/storage/buckets/681203a2000746e35401/files/682126520013f61e2acd/view?project=6809910a000e66c57d35&mode=admin"
          alt="Quiz Image"
          height={1536}
          width={1024}
        />
      </div>
    </div>
  );
}

export default Header;
