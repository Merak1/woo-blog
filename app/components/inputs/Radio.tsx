"use client";

import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  value: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Radio: React.FC<InputProps> = ({
  id,
  label,
  disabled,
  required,
  register,
  value,
  errors,
}) => {
  return (
    <div className="w-full relative mt-3  flex  flex-col text-center">
      <input
        autoComplete="off"
        type="radio"
        id={id}
        value={value}
        disabled={disabled}
        required={required}
        placeholder=""
        {...register(id, { required })}
        className={`
        w-5 h-5  text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-400
         cursor-pointer
        m-auto
         peer p-4 pt-6 outline-none 
        font-light border-2 rounded-md transition disabled:opacity-70 
        disabled:cursor-not-allowed 
       
        ${errors[id] ? "border-rose-400" : "border-slate-300"}
      `}
      />

      <label
        className={` cursor-text text-md
        duration-150 
        text-black
          capitalize
         ${errors[id] ? "text-rose-500" : "text-white"}
       `}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Radio;
