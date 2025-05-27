import { useQuestionModalStore } from "@/store/useQuestionModalStore";
import { useQuestionStore } from "@/store/useQuestionStore";
import { deleteQuizQuestion } from "@/utils/question";
import {
  faGrip,
  faLayerGroup,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import toast from "react-hot-toast";

function QuestionsList() {
  const [isDeleteButtonDisabled, setIsDeleteButtonDisabled] = useState(false);

  const { questionsList: questions, deleteQuestion } = useQuestionStore();
  const { handleOpen } = useQuestionModalStore();

  const handleDeleteQuestion = (id: string) => {
    setIsDeleteButtonDisabled(true);
    toast.promise(deleteQuizQuestion(id), {
      loading: "Deleting question...",
      success: (data) => {
        console.log(data);
        deleteQuestion(id);
        toast.success("Question deleted successfully.");
        setIsDeleteButtonDisabled(false);
        return null;
      },
      error: (err) => {
        console.log(err);
        setIsDeleteButtonDisabled(false);
        return "Error deleting question.";
      },
    });
  };

  return (
    <div
      className="bg-[#23256b] mb-5 border-b-6 border-[#4549aa] w-full overflow-y-auto rounded-lg shadow-2xl hide-scrollbar"
      style={{ maxHeight: "410px" }}
    >
      <div className="sticky top-0 w-full bg-[#2d2d7f] p-4 flex justify-between items-center ">
        <div className=" flex items-center gap-2 text-xl font-medium">
          <FontAwesomeIcon icon={faLayerGroup} color="546efe" />
          <h1>Questions</h1>
        </div>

        <div className="flex items-center gap-2">
          <p className="font-light">Question Count:</p>
          <p className="font-medium">{questions.length}</p>
        </div>
      </div>
      {questions.map(
        ({ questionText, id, options, questionIndex, correctOption }) => (
          <div
            key={id}
            className="text-white m-4 cursor-pointer bg-[#2d2d7f] mb-3 flex items-center rounded-md justify-between p-2 px-4"
            onClick={() =>
              handleOpen({
                questionText,
                id,
                options,
                questionIndex,
                correctOption,
              })
            }
          >
            <p>{questionText}</p>

            <div className="flex justify-between items-center gap-4">
              <FontAwesomeIcon
                icon={faGrip}
                color="#9ea0e6"
                className="cursor-pointer"
              />
              <button
                className="cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteQuestion(id);
                }}
                disabled={isDeleteButtonDisabled}
              >
                <FontAwesomeIcon icon={faTrash} color="#9ea0e6" />
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default QuestionsList;
