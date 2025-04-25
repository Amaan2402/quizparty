import { Resend } from "resend";
import { Request, Response } from "express";
import { CustomError } from "../utils/CustomError";

const resend = new Resend(process.env.RENDER_MAILAPI_API_KEY!);

export const sendEmail = async (req: Request, res: Response) => {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["mohammadamaan234@gmail.com"],
    subject: "hello world",
    html: "<strong>it works!</strong>",
  });

  if (error) {
    console.log("Error sending email:", error);
    throw new CustomError("Failed to send email", 500);
  }

  res.status(200).json({ data });
};
