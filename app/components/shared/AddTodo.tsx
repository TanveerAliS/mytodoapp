import { create } from '@/app/actions/todoActions';
import Button from '../ui/button/Button';
import Form from '../ui/form/Form';
import Input from '../ui/input/Input';

/**
 * Component representing a form to add a new todo item.
 * Uses the 'create' action from 'todoActions' when submitted.
 */
export const AddTodo = () => {
  return (
    <Form action={create} className="w-full px-2">
      <div className="flex">
        {/* Input field for entering todo title */}
        <Input name="input" type="text" placeholder="Add Todo.." />
        {/* Submit button triggering the 'create' action */}
        <Button type="submit" text="Add" />
      </div>
    </Form>
  );
};
