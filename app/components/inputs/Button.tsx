"use client";

import React from "react";

interface ButtonProps {
  customStyle?: string;
  label: string;
  disabled?: boolean;
  small?: boolean;
  outline?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button: React.FC<ButtonProps> = ({
  customStyle,
  label,
  disabled,
  small,
  outline,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={` 
      disabled: opacity-100 disabled:cursor-not-allowed 
      rounded-md hover:opacity-80
      transition w-full 
      border-slate-700
      flex items-center justify-center gap-2
      ${outline ? "bg-white " : "bg-slate-700"}
      ${outline ? "text-slate-700" : "text-white"}
      ${small ? "text-sm font-light" : "text-md font-semibold"}
      ${small ? "py-1 px-2 border-[1px]" : "py-3 px-4 border-2"}
      
      ${customStyle}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
