import { prisma } from "./db";

export const toggleUserConnectionStatus = async (participantId: string) => {
  try {
    await prisma.participant.update({
      where: { id: participantId },
      data: { isConnected: true },
    });
  } catch (error) {
    console.error("Error updating user connection status:", error);
    throw new Error("Failed to update user connection status");
  }
};

export const toggleUserDisconnectionStatus = async (participantId: string) => {
  try {
    await prisma.participant.update({
      where: { id: participantId },
      data: { isConnected: false },
    });
  } catch (error) {
    console.error("Error updating user disconnection status:", error);
    throw new Error("Failed to update user disconnection status");
  }
};
