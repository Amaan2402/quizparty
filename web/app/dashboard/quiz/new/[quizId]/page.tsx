"use client";
import AddQuestions from "@/components/new-quiz/AddQuestions";
import Header from "@/components/new-quiz/Header";
import QuestionsList from "@/components/new-quiz/QuestionsList";
import { useQuestionStore } from "@/store/useQuestionStore";
import { useQuizStore } from "@/store/useQuizStore";
import { getQuizQuestions } from "@/utils/question";
import { getQuiz } from "@/utils/quiz";
import { updateQuizToLive } from "@/utils/quizStatus";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

enum QuizStatus {
  created = "CREATED",
  live = "LIVE",
  started = "STARTED",
  ended = "ENDED",
  null = "NULL",
}

type Quiz = {
  title: string;
  description?: string;
  timePerQuestion: number;
  maxParticipants: number;
  reward?: {
    brand: string;
    voucherCode: string;
  };
  status?: QuizStatus;
};

export default function Page() {
  const params = useParams();
  const quizId = params.quizId as string;
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isQuizReady, setIsQuizReady] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const toastIdRef = useRef<string | null>(null);

  const {
    setQuizData,
    title,
    description,
    reward,
    timePerQuestion,
    maxParticipants,
    status,
  } = useQuizStore();

  const { questionsList, setQuestionsList } = useQuestionStore();

  // This effect handles the toast notification for quiz readiness
  useEffect(() => {
    if (isQuizReady) {
      toastIdRef.current = toast("You are ready to go live.", {
        duration: Infinity, // infinite duration
        icon: <FontAwesomeIcon icon={faCircleCheck} beatFade color="green" />, // corrected icon syntax
        style: {
          pointerEvents: "none", // disables all interaction
          fontWeight: "bold",
        },
        position: "bottom-right",
      });
    } else if (!isQuizReady && toastIdRef.current) {
      toast.dismiss(toastIdRef.current);
      toastIdRef.current = null;
    }
  }, [isQuizReady]);

  const handleUpdateQuizToLive = () => {
    if (isQuizReady) {
      setIsButtonDisabled(true);
      toast.promise(updateQuizToLive(quizId), {
        loading: "Updating quiz to live...",
        success: () => {
          setIsButtonDisabled(false);
          window.location.href = `/dashboard/quiz/live/${quizId}`;
          return "Quiz is now live!";
        },
        error: (error) => {
          setIsButtonDisabled(false);
          console.error("Error updating quiz to live:", error);
          return `Error updating quiz to live: ${
            error.response?.data?.message || "Something went wrong"
          }`;
        },
      });
    }
  };

  // This effect checks if the quiz is ready
  useEffect(() => {
    if (quiz?.maxParticipants && quiz?.timePerQuestion) {
      if (
        questionsList.length > 0 &&
        quiz?.maxParticipants > 0 &&
        quiz?.timePerQuestion > 0
      ) {
        setIsQuizReady(true);
      } else {
        setIsQuizReady(false);
      }
    }
  }, [
    questionsList,
    quiz?.timePerQuestion,
    quiz?.maxParticipants,
    quiz?.title,
  ]);

  // This effect fetches quiz questions when the quizId changes
  useEffect(() => {
    const fetchQuizQuestions = () => {
      toast.promise(getQuizQuestions(quizId), {
        loading: null,
        success: (data) => {
          setQuestionsList(data.data);
          return null;
        },
        error: (error) => {
          console.error("Error loading quiz questions:", error);
          return `Error loading quiz questions: ${
            error.response?.data?.message || "Something went wrong"
          }`;
        },
      });
    };

    if (quizId) {
      fetchQuizQuestions();
    }
  }, [quizId]);

  // This effect fetches the quiz data when the quizId changes
  useEffect(() => {
    if (quizId && typeof quizId === "string") {
      toast.promise(getQuiz(quizId), {
        loading: "Loading quiz...",
        success: (data) => {
          setQuizData({ ...data.data });
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
  }, [quizId, setQuizData]);

  useEffect(() => {
    setQuiz({
      title,
      description,
      reward,
      timePerQuestion,
      maxParticipants,
      status,
    });
  }, [title, description, reward, timePerQuestion, maxParticipants, status]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Error: {error}</div>
  ) : quiz?.status === "CREATED" && quiz ? (
    <div className="md:px-12 p-2 mt-2 pb-20 md:pb-0">
      <Header
        title={quiz.title}
        maxParticipants={quiz.maxParticipants}
        timePerQuestion={quiz.timePerQuestion}
      />
      <div className="flex flex-col md:flex-row gap-4 w-full justify-between text-white">
        <AddQuestions quizId={quizId} />
        <div className="w-full flex flex-col justify-between mt-3 md:mt-0">
          <QuestionsList />

          {isQuizReady ? (
            <button
              className="cursor-pointer relative group inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 rounded-xl shadow-lg hover:shadow-xl animate-gradients group-hover:animate-pulse transition duration-500 ease-in-out"
              disabled={isButtonDisabled}
              onClick={handleUpdateQuizToLive}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 blur opacity-70 group-hover:opacity-100 transition duration-500 rounded-xl animate-gradient"></span>
              <span className="relative text-xl font-semibold z-10">
                Proceed to Live Room
              </span>
            </button>
          ) : (
            <button
              className="inline-flex items-center justify-center px-6 py-3 text-xl font-semibold text-gray-500 bg-white border border-gray-300 rounded-xl shadow-sm cursor-not-allowed opacity-80"
              disabled
            >
              Proceed to Live Room (Not Ready)
            </button>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div>
      <h1 className="text-2xl font-bold">Quiz is not in CREATED state</h1>
    </div>
  );
}
