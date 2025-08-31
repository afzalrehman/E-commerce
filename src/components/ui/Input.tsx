// src/components/Input.tsx
import React from "react";

interface InputProps {
  id: string;
  name: string;
  type?: string;
  value: string;
  label?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  type = "text",
  value,
  label,
  required = false,
  onChange,
  className = "",
}) => {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className={`mt-1 block w-full rounded-md border px-3 py-2 ${className}`}
      />
    </div>
  );
};

export default Input;
