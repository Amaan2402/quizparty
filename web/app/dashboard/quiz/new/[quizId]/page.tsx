"use client";
import AddQuestions from "@/components/new-quiz/AddQuestions";
import Header from "@/components/new-quiz/Header";
import QuestionsList from "@/components/new-quiz/QuestionsList";
import { getQuiz, getQuizQuestions } from "@/utils/quiz";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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

type Question = {
  id: string;
  questionText: string;
  questionIndex: number;
  options: {
    index: number;
    text: string;
  }[];
  correctOption: number;
};

export default function Page() {
  const params = useParams();
  const quizId = params.quizId as string;
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [isQuizReady, setIsQuizReady] = useState(false);

  const toastIdRef = useRef<string | null>(null);

  const [questions, setQuestions] = useState<Question[]>([]);

  const handleAddQuestionState = (questions: Question[]) => {
    setQuestions((prev) => [...prev, ...questions]);
  };

  const deleteQuestionState = (id: string) => {
    setQuestions((prev) => {
      return prev.filter((question) => question.id !== id);
    });
  };

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

  useEffect(() => {
    if (questions.length > 0) {
      setIsQuizReady(true);
    } else {
      setIsQuizReady(false);
    }
  }, [questions]);

  useEffect(() => {
    const fetchQuizQuestions = () => {
      toast.promise(getQuizQuestions(quizId), {
        loading: null,
        success: (data) => {
          setQuestions((prev) => {
            return [...prev, ...data.data];
          });
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
    <div className="px-12 mt-2">
      <Header
        title={quiz.title}
        createdAt={quiz.createdAt}
        maxParticipants={quiz.maxParticipants}
        timePerQuestion={quiz.timePerQuestion}
      />
      <div className="flex gap-4 w-full justify-between text-white">
        <AddQuestions
          quizId={quizId}
          handleAddQuestionState={handleAddQuestionState}
        />
        <div className="w-full flex flex-col justify-between">
          <QuestionsList
            questions={questions}
            deleteQuestionState={deleteQuestionState}
          />

          {isQuizReady ? (
            <button className="cursor-pointer relative group inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 rounded-xl shadow-lg hover:shadow-xl animate-gradients group-hover:animate-pulse transition duration-500 ease-in-out">
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
  ) : null;
}
