import express from "express";
import { discordCallback, getDiscordUser } from "../controllers/discord";
import { wrapAsync } from "../utils/wrapAsync";
const router = express.Router();

router.get("/callback", wrapAsync(discordCallback));
router.get("/me", wrapAsync(getDiscordUser));

export default router;
