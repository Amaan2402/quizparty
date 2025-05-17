"use client";

import MainContent from "@/components/result/MainContent";
import { longPollResults } from "@/utils/quiz";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function Page() {
  const params = useParams();
  const [results, setResults] = useState([]);
  const [user, setUser] = useState<{
    userId: string;
    userType: string;
  } | null>(null);
  const [quizTitle, setQuizTitle] = useState<string>();
  const [avgScore, setAvgScore] = useState<number | null>(null);
  const [lowestScore, setLowestScore] = useState<number | null>(null);
  const [scoreDistributionGraph, setScoreDistributionGraph] = useState<
    { id: string; quizId: string; count: number; label: string }[]
  >([]);
  const [questions, setQuestions] = useState<
    {
      id: string;
      questionText: string;
      options: {
        text: string;
        index: number;
      }[];
      correctOption: number;
      CorrectAnswerPercentage: number;
    }[]
  >([]);
  const [totalParticiopants, setTotalParticipants] = useState<number | null>(
    null
  );

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { quizId } = params;

  useEffect(() => {
    let isActive = true;
    const controller = new AbortController();

    const fetchResults = async () => {
      if (!isActive) {
        return;
      }
      const data = await longPollResults(quizId as string, controller.signal);
      if (data.status === 408) {
        console.log("Polling...");
        fetchResults();
        return;
      } else if (data.status === 200) {
        console.log(data);
        setResults(data.results);
        setUser({
          userId: data.user,
          userType: data.userType,
        });
        setQuizTitle(data.quizTitle);

        if (data.userType === "CREATOR") {
          setAvgScore(data.avgScore);
          setLowestScore(data.lowestScore);
          setScoreDistributionGraph(data.scoreDistributionGraph);
          setQuestions(data.questions);
          setTotalParticipants(data.totalParticipants);
        }

        setLoading(false);
      } else {
        setError("An error occurred while fetching results.");
        setLoading(false);
      }
    };
    if (quizId && quizId.length > 0) {
      fetchResults();
    }

    return () => {
      console.log("Cleaning up...");
      controller.abort();
      console.log("Aborted");
      isActive = false;
    };
  }, [quizId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <MainContent
      user={user}
      results={results}
      title={quizTitle || ""}
      avgScore={avgScore || 0}
      lowestScore={lowestScore || 0}
      scoreDistributionGraph={scoreDistributionGraph}
      questions={questions}
      totalParticipants={totalParticiopants || 0}
    />
  );
}

export default Page;
