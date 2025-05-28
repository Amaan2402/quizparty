import axios from "axios";
import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export const updateQuizLiveCommand = {
  data: new SlashCommandBuilder()
    .setName("update-quiz-live")
    .setDescription("Update the quiz live by providing quiz id")
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
      content: `Updating quiz with ID: ${quizId} to live mode.`,
    });

    try {
      const updatedQuiz = await axios.patch(
        `https://api.quizparty.amaan24.tech/api/quiz/live/${quizId}?isDiscord=true&discordUserId=${interaction.user.id}`
      );

      console.log(updatedQuiz.status);

      if (updatedQuiz.status === 200) {
        await interaction.followUp({
          content: `Quiz with ID: ${quizId} has been updated to live mode.
        dashboard link: (https://quizparty.amaan24.tech/dashboard/quiz/live/${quizId})
        quiz link: (https://quizparty.amaan24.tech/quiz/start/${quizId})
        \n You can now start the quiz by the below command: 
        \`/start-quiz-${quizId}\`
        `,
        });
      } else {
        await interaction.followUp({
          content: `Failed to update quiz with ID: ${quizId}. Please try again later.
        `,
        });
      }
    } catch (error: any) {
      console.error("Error updating quiz:", error.response?.data.message);
      await interaction.followUp({
        content: `${
          error.response?.data?.message
            ? error.response.data.message
            : "Something went wrong. Please try again later."
        }`,
      });
    }
  },
};
