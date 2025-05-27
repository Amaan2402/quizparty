import { prisma } from "@amaan2202/prisma-client";

export const toggleUserConnectionStatus = async (participantId: string) => {
  console.log("Updating user connection status...", participantId);
  try {
    await prisma.participant.update({
      where: { id: participantId },
      data: { isConnected: true },
    });
    console.log("User connection status updated successfully");
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
    console.log("User disconnection status updated successfully");
  } catch (error) {
    console.error("Error updating user disconnection status:", error);
  }
};
