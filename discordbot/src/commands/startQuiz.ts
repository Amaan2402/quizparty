import axios from "axios";
import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export const startQuizCommand = {
  data: new SlashCommandBuilder()
    .setName("start-quiz")
    .setDescription("Start the quiz")
    .addStringOption((option) =>
      option.setName("quiz-id").setDescription("Quiz ID").setRequired(true)
    ),

  async execute(interaction: ChatInputCommandInteraction) {
    if (!interaction.guild) {
      await interaction.reply({
        content: "This command can only be used in a server.",
        ephemeral: true,
      });
      return;
    }

    const quizId = interaction.options.getString("quiz-id");
    if (typeof quizId !== "string") {
      await interaction.reply({
        content: "Please provide a valid quiz ID.",
        ephemeral: true,
      });
      return;
    }

    if (!quizId) {
      await interaction.reply({
        content: "Please provide a valid quiz ID.",
        ephemeral: true,
      });
      return;
    }

    await interaction.reply({
      content: `Starting quiz with ID: ${quizId}.`,
    });

    try {
      const updatedQuiz = await axios.patch(
        `https://api.quizparty.amaan24.tech/api/quiz/start/${quizId}?isDiscord=true&discordUserId=${interaction.user.id}`
      );

      if (updatedQuiz.status === 200) {
        await interaction.followUp({
          content: `Quiz with ID: ${quizId} has been started.
            dashboard link: (https://quizparty.amaan24.tech/dashboard/quiz/live/${quizId})
            \n Share this link with users to join the quiz:
            quiz link: (https://quizparty.amaan24.tech/quiz/start/${quizId})`,
        });
      } else {
        await interaction.followUp({
          content: `Failed to start quiz with ID: ${quizId}.`,
          ephemeral: true,
        });
      }
    } catch (error: any) {
      console.error("Error starting quiz:", error);
      await interaction.followUp({
        content: `${
          error.response?.data?.message ||
          "An error occurred while starting the quiz."
        }`,
        ephemeral: true,
      });
    }
  },
};
