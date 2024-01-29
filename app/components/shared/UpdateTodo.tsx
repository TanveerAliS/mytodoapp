import { updateStatus } from '@/app/actions/todoActions';
import { ITodo } from '@/app/types/todoTypes';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Button from '../ui/button/Button';
import Form from '../ui/form/Form';
import Input from '../ui/input/Input';

/**
 * Component representing a form to update the completion status of a todo item.
 * Uses the 'updateStatus' action from 'todoActions' when submitted.
 * @param todo - The todo item to be updated.
 */

export const UpdateTodo = ({ todo }: { todo: ITodo }) => {
  return (
    <Form action={updateStatus}>
      <Input name="inputId" value={todo.id} type="hidden" />
      <Button actionButton type="submit" text={<AiOutlineCheckCircle />} />
    </Form>
  );
};
