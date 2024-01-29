import { IForm } from './Form';

const mockAction = async (formData: FormData): Promise<void | boolean> => {
  // Simulate form submission logic here
  console.log('Form submitted with data:', formData);
  // Return a Promise with the desired response or boolean value
  return true;
};

const mockOnSubmit = (): void => {
  // Simulate onSubmit logic
  console.log('Form submitted successfully');
};

const mockClassName = 'custom-form-class';

const base: IForm = {
  children: '{{component}}',
  action: mockAction,
  className: mockClassName,
  onSubmit: mockOnSubmit,
};

export const mockFormProps = {
  base,
};
