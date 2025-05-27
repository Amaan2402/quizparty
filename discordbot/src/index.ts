import { configDotenv } from "dotenv";
configDotenv();

import { Client, GatewayIntentBits, MessageFlags } from "discord.js";
import { handleReadyEvent } from "./events/ready";
import { handleCreateMessage } from "./events/messageCreate";
import { createQuizCommand } from "./commands/createQuiz";
import { updateQuizLiveCommand } from "./commands/updateQuizLive";
import { startQuizCommand } from "./commands/startQuiz";

const token = process.env.BOT_TOKEN;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", handleReadyEvent);
client.on("messageCreate", handleCreateMessage);

client.on("interactionCreate", async (interaction: any) => {
  try {
    if (!interaction.isCommand()) return;
    const { commandName } = interaction;
    if (commandName === "create-quiz") {
      await createQuizCommand.execute(interaction);
    } else if (commandName === "update-quiz-live") {
      await updateQuizLiveCommand.execute(interaction);
    } else if (commandName === "start-quiz") {
      await startQuizCommand.execute(interaction);
    } else {
      await interaction.reply({
        content: "Unknown command.",
        flags: MessageFlags.Ephemeral,
      });
    }
  } catch (error) {
    console.error(error);
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({
        content: "There was an error while executing this command!",
        flags: MessageFlags.Ephemeral,
      });
    } else {
      await interaction.reply({
        content: "There was an error while executing this command!",
        flags: MessageFlags.Ephemeral,
      });
    }
  }
});

client.login(token);
