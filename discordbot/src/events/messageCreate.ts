export const handleCreateMessage = (message: any) => {
  const prefix = "!";
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = (args.shift() ?? "").toLowerCase();
  console.log(command);
  // Feel free name yours whatever you'd like
  if (command === "pingquiz") {
    message.channel.send("pinging ponging ponging QUIZZING QUIZZING");
  }
  if (command === "mentionuserquiz") {
    message.reply(
      `Hello ${message.author}, I am a bot and I am here to help you!`
    );
  }
};
