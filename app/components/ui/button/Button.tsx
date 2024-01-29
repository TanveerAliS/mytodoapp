'use client';

import { ReactNode } from 'react';

/**
 * Button component props.
 * @typedef {Object} IButton
 * @property {('button' | 'submit' | 'reset')} [type] - The type of the button.
 * @property {string | React.ReactNode} text - The text or content inside the button.
 * @property {() => void} [onClick] - The function to be executed on button click.
 * @property {boolean} [actionButton] - Whether the button has a special style for actions.
 */
export interface IButton {
  type?: 'button' | 'submit' | 'reset';
  text: string | ReactNode;
  onClick?: () => void;
  actionButton?: boolean;
}
/**
 * Button component is a functional component that renders a button element.
 * @param {IButton} props - The props for the Button component.
 * @returns {React.ReactElement} A React element representing the Button component.
 */
const Button: React.FC<IButton> = ({ type, text, onClick, actionButton }) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={`${actionButton ? 'text-white bg-blue-900 rounded-full p-2' : 'bg-blue-900 px-2  text-white'}`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
