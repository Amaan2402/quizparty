import React from "react";
import ManualQuestion from "./ManualQuestion";
import AiQuestion from "./AiQuestion";

function AddQuestions() {
  return (
    <div className="w-full ">
      <ManualQuestion />
      <AiQuestion />
    </div>
  );
}

export default AddQuestions;
