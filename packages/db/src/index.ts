import { PrismaClient, Prisma } from "../generated/prisma";

export const DbClient: PrismaClient = new PrismaClient();

// Export all types
export type { Prisma };
export * from "../generated/prisma";
