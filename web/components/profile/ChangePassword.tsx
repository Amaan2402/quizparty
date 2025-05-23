import { changePassword } from "@/utils/auth";
import React, { useState } from "react";
import toast from "react-hot-toast";

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleChangePassword = () => {
    setIsButtonDisabled(true);
    if (!oldPassword || !newPassword) {
      toast.error("Please fill in all fields");
      setIsButtonDisabled(false);
      return;
    }

    if (oldPassword.trim() === newPassword.trim()) {
      toast.error("New password cannot be the same as old password");
      setIsButtonDisabled(false);
      return;
    }

    if (newPassword.length < 8) {
      toast.error("New password must be at least 8 characters long");
      setIsButtonDisabled(false);
      return;
    }

    toast.promise(changePassword({ oldPassword, newPassword }), {
      loading: "Changing password...",
      success: () => {
        setOldPassword("");
        setNewPassword("");
        setIsButtonDisabled(false);
        return "Password changed successfully";
      },
      error: (err) => {
        console.error("Error changing password:", err);
        setIsButtonDisabled(false);
        return err.response?.data?.message || "Something went wrong";
      },
    });
  };
  return (
    <div className="mt-5 bg-[#252474] w-4/12 p-2 rounded-lg">
      <div className="mt-2">
        <label htmlFor="name" className="font-medium text-lg mb-1">
          Old password
        </label>
        <br />
        <input
          type="text"
          id="old-password"
          placeholder="Enter old password"
          className="px-3 w-[76%] py-2 rounded  border border-[#464aba] outline-none"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
      </div>

      <div className="mt-2">
        <label htmlFor="new-password" className="font-medium text-lg mb-1">
          New password
        </label>
        <br />
        <input
          type="text"
          id="new-password"
          placeholder="Enter new password"
          className="px-3 w-[76%] py-2 rounded  border border-[#464aba] outline-none"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>

      <button
        className="mt-4 bg-[#464aba] text-white py-2 px-4 rounded"
        onClick={handleChangePassword}
        disabled={isButtonDisabled}
      >
        Change Password
      </button>
    </div>
  );
}

export default ChangePassword;
