-- AddForeignKey
ALTER TABLE "UserDiscord" ADD CONSTRAINT "UserDiscord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
