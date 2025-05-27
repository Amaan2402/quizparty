import { PrismaClient } from "../prisma/generated/prisma";

class PrismaSingleton {
  static instance: PrismaClient | null = null;
  static getInstance() {
    if (!this.instance) {
      this.instance = new PrismaClient();
      return this.instance;
    }

    return this.instance;
  }
}

export const prisma = PrismaSingleton.getInstance();
