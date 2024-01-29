'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '../utils/prisma';

/**
 * Creates a new todo item in the database based on the provided form data.
 * @param formData - FormData containing the input field value.
 */
export async function create(formData: FormData) {
  // Extract input value from FormData
  const input = formData.get('input') as string;

  // If input is empty or contains only whitespace, return early
  if (!input.trim()) return;

  // Create a new todo item in the database with the provided title
  await prisma.tOdo.create({
    data: {
      title: input,
    },
  });

  // Trigger a revalidation of the specified path (in this case, the root '/')
  revalidatePath('/');
}

/**
 * Updates the completion status of a todo item in the database based on the provided form data.
 * @param formData - FormData containing the todo item's ID.
 * @returns The updated completion status after the operation.
 */
export async function updateStatus(formData: FormData) {
  // Extract todo item's ID from FormData
  const id = formData.get('inputId') as string;

  // Retrieve the todo item from the database using the ID
  const todo = await prisma.tOdo.findUnique({
    where: { id },
  });

  // Toggle the completion status
  const updateStatus = !todo?.isCompleted;

  // Update the completion status of the todo item in the database
  await prisma.tOdo.update({
    where: {
      id,
    },
    data: {
      isCompleted: updateStatus,
    },
  });

  // Trigger a revalidation of the specified path (in this case, the root '/')
  revalidatePath('/');

  // Return the updated completion status
  return updateStatus;
}

/**
 * Deletes a todo item from the database based on the provided form data.
 * @param formData - FormData containing the todo item's ID.
 */
export async function deleteTodo(formData: FormData) {
  // Extract todo item's ID from FormData
  const id = formData.get('inputId') as string;

  // Retrieve the todo item from the database using the ID
  const todo = await prisma.tOdo.findUnique({
    where: { id },
  });

  // Delete the todo item from the database
  await prisma.tOdo.delete({
    where: {
      id,
    },
  });

  // Trigger a revalidation of the specified path (in this case, the root '/')
  revalidatePath('/');
}
