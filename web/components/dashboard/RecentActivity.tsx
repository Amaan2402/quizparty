import React from "react";
import RecentActivityItem from "./RecentActivityItem";

function RecentActivity({
  data,
}: {
  data: { quizName: string; score: number }[];
}) {
  if (data.length === 0) {
    return (
      <div className="bg-[#252474] mt-2 p-3 text-white rounded-lg shadow-sm h-[30%]">
        <h1 className="text-2xl font-medium">Your recent activity</h1>
        <p>No recent activity found.</p>
      </div>
    );
  }
  return (
    <div className="bg-[#252474] mt-2 p-3 text-white rounded-lg shadow-sm h-[30%]">
      <h1 className="text-2xl font-medium">Your recent activity</h1>

      <div className="flex flex-col items-start p-1">
        {data.map((item, idx) => (
          <RecentActivityItem
            title={item.quizName}
            score={item.score}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
}

export default RecentActivity;
