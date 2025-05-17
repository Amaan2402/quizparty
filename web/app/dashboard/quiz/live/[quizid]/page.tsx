"use client";

import Header from "@/components/live/Header";
import MainContent from "@/components/live/MainContent";
import { getQuiz } from "@/utils/quiz";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
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
  id: string;
  user: {
    name: string;
    email: string;
    id: string;
  };
};

function Page() {
  const { quizId } = useParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [participants, setParticipants] = useState<Participant[]>([]);

  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isQuizEnded, setIsQuizEnded] = useState(false);

  const [question, setQuestion] = useState<string>("");

  const handleSetStartQuiz = (status: boolean) => {
    setIsQuizStarted(status);
  };

  const socketRef = useRef<Socket | null>(null);

  // Initialize socket connection when quiz is live
  useEffect(() => {
    if (
      (quiz?.status === "LIVE" || quiz?.status === "STARTED") &&
      !socketRef.current
    ) {
      socketRef.current = io("http://localhost:3005", {
        reconnectionAttempts: 3,
        reconnectionDelay: 3000,
        withCredentials: true,
      });

      socketRef.current.emit("join-room", {
        quizId: quizId,
        type: "CREATOR",
      });

      socketRef.current.on("new-participant", (data) => {
        const participant = data.data.participant;
        setParticipants((prevParticipants) => [
          ...prevParticipants,
          participant,
        ]);
        toast("New participant joined", {
          icon: <FontAwesomeIcon icon={faCircleCheck} beatFade color="green" />,
          style: {
            pointerEvents: "none",
            fontWeight: "bold",
          },
          position: "bottom-right",
        });
      });

      socketRef.current.on("new-question", (data) => {
        setQuestion(data.question.questionText);
        setQuiz((prev) => {
          if (!prev) return prev; // Ensure prev is not null
          return {
            ...prev,
            status: QuizStatus.started,
          };
        });
      });

      socketRef.current.on("quiz-completed", (data) => {
        if (data.status) {
          setIsQuizEnded(true);
        }
      });

      socketRef.current.on("participant_disconnected", (data) => {
        const participantId = data.participantId;
        setParticipants((prev) => prev.filter((p) => p.id !== participantId));
      });
    }

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null; // clean up ref too
      }
    };
  }, [quiz?.status, quizId]);

  useEffect(() => {
    const fetchQuizDetails = async (quizId: string) => {
      setLoading(true);
      setError(null);
      toast.promise(getQuiz(quizId), {
        loading: "Loading quiz details...",
        success: (data) => {
          console.log(data);
          setQuiz(data.data);
          setParticipants([...data.data.participants]);
          setLoading(false);
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

  const toastIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (quiz?.status === "LIVE" && participants.length > 0) {
      if (!toastIdRef.current) {
        toastIdRef.current = toast("You are ready to start Quiz.", {
          duration: Infinity, // infinite duration
          icon: <FontAwesomeIcon icon={faCircleCheck} beatFade color="green" />, // corrected icon syntax
          style: {
            pointerEvents: "none", // disables all interaction
            fontWeight: "bold",
          },
          position: "bottom-right",
        });
      }
    } else {
      if (toastIdRef.current) {
        toast.dismiss(toastIdRef.current); // dismiss the toast if not live or no participants
        toastIdRef.current = null; // reset the toastIdRef
      }
    }
  }, [participants, quiz?.status]);

  if (isQuizEnded) {
    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Quiz has ended</h1>
        <p className="mt-4 text-white font-semibold text-lg">
          Results will be available soon.
        </p>
      </div>
    );
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading quiz details: {error}</div>;
  }

  if (quiz?.status === "CREATED") {
    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Quiz is not live</h1>
        <p className="mt-4 text-white font-semibold text-lg">
          Please update the quiz to LIVE to view it.
        </p>
      </div>
    );
  }

  if (quiz?.status === "ENDED") {
    const resultPageLink = `/dashboard/quiz/result/${quizId}`;
    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Quiz has ended</h1>
        <p className="mt-4 text-white font-semibold text-lg">
          Results will be available soon.
        </p>
        <Link href={resultPageLink} className="mt-4 hover:underline text-blue-500">
          View Results
        </Link>
      </div>
    );
  }

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
        <MainContent
          quizId={quiz.id}
          participants={participants}
          isQuizStarted={isQuizStarted}
          question={question}
          handleSetStartQuiz={handleSetStartQuiz}
        />
      </div>
    )
  );
}

export default Page;
