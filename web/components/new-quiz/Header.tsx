import {
  faBook,
  faGripLinesVertical,
  faHourglassEnd,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Header({
  title,
  timePerQuestion,
  maxParticipants,
  createdAt,
}: {
  title: string;
  timePerQuestion: number;
  maxParticipants: number;
  createdAt: string;
}) {
  return (
    <div className="flex justify-between items-center text-white p-2 w-full">
      <div className="flex gap-10 w-8/12">
        <div className="flex items-center gap-2 mb-2 text-3xl">
          <FontAwesomeIcon icon={faBook} style={{ color: "#4145a4" }} />
          <h1>{title}</h1>
        </div>
        <div className="flex items-center gap-2 w-full">
          <div className="flex items-center gap-2 text-lg">
            <FontAwesomeIcon icon={faHourglassEnd} fade />
            <p className="font-light">
              <span className="font-medium">{timePerQuestion}</span> seconds per
              question
            </p>
          </div>

          <FontAwesomeIcon
            icon={faGripLinesVertical}
            className="text-xl"
            color="orange"
          />

          <div className="flex items-center gap-2 text-lg">
            <FontAwesomeIcon icon={faUser} />
            <p className="font-light">
              Max participants -{" "}
              <span className="font-medium">{maxParticipants}</span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <button className="bg-[#3b3f9b] text-xl px-3 py-1 font-medium rounded-md">
          Edit
        </button>
      </div>
    </div>
  );
}

export default Header;
