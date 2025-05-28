import express, { Request, Response } from "express";
import {
  changepassword,
  getUserDb,
  loginUser,
  registerUser,
  requestPasswordReset,
  resetPassword,
  updateUser,
} from "../controllers/auth";
import { wrapAsync } from "../utils/wrapAsync";
const router = express.Router();

router.post("/register", wrapAsync(registerUser));
router.post("/login", wrapAsync(loginUser));
router.delete("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "none",
    secure: true,
    domain:
      process.env.NODE_ENV === "production"
        ? ".quizparty.amaan24.tech"
        : "localhost",
  });
  res.status(200).json({ message: "Logged out successfully" });
});
router.get("/me", wrapAsync(getUserDb));
router.patch("/update", wrapAsync(updateUser));
router.patch("/change-password", wrapAsync(changepassword));

router.post("/request-password-reset", wrapAsync(requestPasswordReset));
router.post("/reset-password", wrapAsync(resetPassword));

export default router;
