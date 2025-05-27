import nodemailer from "nodemailer";
import { CustomError } from "../utils/CustomError";

export const sendEmail = async ({
  email,
  subject,
  html,
}: {
  email: string;
  subject: string;
  html: string;
}) => {
  console.log("Sending email to:", email);
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "justdontpanic24@gmail.com",
        pass: "zozhwfbdhbjicmrq",
      },
    });

    const mailOptions = {
      to: email,
      from: "justdontpanic24@gmail.com",
      subject: subject,
      html: html,
    };

    await transporter.sendMail(mailOptions);
    return {
      status: true,
    };
  } catch (error) {
    console.log("Error sending email:", error);
    throw new CustomError("Failed to send email", 500);
  }
};
