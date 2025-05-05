"use client";

import { useModalContext } from "@/context/modalContext";
import { createQuiz } from "@/utils/quiz";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";

function CreateQuiz() {
  const [reward, setReward] = useState<boolean>(false); // default to No
  const [brand, setBrand] = useState<string>(""); // default to empty stringco
  const [code, setCode] = useState<string>(""); // default to empty string
  const [time, setTime] = useState<number>(1); // default to 0 seconds
  const [title, setTitle] = useState<string>(""); // default to empty string
  const [description, setDescription] = useState<string>(""); // default to empty string

  const { isOpen, handleClose } = useModalContext();

  const handleCreateQuiz = async (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const data = {
      title,
      description: description || undefined,
      reward: reward
        ? {
            brand: brand,
            couponCode: code,
          }
        : undefined,
      timePerQuestion: time,
    };
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
        return `Error creating quiz: ${error.message}`;
      },
    });
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

        <h2 className="text-3xl font-semibold">Create Quiz</h2>

        {/* Form */}
        <form className="w-full space-y-2 text-[#dae6ff]">
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Reward toggle */}
          <div>
            <label className="text-sm block mb-1">Reward</label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className={`px-4 py-2 rounded ${
                  reward ? "bg-blue-500" : "bg-white text-black"
                }`}
                onClick={() => setReward(true)}
              >
                Yes
              </button>
              <button
                type="button"
                className={`px-4 py-2 rounded ${
                  !reward ? "bg-blue-500" : "bg-white text-black"
                }`}
                onClick={() => setReward(false)}
              >
                No
              </button>
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
                value={brand}
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
                value={code}
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
            onClick={(e) => handleCreateQuiz(e)}
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateQuiz;
