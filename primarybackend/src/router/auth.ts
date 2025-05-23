import express, { Request, Response } from "express";
import {
  changepassword,
  getUserDb,
  loginUser,
  registerUser,
  updateUser,
} from "../controllers/auth";
import { wrapAsync } from "../utils/wrapAsync";
import { sendEmail } from "../controllers/resend";
const router = express.Router();

router.post("/register", wrapAsync(registerUser));
router.post("/login", wrapAsync(loginUser));
router.delete("/logout", (req, res) => {
  console.log("Logout route hit");
  console.log(req.cookies);
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });
  res.status(200).json({ message: "Logged out successfully" });
});
router.get("/me", wrapAsync(getUserDb));
router.patch("/update", wrapAsync(updateUser));
router.post("/send-email", wrapAsync(sendEmail));
router.patch("/change-password", wrapAsync(changepassword));

export default router;
