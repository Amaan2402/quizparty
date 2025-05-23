-- CreateTable
CREATE TABLE "UserDiscord" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "discordId" TEXT NOT NULL,
    "discordUsername" TEXT NOT NULL,
    "discordDiscriminator" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "connectedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserDiscord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserDiscord_userId_key" ON "UserDiscord"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserDiscord_discordId_key" ON "UserDiscord"("discordId");

-- CreateIndex
CREATE UNIQUE INDEX "UserDiscord_discordUsername_key" ON "UserDiscord"("discordUsername");

-- CreateIndex
CREATE UNIQUE INDEX "UserDiscord_discordDiscriminator_key" ON "UserDiscord"("discordDiscriminator");
