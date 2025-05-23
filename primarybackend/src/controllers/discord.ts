import { Request, Response } from "express";
import { CustomError } from "../utils/CustomError";
import axios from "axios";
import { getUser } from "../utils/getUser";
import { prisma } from "../utils/db";

export const discordCallback = async (req: Request, res: Response) => {
  console.log("discordCallback called");
  const code = req.query.code;

  if (!code) {
    return res.status(400).json({ error: "Code not provided" });
  }

  const user: any = getUser(req);

  const params = new URLSearchParams();
  if (
    !process.env.DISCORD_CLIENT_ID ||
    !process.env.DISCORD_CLIENT_SECRET ||
    !process.env.DISCORD_REDIRECT_URI
  ) {
    throw new CustomError(
      "Discord client ID, secret, or redirect URI not set in environment variables",
      400
    );
  }

  params.append("client_id", process.env.DISCORD_CLIENT_ID);
  params.append("client_secret", process.env.DISCORD_CLIENT_SECRET);
  params.append("grant_type", "authorization_code");
  params.append("code", code as string);
  params.append("redirect_uri", process.env.DISCORD_REDIRECT_URI);
  params.append("scope", "identify");

  const tokenResponse = await axios.post(
    "https://discord.com/api/oauth2/token",
    params.toString(),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  const accessToken = tokenResponse.data.access_token;
  const refreshToken = tokenResponse.data.refresh_token;

  const userResponse = await axios.get("https://discord.com/api/users/@me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const discordUser = userResponse.data; // This contains user's Discord ID, username, discriminator etc.

  const discordUserDb = await prisma.userDiscord.upsert({
    where: { userId: user },
    update: {
      accessToken,
      refreshToken,
      discordUsername: discordUser.username,
      discordDiscriminator: discordUser.discriminator,
      discordId: discordUser.id,
    },
    create: {
      userId: user,
      discordId: discordUser.id,
      accessToken,
      refreshToken,
      discordUsername: discordUser.username,
      discordDiscriminator: discordUser.discriminator,
    },
  });

  return res
    .status(200)
    .json({ message: "Discord connected successfully!", discordUserDb });
};

export const getDiscordUser = async (req: Request, res: Response) => {
  console.log("getDiscordUser called");
  const user = getUser(req);

  if (!user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const discordUser = await prisma.userDiscord.findUnique({
    where: { userId: user },
    select: {
      id: true,
      discordId: true,
      discordUsername: true,
      discordDiscriminator: true,
    },
  });

  if (!discordUser) {
    return res.status(404).json({ error: "Discord user not found" });
  }

  return res.status(200).json({ data: discordUser });
};
