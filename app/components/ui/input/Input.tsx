import React from 'react';

/**
 * Props interface for the Input component.
 * @interface IInput
 * @property {string} name - The name attribute for the input element.
 * @property {string} type - The type attribute for the input element.
 * @property {string} [placeholder] - The placeholder attribute for the input element.
 * @property {string} [value] - The value attribute for the input element.
 */
export interface IInput {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
}

/**
 * Input component is a functional component that renders an input element.
 * @param {IInput} props - The props for the Input component.
 * @returns {React.ReactElement} A React element representing the Input component.
 */
const Input: React.FC<IInput> = ({ name, type, placeholder, value }) => {
  return (
    <>
      <input
        className="w-full p-2 border border-gray-200"
        name={name}
        type={type}
        value={value}
        required
        title="3 characters minimum"
        pattern=".{3,}"
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
