export const handleReadyEvent = (client: any) => {
  console.log(`${client.user.displayName} is online!`);
  // Sets bot's status to "Watching you, watching me"
  client?.user?.setPresence({
    activities: [{ type: 3, name: `you, watching me ` }],
  });
};
