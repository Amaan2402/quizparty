import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import React, { useState, useEffect } from "react";
import Image from "next/image";

function QuestionTimeSideBar({
  timePerQuestion,
  questionIndex,
  handleQuestionChange,
}: {
  timePerQuestion: number;
  questionIndex: number;
  handleQuestionChange: (val: boolean) => void;
}) {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prev) => {
        if (prev >= timePerQuestion) {
          clearInterval(timerInterval);
          handleQuestionChange(true);
          return 0; // or return prev to stop at timePerQuestion
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(timerInterval); // cleanup on unmount
  }, [timePerQuestion, questionIndex, handleQuestionChange]);

  return (
    <div className="md:w-4/12 flex flex-col items-center">
      <div style={{ width: 170, height: 170 }}>
        <CircularProgressbar
          minValue={0}
          maxValue={timePerQuestion}
          value={timer}
          text={(timePerQuestion - timer).toString()}
          styles={buildStyles({
            textColor: "#ffffff",
            pathColor: "#2e3596",
            trailColor: "#414ab8",
          })}
        />
      </div>

      <div className="mt-3 text-white flex items-center gap-2 md:block">
        <p className="text-lg">This question: </p>
        <p className="text-lg font-semibold">{timePerQuestion} seconds</p>
      </div>

      <div className="hidden md:flex md:flex-col md:items-center md:justify-center md:mt-5 md:relative">
        <div className="bg-[#2a3191] w-[140px] h-[140px] rounded-full"></div>

        <div className="absolute top-0 w-[250px] h-[250px] flex items-center justify-center">
          <Image
            src="https://nyc.cloud.appwrite.io/v1/storage/buckets/681203a2000746e35401/files/68232829002d1ba2d320/view?project=6809910a000e66c57d35&mode=admin"
            alt="illustration"
            height={1024}
            width={1024}
          />
        </div>
      </div>
    </div>
  );
}

export default QuestionTimeSideBar;
