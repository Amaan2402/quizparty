import { REST, Routes } from "discord.js";
import { configDotenv } from "dotenv";
import { createQuizCommand } from "./commands/createQuiz";
import { updateQuizLiveCommand } from "./commands/updateQuizLive";
import { startQuizCommand } from "./commands/startQuiz";

configDotenv();

const token = process.env.BOT_TOKEN;
const clientId = process.env.CLIENT_ID;

if (!token || !clientId) {
  throw new Error("BOT_TOKEN is not defined in the environment variables");
}

const commands = [
  createQuizCommand.data.toJSON(),
  updateQuizLiveCommand.data.toJSON(),
  startQuizCommand.data.toJSON(),
];

const rest = new REST({ version: "10" }).setToken(token);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");
    await rest.put(
      Routes.applicationGuildCommands(clientId, "876121595343675412"),
      {
        body: commands,
      }
    );
    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.log("Error reloading application (/) commands.");
    console.error(error);
  }
})();
