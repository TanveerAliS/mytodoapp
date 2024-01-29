'use client';

import { deleteTodo } from '@/app/actions/todoActions';
import { ITodo } from '@/app/types/todoTypes';
import { BsFillTrashFill } from 'react-icons/bs';
import Button from '../ui/button/Button';
import Form from '../ui/form/Form';
import Input from '../ui/input/Input';

/**
 * Component representing a form to delete a todo item.
 * Uses the 'deleteTodo' action from 'todoActions' when submitted.
 * @param todo - The todo item to be deleted.
 */
export const DeleteTodo = ({ todo }: { todo: ITodo }) => {
  return (
    <div className="flex gap-5">
      {/* Form for submitting the delete action */}
      <Form action={deleteTodo}>
        {/* Hidden input field containing the todo item's ID */}
        <Input type="hidden" name="inputId" value={todo.id} />
        {/* Button triggering the 'deleteTodo' action */}
        <Button actionButton text={<BsFillTrashFill />} type="submit" />
      </Form>
    </div>
  );
};
