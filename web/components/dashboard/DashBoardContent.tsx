"use client";

import React, { useEffect, useState } from "react";
import CardSection from "./CardSection";
import LineChartDashBoard from "../charts/LineChartDashBoard";
import RecentQuizTable from "./RecentQuizTable";
import ProfileSideBar from "./ProfileSideBar";
import RecentActivity from "./RecentActivity";
import ProfileSideBarButtons from "./ProfileSideBarButtons";
import { fetchUserdashboardData } from "@/utils/result";
import toast from "react-hot-toast";

function DashBoardContent() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const [cardData, setCardData] = useState<{
    totalQuizzesCreated: number;
    totalParticipantsAcrossQuizzes: number;
    avgParticipantsPerQuiz: number;
  } | null>(null);
  const [lineChartData, setLineChartData] = useState([]);
  const [recentQuizData, setRecentQuizData] = useState([]);
  const [userProfileData, setUserProfileData] = useState<{
    name: string;
    email: string;
    totalQuizzesParticipated: number;
  } | null>(null);
  const [recentActivityData, setRecentActivityData] = useState([]);

  useEffect(() => {
    toast.promise(fetchUserdashboardData(), {
      loading: null,
      success: (data) => {
        console.log(data);
        setCardData(data.data.top3Cards);
        setLineChartData(data.data.lineChart);
        setRecentQuizData(data.data.recent3QuizzesCreated);
        setUserProfileData(data.data.userProfileCard);
        setRecentActivityData(data.data.userRecentActivity);
        setLoading(false);
        return null;
      },
      error: (err) => {
        setError(err.respose.data.message || "Something went wrong");
        setLoading(false);
        return null;
      },
    });
  }, []);

  if (error) {
    <div className="text-red-500">{error}</div>;
  }

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="flex px-6 flex-col md:flex-row">
      <div className="p-2 w-full md:w-7/12">
        <h1 className="text-2xl md:text-4xl text-white font-medium">
          Welcome back {userProfileData?.name}
        </h1>
        <CardSection data={cardData} />
        <LineChartDashBoard data={lineChartData} />
        <RecentQuizTable data={recentQuizData} />
      </div>
      <div className="md:w-5/12 p-2">
        <ProfileSideBar data={userProfileData} />
        <RecentActivity data={recentActivityData} />
        <ProfileSideBarButtons />
      </div>
    </div>
  );
}

export default DashBoardContent;
