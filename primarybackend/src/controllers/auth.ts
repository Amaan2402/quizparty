import { Request, Response } from "express";
import { loginSchema, registerSchema } from "../utils/joi";
import { createUser, getUserById, loginUserDb } from "../helperfunctions/auth";

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
  console.log("User data:", user);
  res.cookie("token", user.data.token, {
    httpOnly: true,
    secure: false, // Set to true in production with HTTPS
    sameSite: "lax", // or "none" if cross-origin AND HTTPS
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.json({
    message: "Login successful",
    data: user.data,
  });
};

export const getUser = async (req: Request, res: Response) => {
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
