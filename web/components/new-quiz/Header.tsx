import { useModalStore } from "@/store/useQuizModalStore";
import {
  faBook,
  faHourglassEnd,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Header({
  title,
  timePerQuestion,
  maxParticipants,
}: {
  title: string;
  timePerQuestion: number;
  maxParticipants: number;
}) {
  const { handleOpen } = useModalStore();
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 text-white p-2 w-full">
      <div className="flex items-center justify-between w-full md:max-w-6/12">
        <div className="flex items-center w-7/12 gap-2 mb-2 text-2xl sm:text-3xl">
          <FontAwesomeIcon icon={faBook} style={{ color: "#4145a4" }} />
          <h1>{title}</h1>
        </div>

        <div>
          <button
            className="bg-[#3b3f9b] text-lg sm:text-xl px-3 py-1 font-medium rounded-md"
            onClick={() => handleOpen(true)}
          >
            Edit
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 w-full">
          <FontAwesomeIcon icon={faHourglassEnd} fade />
          <p className="font-light">
            <span className="font-medium">{timePerQuestion}</span> seconds per
            question
          </p>
        </div>

        {/* <FontAwesomeIcon
          icon={faGripLinesVertical}
          className="text-xl"
          color="orange"
        /> */}

        <div className="flex w-full items-center gap-2 justify-end">
          <FontAwesomeIcon icon={faUser} />
          <p className="font-light">
            Max participants -{" "}
            <span className="font-medium">{maxParticipants}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
