import { Request, Response } from "express";
import { loginSchema, registerSchema } from "../utils/joi";
import { createUser, loginUserDb } from "../helperfunctions/auth";

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
      message: "Validation error",
      error: error.details[0].message,
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
      message: "Validation error",
      error: error.details[0].message,
    });
  }
  const { email, password }: { email: string; password: string } = req.body;

  const user = await loginUserDb({ email, password });

  res.cookie("token", user.data.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  res.json({
    message: "Login successful",
    data: user.data,
  });
};
