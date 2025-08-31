// src/components/Button.tsx
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  className = "",
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
