import { PrismaClient, Prisma } from "../generated/prisma";

export const DbClient: PrismaClient = new PrismaClient();

// Export all types
export * from "../generated/prisma";
