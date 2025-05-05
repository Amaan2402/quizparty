"use client";
import AddQuestions from "@/components/new-quiz/AddQuestions";
import Header from "@/components/new-quiz/Header";
import QuestionsList from "@/components/new-quiz/QuestionsList";
import { getQuiz } from "@/utils/quiz";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type Quiz = {
  title: string;
  description?: string;
  creatorId: string;
  status: string;
  timePerQuestion: number;
  createdAt: string;
  maxParticipants: number;
  questions: {
    id: string;
    questionText: string;
    questionIndex: number;
    options: {
      index: number;
      text: string;
    }[];
    correctOption: number;
  }[];
};

export default function Page() {
  const quizId = useParams().quizId;
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (quizId && typeof quizId === "string") {
      toast.promise(getQuiz(quizId), {
        loading: "Loading quiz...",
        success: (data) => {
          setQuiz(data.data);
          setLoading(false);
          return `Quiz loaded successfully!`;
        },
        error: (error) => {
          console.error("Error loading quiz:", error);
          setError(error.response?.data?.message || "Something went wrong");
          setLoading(false);
          return `Error loading quiz: ${
            error.response?.data?.message || "Something went wrong"
          }`;
        },
      });
    }
  }, [quizId]);
  if (error) {
    return <div>Error: {error}</div>;
  }

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Error: {error}</div>
  ) : quiz ? (
    <div className="min-h-full px-12 mt-2">
      <Header
        title={quiz.title}
        createdAt={quiz.createdAt}
        maxParticipants={quiz.maxParticipants}
        timePerQuestion={quiz.timePerQuestion}
      />
      <div className="flex gap-4 w-full justify-between min-h-full text-white">
        <AddQuestions />
        <QuestionsList />
      </div>
    </div>
  ) : null;
}
