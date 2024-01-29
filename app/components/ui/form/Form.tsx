'use client';

import { FormEvent, ReactNode, useRef } from 'react';

/**
 * Props interface for the Form component.
 * @interface IForm
 * @property {ReactNode} children - The content inside the form.
 * @property {Function} action - The function to be executed when the form is submitted.
 * @property {string} [className] - Additional class names for styling.
 * @property {Function} [onSubmit] - The function to be executed when the form is submitted.
 */
interface IForm {
  children: ReactNode;
  action: (formData: FormData) => void | Promise<void>;
  className?: string;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

/**
 * Form component is a functional component that renders a form element.
 * @param {IForm} props - The props for the Form component.
 * @returns {React.ReactElement} A React element representing the Form component.
 */
const Form: React.FC<IForm> = ({ children, action, className, onSubmit }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Invoke the provided action function with the form data
    await action(new FormData(event.currentTarget));

    // Reset the form after the action is performed
    formRef.current?.reset();

    // If there's an additional onSubmit function, invoke it
    onSubmit?.(event);
  };

  return (
    <form className={className} onSubmit={handleSubmit} ref={formRef}>
      {children}
    </form>
  );
};

export default Form;
