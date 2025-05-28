"use client";

import React, { useState } from "react";
import { handleCreateUser, handleLoginUser } from "../../utils/auth";
import toast from "react-hot-toast";
import Link from "next/link";

function Auth({ type }: { type: "LOGIN" | "REGISTER" }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleUserSignUp = async () => {
    const res = handleCreateUser({ name, email, password });
    toast.promise(res, {
      loading: "Creating user...",
      success: (data) => {
        console.log("User created successfully", data);
        setName("");
        setEmail("");
        setPassword("");
        window.location.href = "/auth/signin";
        return `User created successfully! ${data?.message}`;
      },
      error: (err) => {
        return `Error creating user! ${err?.response?.data?.message}`;
      },
    });
    setButtonDisabled(false);
  };
  const handleUserLogin = async () => {
    const res = handleLoginUser({ email, password });
    toast.promise(res, {
      loading: "Logging in...",
      success: (data) => {
        console.log("User logged in successfully", data);
        setName("");
        setEmail("");
        setPassword("");
        window.location.href = "/dashboard";
        return `User logged in successfully! ${data?.message}`;
      },
      error: (err) => {
        return `Error logging in! ${err?.response?.data?.message}`;
      },
    });
    setButtonDisabled(false);
  };

  const handleUserAuth = async () => {
    setButtonDisabled(true);
    if (type === "LOGIN") {
      await handleUserLogin();
    } else {
      await handleUserSignUp();
    }
  };

  return (
    <div className="w-full max-w-[400px]">
      <h1 className="lg:text-8xl text-4xl lg:mb-10 mb-3 text-white font-bold">
        {type === "LOGIN" ? "Log in" : "Sign up"}
      </h1>

      <div className="mt-5">
        {type === "REGISTER" && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-none h-14 text-xl outline-none border-gray-300 rounded-md p-2 px-4 mb-4 w-full bg-[#252c80] text-gray-200 focus:ring-1 focus:ring-[#6969c6]"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-none h-14 text-xl outline-none border-gray-300 rounded-md p-2 px-4 mb-4 w-full bg-[#252c80] text-gray-200 focus:ring-1 focus:ring-[#6969c6]"
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-none h-14 text-xl outline-none border-gray-300 rounded-md p-2 px-4 mb-4 w-full bg-[#252c80] text-gray-200 focus:ring-1 focus:ring-[#6969c6]"
        />
        {type === "LOGIN" && (
          <Link href="/auth/reset-password">
            <p className="text-right mb-2 font-semibold text-white">
              Forgot password??
            </p>
          </Link>
        )}
        <button
          className={`${
            type === "LOGIN" ? "bg-[#239f7a]" : "bg-[#0b5ed7]"
          } text-white rounded-md text-xl h-12 p-2 px-4 mb-4 w-full focus:ring-1 focus:ring-[#eeeeee] `}
          onClick={handleUserAuth}
          disabled={buttonDisabled}
        >
          {type === "LOGIN" ? "Log in" : "Register"}
        </button>
      </div>
    </div>
  );
}

export default Auth;
