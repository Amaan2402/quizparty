"use client";

import Header from "@/components/live/Header";
import MainContent from "@/components/live/MainContent";
import { getQuiz } from "@/utils/quiz";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { io, Socket } from "socket.io-client";

enum QuizStatus {
  created = "CREATED",
  live = "LIVE",
  started = "STARTED",
  ended = "ENDED",
  null = "NULL",
}

type Quiz = {
  id: string;
  title: string;
  description?: string;
  timePerQuestion: number;
  totalParticipants: number;
  reward?: {
    brand: string;
    voucherCode: string;
  };
  status?: QuizStatus;
};

type Participant = {
  name: string;
  email: string;
  id: string;
};

function Page() {
  const { quizId } = useParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [participants, setParticipants] = useState<Participant[]>([]);

  const socketRef = useRef<Socket | null>(null);

  // Initialize socket connection when quiz is live
  useEffect(() => {
    if (quiz?.status === "LIVE" && !socketRef.current) {
      socketRef.current = io("http://localhost:3005", {
        reconnectionAttempts: 3,
        reconnectionDelay: 3000,
      });

      socketRef.current.on(
        "new-participant",
        ({ id, name, email }: Participant) => {
          setParticipants((prevParticipants) => [
            ...prevParticipants,
            { id, name, email },
          ]);
          toast("New participant joined", {
            icon: (
              <FontAwesomeIcon icon={faCircleCheck} beatFade color="green" />
            ),
            style: {
              pointerEvents: "none",
              fontWeight: "bold",
            },
            position: "bottom-right",
          });
        }
      );

      socketRef.current.on("disconnect", () => {
        console.log("Disconnected from socket");
      });
    }

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null; // clean up ref too
      }
    };
  }, [quiz?.status]);

  useEffect(() => {
    const fetchQuizDetails = async (quizId: string) => {
      setLoading(true);
      setError(null);
      toast.promise(getQuiz(quizId), {
        loading: "Loading quiz details...",
        success: (data) => {
          console.log(data);
          setLoading(false);
          setQuiz(data.data);
          return `Quiz details loaded successfully!`;
        },
        error: (error) => {
          console.error(error);
          setLoading(false);
          setError(error.message);
          return `Error loading quiz details: ${error.message}`;
        },
      });
    };
    if (quizId) {
      fetchQuizDetails(quizId as string);
    }
  }, [quizId]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading quiz details: {error}</div>;
  }

  if (quiz?.status !== "LIVE") {
    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Quiz is not live</h1>
        <p className="mt-4 text-white font-semibold text-lg">
          Please update the quiz to LIVE to view it.
        </p>
      </div>
    );
  }
  toast("You are ready to start Quiz.", {
    duration: Infinity, // infinite duration
    icon: <FontAwesomeIcon icon={faCircleCheck} beatFade color="green" />, // corrected icon syntax
    style: {
      pointerEvents: "none", // disables all interaction
      fontWeight: "bold",
    },
    position: "bottom-right",
  });

  return (
    quiz &&
    quiz.status && (
      <div className="p-4 px-20 overflow-hidden">
        <Header
          title={quiz.title}
          status={quiz.status}
          totalParticipants={quiz.totalParticipants}
          timePerQuestion={quiz.timePerQuestion}
        />
        <MainContent quizId={quiz.id} participants={participants} />
      </div>
    )
  );
}

export default Page;
