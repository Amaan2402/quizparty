import express from "express";
import { getUser, loginUser, registerUser } from "../controllers/auth";
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
router.get("/me", wrapAsync(getUser));
router.post("/send-email", wrapAsync(sendEmail));
export default router;
