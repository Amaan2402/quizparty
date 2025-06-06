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

export const handleLogoutUser = async () => {
  const res = await api.delete("/auth/logout");
  return res.data;
};

export const getUser = async (token?: string) => {
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

export const updateUser = async (updateFields: {
  name?: string;
  email?: string;
}) => {
  const res = await api.patch("/auth/update", { updateFields: updateFields });
  console.log("User updated successfully:", res.data);
  return res.data;
};

export const changePassword = async ({
  oldPassword,
  newPassword,
}: {
  oldPassword: string;
  newPassword: string;
}) => {
  const res = await api.patch("/auth/change-password", {
    oldPassword,
    newPassword,
  });
  console.log("Password changed successfully:", res.data);
  return res.data;
};

export const sendResetPasswordEmail = async (email: string) => {
  const res = await api.post("/auth/request-password-reset", { email });
  return res.data;
};

export const resetPassword = async ({
  id,
  token,
  newPassword,
}: {
  id: string;
  token: string;
  newPassword: string;
}) => {
  const res = await api.post(`/auth/reset-password?id=${id}&token=${token}`, {
    password: newPassword,
  });
  return res.data;
};
