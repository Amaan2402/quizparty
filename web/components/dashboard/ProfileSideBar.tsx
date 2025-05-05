import React from "react";

function ProfileSideBar() {
  return (
    <div className="bg-[#3f3faf] relative text-white mt-12 p-3 rounded-md h-[30%]">
      <div className="rounded-full bg-white text-black h-36 w-36 absolute -top-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        user pic
      </div>

      <h1 className="text-2xl font-medium pt-24">Quiz performance</h1>
    </div>
  );
}

export default ProfileSideBar;
