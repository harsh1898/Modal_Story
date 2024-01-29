import React, { ButtonHTMLAttributes, ReactNode } from "react";
import './Button.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: keyof JSX.IntrinsicElements;
  children: ReactNode;
};

const Button: React.FC<ButtonProps> = ({ as: As = 'button',children, ...props }) => {
  return (
    <button {...props}>
      {children}
    </button>
  );
};

export default Button;
