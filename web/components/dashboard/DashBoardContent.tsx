import React from "react";
import CardSection from "./CardSection";
import LineChart from "../charts/LineChart";
import RecentQuizTable from "./RecentQuizTable";
import ProfileSideBar from "./ProfileSideBar";
import RecentActivity from "./RecentActivity";
import ProfileSideBarButtons from "./ProfileSideBarButtons";

function DashBoardContent() {
  return (
    <div className="flex px-6">
      <div className="p-2 w-7/12">
        <h1 className="text-4xl text-white font-medium">Welcome back John</h1>
        <CardSection />
        {/* Chart */}
        <LineChart />
        {/* recentquiz table*/}
        <RecentQuizTable />
      </div>
      <div className="w-5/12 p-2">
        <ProfileSideBar />
        <RecentActivity />
        <ProfileSideBarButtons />
      </div>
    </div>
  );
}

export default DashBoardContent;
