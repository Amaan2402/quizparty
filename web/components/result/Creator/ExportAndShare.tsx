import {
  faCopy,
  faEnvelope,
  faFileCsv,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function ExportAndShare() {
  return (
    <div className="mt-5 bg-[#252474] rounded-lg p-4">
      <h1 className="text-xl font-semibold">Export and Share</h1>

      <div className="flex items-center gap-2 mt-2 cursor-pointer">
        <FontAwesomeIcon icon={faFileCsv} />
        <p>Export CSV</p>
      </div>

      <div className="flex items-center gap-2 mt-2 cursor-pointer">
        <FontAwesomeIcon icon={faFilePdf} />
        <p>Export PDF</p>
      </div>

      <hr className="border-[#6b6bc8] my-4" />

      <div className="flex items-center gap-2 cursor-pointer">
        <FontAwesomeIcon icon={faCopy} />
        <p>Copy leaderboard link</p>
      </div>

      <div className="flex items-center gap-2 mt-2 cursor-pointer">
        <FontAwesomeIcon icon={faEnvelope} />
        <p>Send quiz results via email to all participants</p>
      </div>
    </div>
  );
}

export default ExportAndShare;
