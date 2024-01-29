import { ITodo } from '../../types/todoTypes';
import { DeleteTodo } from './DeleteTodo';
import { UpdateTodo } from './UpdateTodo';

/**
 * Component representing an individual todo item.
 * @param todo - The todo item to be displayed and managed.
 */
export const Todo = ({ todo }: { todo: ITodo }) => {
  // Style configuration based on completion status
  const todoStyle = {
    textDecoration: todo.isCompleted === true ? 'line-through' : 'none',
    opacity: todo.isCompleted === true ? 0.5 : 1,
  };

  return (
    <div
      className="w-full flex justify-between items-center bg-white rounded-2xl py-3 px-5"
      style={todoStyle}
    >
      {/* Display the title of the todo item */}
      <span className="text-center font-bold"> {todo.title}</span>
      {/* Component for updating the todo item */}
      <div className="flex gap-4 items-center">
        <UpdateTodo todo={todo} />
        {/* Component for deleting the todo item */}
        <DeleteTodo todo={todo} />
      </div>
    </div>
  );
};
