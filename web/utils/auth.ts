// import { cookies } from "next/headers";
import { api } from "./axios";

export const handleCreateUser = async ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => {
  const res = await api.post("/auth/register", {
    name,
    email,
    password,
  });
  return res.data;
};

export const handleLoginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const res = await api.post("/auth/login", {
    email,
    password,
  });
  return res.data;
};

export const getUser = async (token: string) => {
  try {
    const res = await api.get("/auth/me", {
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined,
      },
    });
    return {
      data: res.data,
      error: null,
      loading: false,
    };
  } catch (err) {
    console.error("Error fetching user:", err);
    return {
      data: null,
      error: err,
      loading: false,
    };
  }
};

export const useGetUser = async () => {
  try {
    const res = await api.get("/auth/me");
    return { data: res.data, error: null, loading: false };
  } catch (err) {
    console.error("Error fetching user:", err);
    return { data: null, error: err, loading: false };
  }
};
