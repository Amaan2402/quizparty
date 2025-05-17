import React from "react";
import RecentActivityItem from "./RecentActivityItem";

function RecentActivity() {
  return (
    <div className="bg-[#252474] mt-2 p-3 text-white rounded-lg shadow-sm h-[30%]">
      <h1 className="text-2xl font-medium">Your recent activity</h1>

      <div className="flex flex-col items-start p-1">
        <RecentActivityItem title={"Math Quiz"} score={"8 / 10"} />
        <RecentActivityItem title={"Science Project"} score={"9 / 10"} />
        <RecentActivityItem title={"History Assignment"} score={"7 / 10"} />
        <RecentActivityItem title={"Art Project"} score={"3 / 10"} />
      </div>
    </div>
  );
}

export default RecentActivity;
