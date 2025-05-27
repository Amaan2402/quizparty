import { Request, Response } from "express";
import { loginSchema, registerSchema } from "../utils/joi";
import {
  changePasswordDb,
  createUser,
  getUserById,
  handleRequestPasswordReset,
  loginUserDb,
  resetPasswordDb,
  updateUserDb,
} from "../helperfunctions/auth";
import { getUser } from "../utils/getUser";

//ts types
interface RegisterRequestBody {
  name: string;
  email: string;
  password: string;
}

export const registerUser = async (req: Request, res: Response) => {
  const { error } = registerSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
      error: error.details[0],
      type: "validation",
    });
  }
  const { name, email, password }: RegisterRequestBody = req.body;

  const user = await createUser({ name, email, password });

  res.json({
    message: "User registered successfully",
    data: user,
  });
};

export const loginUser = async (req: Request, res: Response) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
      type: "validation",
    });
  }
  console.log(req.cookies, "Cookies in loginUser");
  const { email, password }: { email: string; password: string } = req.body;

  const user = await loginUserDb({ email, password });
  res.cookie("token", user.data.token, {
    httpOnly: true,
    secure: true, // Set to true in production with HTTPS || false for development
    sameSite: "none", // or "none" if cross-origin AND HTTPS || lax for development
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.json({
    message: "Login successful",
    data: user.data,
  });
};

export const getUserDb = async (req: Request, res: Response) => {
  const userId = req.user?.userId;
  if (!userId) {
    return res.status(404).json({
      message: "User not found",
    });
  }
  const user = await getUserById(userId);
  return res.json({
    message: "User fetched successfully",
    data: user,
  });
};

export const updateUser = async (req: Request, res: Response) => {
  const user = getUser(req);
  console.log(req.body);
  const { updateFields } = req.body;
  const updatedUser = await updateUserDb({
    user: user,
    updateFields,
  });

  return res.json(updatedUser);
};

export const changepassword = async (req: Request, res: Response) => {
  const user = getUser(req);
  const { oldPassword, newPassword } = req.body;

  const updatedUser = await changePasswordDb({
    user: user,
    oldPassword,
    newPassword,
  });

  return res.status(200).json({
    message: "Password updated successfully",
    data: updatedUser,
  });
};

export const requestPasswordReset = async (req: Request, res: Response) => {
  const { email } = req.body;
  if (!email || !email.includes("@")) {
    return res.status(400).json({
      message: "Invalid email address",
    });
  }

  const requestPasswordReset = await handleRequestPasswordReset({
    email,
  });

  return res.status(200).json({
    message: "Password reset request sent successfully",
    data: requestPasswordReset,
  });
};

export const resetPassword = async (req: Request, res: Response) => {
  const id = req.query.id as string;
  const token = req.query.token as string;
  const { password } = req.body;

  if (!id || !token) {
    return res.status(400).json({
      message: "Invalid request",
    });
  }

  if (!password) {
    return res.status(400).json({
      message: "Password is required",
    });
  }

  const resetPasswordUpdated = await resetPasswordDb({
    id,
    token,
    newPassword: password,
  });

  return res.status(200).json({
    message: "Password reset successfully",
    data: { ...resetPasswordUpdated },
  });
};
