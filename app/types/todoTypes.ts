/**
 * Interface representing the properties of a Todo item.
 * @interface ITodo
 * @property {string} id - The unique identifier for the Todo item.
 * @property {string | null | undefined} [title] - The title or description of the Todo item.
 * @property {boolean} isCompleted - A boolean indicating whether the Todo item is completed.
 * @property {Date | undefined} [createdAt] - The date and time when the Todo item was created.
 */
export interface ITodo {
  id: string;
  title?: string | null;
  isCompleted: boolean;
  createdAt?: Date;
}
