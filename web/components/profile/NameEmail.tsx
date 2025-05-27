import { updateUser } from "@/utils/auth";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function NameEmail({
  user,
}: {
  user: {
    name: string;
    email: string;
    id: string;
  } | null;
}) {
  const [localName, setLocalName] = useState(user?.name || "");
  const [localEmail, setLocalEmail] = useState(user?.email || "");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (user && !localName && !localEmail) {
      setLocalName(user.name);
      setLocalEmail(user.email);
    }
  }, [user, localName, localEmail]);

  const handleSaveChanges = () => {
    setIsButtonDisabled(true);
    if (!localName || !localEmail) {
      toast.error("Please fill in all fields");
      setIsButtonDisabled(false);
      return;
    }

    if (localName.trim() === user?.name && localEmail.trim() === user?.email) {
      toast.error("No changes made");
      setIsButtonDisabled(false);
      return;
    }

    const updateFields: {
      name?: string;
      email?: string;
    } = {};
    if (localName.trim() !== user?.name) {
      updateFields["name"] = localName;
    }

    if (localEmail.trim() !== user?.email) {
      updateFields["email"] = localEmail;
    }

    toast.promise(updateUser(updateFields), {
      loading: "Updating...",
      success: () => {
        setIsButtonDisabled(false);
        return "User updated successfully";
      },
      error: (err) => {
        setIsButtonDisabled(false);
        return err.response.data.message || "Something went wrong";
      },
    });
  };
  return (
    <div className="w-full sm:w-8/12 md:w-5/12 ">
      <h1 className="text-3xl font-bold  mb-5">Settings</h1>
      <div className="mt-2">
        <label htmlFor="name" className="font-medium text-lg mb-1">
          Name
        </label>
        <br />
        <input
          type="text"
          id="name"
          placeholder="Enter title"
          className="px-3 w-full py-2 rounded  border border-[#464aba] outline-none"
          value={localName}
          onChange={(e) => setLocalName(e.target.value)}
        />
      </div>

      <div className="mt-2">
        <label htmlFor="email" className="font-medium text-lg mb-1">
          Email
        </label>
        <br />
        <input
          type="text"
          id="email"
          placeholder="Enter email"
          className="px-3 w-full py-2 rounded  border border-[#464aba] outline-none"
          value={localEmail}
          onChange={(e) => setLocalEmail(e.target.value)}
        />
      </div>

      <button
        className="mt-4 bg-[#464aba] text-white py-2 px-4 rounded"
        onClick={handleSaveChanges}
        disabled={isButtonDisabled}
      >
        Save Changes
      </button>
    </div>
  );
}

export default NameEmail;
