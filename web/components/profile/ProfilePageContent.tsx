"use client";

import { getUser } from "@/utils/auth";
import ChangePassword from "./ChangePassword";
import NameEmail from "./NameEmail";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function ProfilePageContent() {
  const [user, setUser] = useState<{
    name: string;
    email: string;
    id: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUser() {
      toast.promise(getUser(), {
        loading: null,
        success: ({ data }) => {
          setUser(data.data);
          setLoading(false);
          return null;
        },
        error: (err) => {
          setError(err.response.data.message || "Something went wrong");
          setLoading(false);
          return "Error fetching user data";
        },
      });
    }

    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold text-white">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold text-red-500">{error}</h1>
      </div>
    );
  }
  return (
    <div className="p-5 px-10 text-white w-full">
      <NameEmail user={user} />
      <ChangePassword />
    </div>
  );
}

export default ProfilePageContent;
