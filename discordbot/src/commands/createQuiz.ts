import axios from "axios";
import {
  SlashCommandBuilder,
  ChatInputCommandInteraction,
  TextChannel,
  Message,
  ChannelType,
} from "discord.js";

type QuizSession = {
  step: number;
  title?: string;
  description?: string;
  timePerQuestion?: number;
  maxParticipants?: number;
  topic?: string;
  aiPrompt?: string;
};

const activeSessions = new Map<string, QuizSession>();
const MAX_PARTICIPANTS = 30;

export const createQuizCommand = {
  data: new SlashCommandBuilder()
    .setName("create-quiz")
    .setDescription("Create a quiz step by step"),

  async execute(interaction: ChatInputCommandInteraction) {
    const userId = interaction.user.id;

    if (activeSessions.has(userId)) {
      await interaction.reply({
        content:
          "You already have an active quiz session. Please finish it or wait for timeout.",
        ephemeral: true,
      });
      return;
    }

    activeSessions.set(userId, { step: 1 });

    await interaction.reply({
      content: "Let's create your quiz! Please enter the **quiz title**:",
    });

    const channel = interaction.channel;
    if (!channel || channel.type !== ChannelType.GuildText) return;

    const textChannel = channel as TextChannel;

    const collector = textChannel.createMessageCollector({
      time: 60_000,
      filter: (m) => m.author.id === userId,
    });

    collector.on("collect", async (message: Message) => {
      const session = activeSessions.get(userId);
      if (!session) return;

      const content = message.content.trim();

      if (content.toLowerCase() === "cancel") {
        collector.stop("User cancelled");
        return;
      }

      switch (session.step) {
        case 1:
          session.title = content;
          session.step++;
          await message.reply("Great! Now enter the **quiz description**:");
          break;

        case 2:
          session.description = content;
          session.step++;
          await message.reply(
            "Nice! How much **time per question (in seconds)**?"
          );
          break;

        case 3:
          const time = parseInt(content);
          if (isNaN(time)) {
            await message.reply(
              "Please enter a valid number for the time per question."
            );
            return;
          }
          session.timePerQuestion = time;
          session.step++;
          await message.reply(
            `Please enter the **max participants** (1 - ${MAX_PARTICIPANTS}):`
          );
          break;

        case 4:
          const max = parseInt(content);
          if (isNaN(max) || max < 1 || max > MAX_PARTICIPANTS) {
            await message.reply(
              `Please enter a valid number between 1 and ${MAX_PARTICIPANTS} for the max participants.`
            );
            return;
          }
          session.maxParticipants = max;
          session.step++;
          await message.reply("Awesome! Now enter the **quiz topic**:");
          break;

        case 5:
          session.topic = content;
          session.step++;
          await message.reply(
            "Finally, enter an **AI prompt or extra info** to generate questions:"
          );
          break;

        case 6:
          session.aiPrompt = content;
          collector.stop("Complete");
          return;
      }

      activeSessions.set(userId, session);
    });

    collector.on("end", async (collected, reason) => {
      const session = activeSessions.get(userId);
      activeSessions.delete(userId);

      if (reason === "time") {
        await textChannel.send(
          `<@${userId}> Quiz creation timed out. Please try again.`
        );
        return;
      }

      if (reason === "User cancelled") {
        await textChannel.send(`<@${userId}> Quiz creation cancelled.`);
        return;
      }

      if (
        session &&
        session.title &&
        session.description &&
        session.timePerQuestion &&
        session.maxParticipants &&
        session.topic &&
        session.aiPrompt
      ) {
        const waitMsg = await textChannel.send(
          `<@${userId}> Please wait, we are creating your quiz and generating questions... 🧠✨`
        );
        try {
          const quiz = await axios.post(
            "https://api.quizparty.amaan24.tech/api/quiz/discord",
            {
              title: session.title,
              description: session.description,
              timePerQuestion: session.timePerQuestion,
              maxParticipants: session.maxParticipants,
              topic: session.topic,
              aiPrompt: session.aiPrompt,
              discordId: userId,
            }
          );

          if (quiz.status !== 200) {
            activeSessions.delete(userId);

            await textChannel.send(
              `<@${userId}> Something went wrong. Quiz creation failed.`
            );
            return;
          }

          console.log("Quiz created successfully:", quiz.data);

          await waitMsg.edit(
            `✅ **Quiz Created!**\n\n**Title:** ${session.title}\n**Description:** ${session.description}\n**Time per Question:** ${session.timePerQuestion}s\n**Max Participants:** ${session.maxParticipants}\n**Topic:** ${session.topic}\n**AI Prompt:** ${session.aiPrompt}\n\nYou can now start the quiz or view it in your dashboard.`
          );

          await textChannel.send(
            `Link for dashboard: https://quizparty.amaan24.tech/dashboard/quiz/new/${quiz.data.data.quiz.id}
            \nYou can update the quiz to live using command \`/quiz-live-${quiz.data.data.quiz.id}\`.`
          );
        } catch (error) {
          console.error("Error creating quiz:", error);
          await textChannel.send(
            `<@${userId}> Something went wrong. Quiz creation failed.`
          );
        }
      } else {
        await textChannel.send(
          `<@${userId}> Something went wrong. Quiz data was incomplete.`
        );
      }
    });
  },
};
