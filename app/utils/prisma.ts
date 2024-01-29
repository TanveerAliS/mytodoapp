import { PrismaClient } from '@prisma/client';

// Use a more descriptive variable name
const globalWithPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Initialize PrismaClient and store it in the global context
export const prisma = globalWithPrisma.prisma ?? new PrismaClient();

// Store PrismaClient in the global context only during development
if (process.env.NODE_ENV !== 'production') {
  globalWithPrisma.prisma = prisma;
}

// Use async/await in the getData function, and handle potential errors
export const getData = async function () {
  try {
    const data = await prisma.tOdo.findMany({
      select: {
        id: true,
        title: true,
        isCompleted: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error for higher-level handling if needed
  }
};
