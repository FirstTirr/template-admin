import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <button
      className={
        "px-4 py-1.5 rounded flex items-center gap-2 font-semibold transition " +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
