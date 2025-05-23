import { api } from "./axios";

export const handleAuthDiscord = async (code: string) => {
  const response = await api.get(`/auth/discord/callback?code=${code}`);
  return response.data;
};

export const getDiscordUser = async () => {
  const response = await api.get("/auth/discord/me");
  return response.data;
};
