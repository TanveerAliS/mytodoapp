import { IForm } from './Form';

const mockAction = async (formData: FormData): Promise<void> => {
  // Simulate form submission logic here
  console.log('Form submitted with data:', formData);
  // No need to return a specific value, so return void
};

const mockOnSubmit = (): void => {
  // Simulate onSubmit logic
  console.log('Form submitted successfully');
};

const mockClassName = 'custom-form-class';

const base: IForm = {
  children: null, // Use React.ReactNode or JSX.Element for the actual component
  action: mockAction,
  className: mockClassName,
  onSubmit: mockOnSubmit,
};

export const mockFormProps = {
  base,
};
