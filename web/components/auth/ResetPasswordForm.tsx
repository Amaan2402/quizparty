"use client";

import { resetPassword, sendResetPasswordEmail } from "@/utils/auth";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function ResetPasswordForm() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [isEmailSent, setEmailSent] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const [isTokenAndIdAvailable, setTokenAndIdAvailable] = useState(false);

  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const id = searchParams.get("id");

  const router = useRouter();

  const handleSendResetPasswordEmail = async () => {
    setButtonDisabled(true);
    if (!email) {
      toast.error("Please enter your email");
      setButtonDisabled(false);
      return;
    }

    toast.promise(sendResetPasswordEmail(email), {
      loading: "Sending email...",
      success: () => {
        setEmailSent(true);
        setButtonDisabled(false);
        return "Email sent successfully!";
      },
      error: (err) => {
        setButtonDisabled(false);
        return err.response?.data?.message || "Error sending email";
      },
    });
  };

  const handleResetPassword = async () => {
    setButtonDisabled(true);
    if (!newPassword) {
      toast.error("Please enter your new password");
      setButtonDisabled(false);
      return;
    }

    if (!token || !id) {
      toast.error("Invalid token or ID");
      setButtonDisabled(false);
      return;
    }

    toast.promise(resetPassword({ id, token, newPassword }), {
      loading: "Resetting password...",
      success: () => {
        setButtonDisabled(false);
        router.push("/auth/signin");
        return "Password reset successfully!";
      },
      error: (err) => {
        setButtonDisabled(false);
        return err.response?.data?.message || "Error resetting password";
      },
    });
  };

  useEffect(() => {
    if (token && id) {
      setTokenAndIdAvailable(true);
    } else {
      setTokenAndIdAvailable(false);
    }
  }, [token, id]);

  if (isTokenAndIdAvailable) {
    return (
      <div className="w-full">
        <input
          type="text"
          placeholder="new password"
          className="border-none h-14 text-xl outline-none border-gray-300 rounded-md p-2 px-4 mb-4 w-full bg-[#252c80] text-gray-200 focus:ring-1 focus:ring-[#6969c6]"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <button
          className="bg-[#0b5ed7] text-white rounded-md text-xl h-12 p-2 px-4 mb-4 w-full focus:ring-1 focus:ring-[#eeeeee]"
          disabled={isButtonDisabled}
          onClick={handleResetPassword}
        >
          Reset Password
        </button>
      </div>
    );
  }

  if (isEmailSent) {
    return (
      <div className="w-full">
        <h1 className="text-white text-3xl mb-3">Check your email</h1>
        <p className="text-gray-200 text-lg">
          A password reset link has been sent to your email address.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h1 className="text-white text-3xl mb-3">Reset Password</h1>
      <input
        type="text"
        placeholder="email"
        className="border-none h-14 text-xl outline-none border-gray-300 rounded-md p-2 px-4 mb-4 w-full bg-[#252c80] text-gray-200 focus:ring-1 focus:ring-[#6969c6]"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        className="bg-[#0b5ed7] text-white rounded-md text-xl h-12 p-2 px-4 mb-4 w-full focus:ring-1 focus:ring-[#eeeeee]"
        disabled={isButtonDisabled}
        onClick={handleSendResetPasswordEmail}
      >
        Reset Password
      </button>
    </div>
  );
}

export default ResetPasswordForm;
