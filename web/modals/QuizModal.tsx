"use client";

import { useModalStore } from "@/store/useModalStore";
import { useQuizStore } from "@/store/useQuizStore";
import { createQuiz, editQuiz } from "@/utils/quiz";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function QuizModal() {
  const [reward, setReward] = useState<boolean>(false); // default to No
  const [brand, setBrand] = useState<string>(""); // default to empty stringco
  const [code, setCode] = useState<string>(""); // default to empty string
  const [time, setTime] = useState<number>(1); // default to 0 seconds
  const [title, setTitle] = useState<string>(""); // default to empty string
  const [description, setDescription] = useState<string>(""); // default to empty string
  const [maxParticipants, setMaxParticipants] = useState<number>(0); // default to 0

  const [changedFields, setChangeFields] = useState<Record<string, boolean>>(
    {}
  );

  const { isOpen, handleClose, isEdit } = useModalStore();
  const {
    title: quizTitle,
    description: quizDescription,
    reward: quizReward,
    timePerQuestion: QuizTimePerQuestion,
    maxParticipants: quizMaxParticipants,
    setQuizData,
    quizId,
  } = useQuizStore();

  useEffect(() => {
    if (isEdit) {
      setTitle(quizTitle);
      setDescription(quizDescription || "");
      setReward(quizReward ? true : false);
      setBrand(quizReward ? quizReward?.brand : "");
      setCode(quizReward ? quizReward?.voucherCode : "");
      setTime(QuizTimePerQuestion);
      setMaxParticipants(quizMaxParticipants);
    }
  }, [
    isEdit,
    quizTitle,
    quizDescription,
    quizReward,
    QuizTimePerQuestion,
    quizMaxParticipants,
  ]);

  useEffect(() => {
    const newChangedFields = {
      title: title !== quizTitle,
      description: description !== quizDescription,
      brand: brand !== (quizReward ? quizReward?.brand : ""),
      code: code !== (quizReward ? quizReward?.voucherCode : ""),
      timePerQuestion: time !== QuizTimePerQuestion,
      maxParticipants: maxParticipants !== quizMaxParticipants,
    };
    setChangeFields(newChangedFields);
  }, [title, description, brand, code, time, maxParticipants]);

  const handleCreateQuiz = async () => {
    const data: {
      title: string;
      description?: string;
      maxParticipants: number;
      timePerQuestion: number;
      reward?: {
        brand: string;
        voucherCode: string;
      };
    } = {
      title,
      maxParticipants,
      timePerQuestion: time,
    };

    if (description) {
      data.description = description;
    }
    if (reward) {
      data.reward = {
        brand,
        voucherCode: code,
      };
    }
    const quiz = createQuiz({ ...data });
    toast.promise(quiz, {
      loading: "Creating quiz...",
      success: (data) => {
        console.log(data);
        handleClose(); // Close the modal after quiz creation
        return `Quiz created successfully!`;
      },
      error: (error) => {
        console.error(error);
        return `Error creating quiz: ${
          error.response.data.message || error.message
        }`;
      },
    });
  };

  const handleEditQuiz = async () => {
    console.log("EDIT QUIZ", quizId);
    if (Object.values(changedFields).every((value) => !value)) {
      toast.error("No changes made to the quiz.");
      return;
    }

    const QuizFieldsToUpdate: {
      title?: string;
      description?: string;
      maxParticipants?: number;
      timePerQuestion?: number;
    } = {};
    if (changedFields.title) QuizFieldsToUpdate.title = title;
    if (changedFields.description) QuizFieldsToUpdate.description = description;
    if (changedFields.maxParticipants)
      QuizFieldsToUpdate.maxParticipants = maxParticipants;
    if (changedFields.timePerQuestion)
      QuizFieldsToUpdate.timePerQuestion = time;

    const RewardFieldsToUpdate: {
      brand?: string;
      voucherCode?: string;
      reward?: boolean;
    } = {};
    if (changedFields.brand) RewardFieldsToUpdate.brand = brand;
    if (changedFields.code) RewardFieldsToUpdate.voucherCode = code;

    if (changedFields.brand || changedFields.code) {
      RewardFieldsToUpdate.reward = reward;
    }

    if (!reward) {
      delete RewardFieldsToUpdate.brand;
      delete RewardFieldsToUpdate.voucherCode;
      RewardFieldsToUpdate.reward = false; // Set reward to false if not applicable
    }

    toast.promise(
      editQuiz({
        QuizFieldsToUpdate,
        RewardFieldsToUpdate,
        quizId: quizId || "",
      }),
      {
        loading: "Updating quiz...",
        success: (data) => {
          console.log(data);
          setQuizData({ ...data.data });
          handleClose(); // Close the modal after quiz update
          return `Quiz updated successfully!`;
        },
        error: (error) => {
          console.error(error);
          return `Error updating quiz: ${
            error.response.data.message || error.message
          }`;
        },
      }
    );

    console.log("HERE AFTER UPDATING QUIZ", quizId);
  };

  const handleButtonClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (isEdit) {
      handleEditQuiz();
    } else {
      handleCreateQuiz();
    }
  };

  const handleTogglereward = () => {
    if (reward) {
      setBrand("");
      setCode("");
      setReward(false);
    } else {
      setReward(true);
    }
  };

  if (!isOpen) return null; // Don't render if the modal is not open
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={handleClose}
      ></div>

      <div className="relative bg-[#2f32a1] text-white flex flex-col items-center rounded-xl shadow-lg p-4 px-6 z-60 w-[90%] max-w-md">
        {/* Quiz Image */}
        <div className="h-[100px] w-[100px]">
          <Image
            src="https://nyc.cloud.appwrite.io/v1/storage/buckets/681203a2000746e35401/files/681731a8000953b4f900/view?project=6809910a000e66c57d35&mode=admin"
            alt="Quiz Image"
            width={500}
            height={500}
          />
        </div>

        <h2 className="text-3xl font-semibold">
          {isEdit ? "Edit Quiz" : "Create Quiz"}
        </h2>

        {/* Form */}
        <form
          className="w-full space-y-2 text-[#dae6ff]"
          onSubmit={handleButtonClick}
        >
          {/* Title */}
          <div>
            <label className="text-sm block mb-1">Title</label>
            <input
              type="text"
              placeholder="Enter title"
              className="w-full px-3 py-2 rounded text-white border border-[#464aba] outline-none"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm block mb-1">Description</label>
            <textarea
              placeholder="Enter description"
              className="w-full px-3 py-2 rounded border border-[#464aba] text-white  outline-none resize-none h-24"
              rows={10}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Reward toggle */}
          <div className="flex items-center gap-5 mb-2">
            <div className="w-5/12">
              <label className="text-sm block mb-1">Reward</label>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className={`px-4 py-2 rounded ${
                    reward ? "bg-blue-500" : "bg-white text-black"
                  }`}
                  onClick={() =>
                    setReward((prev) => {
                      if (prev) {
                        setBrand("");
                        setCode("");
                        return false;
                      } else {
                        return true;
                      }
                    })
                  }
                >
                  Yes
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 rounded ${
                    !reward ? "bg-blue-500" : "bg-white text-black"
                  }`}
                  onClick={handleTogglereward}
                >
                  No
                </button>
              </div>
            </div>

            <div className="w-7/12">
              <label className="text-sm block mb-1">Max Participants</label>
              <input
                type="number"
                placeholder="Enter number of participants"
                className="w-full px-3 py-2 rounded text-white border border-[#464aba] outline-none"
                value={maxParticipants}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (!isNaN(value)) {
                    if (value > 0) {
                      setMaxParticipants(value);
                    } else {
                      setMaxParticipants(0); // Reset to 0 if the input is negative
                    }
                  }
                }}
              />
            </div>
          </div>

          {/* Brand and Coupon Code */}
          <div className="flex gap-4 items-center">
            <div className="w-1/2">
              <label className="text-sm block mb-1">Brand</label>
              <select
                disabled={!reward}
                className={`w-full px-3 py-2 rounded outline-none ${
                  reward
                    ? " text-white border border-[#464aba]"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                value={brand || ""}
                onChange={(e) => setBrand(e.target.value)}
              >
                <option value="" className="text-gray-500">
                  Select brand
                </option>
                <option value="amazon" className="text-gray-500">
                  Amazon
                </option>
                <option value="flipkart" className="text-gray-500">
                  Flipkart
                </option>
                <option value="swiggy" className="text-gray-500">
                  Swiggy
                </option>
                <option value="myntra" className="text-gray-500">
                  Myntra
                </option>
                <option value="ajio" className="text-gray-500">
                  Ajio
                </option>
                <option value="zomato" className="text-gray-500">
                  Zomato
                </option>
              </select>
            </div>
            <div className="w-1/2">
              <label className="text-sm block mb-1">
                Gift card / Coupon code
              </label>
              <input
                type="text"
                disabled={!reward}
                placeholder="Enter code"
                className={`w-full px-3 py-2 rounded outline-none ${
                  reward
                    ? "border border-[#464aba] text-white"
                    : "text-gray-500 bg-gray-300 cursor-not-allowed"
                }`}
                value={code || ""}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
          </div>

          {/* Time per question */}
          <div>
            <label className="text-sm block mb-1">Time per question</label>
            <input
              type="number"
              placeholder="Enter time (seconds)"
              className="w-full px-3 py-2 rounded text-white border border-[#464aba] outline-none"
              value={time}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (!isNaN(value)) {
                  if (value > 0) {
                    setTime(value);
                  } else {
                    setTime(1); // Reset to 0 if the input is negative
                  }
                }
              }}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-2 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white font-semibold"
          >
            {isEdit ? "Update Quiz" : "Create Quiz"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default QuizModal;
