import clsx from "clsx";
import React from "react";
import { UseFormRegister } from "react-hook-form";

interface Props extends React.HTMLProps<HTMLInputElement> {
  label: string;
  register: UseFormRegister<any>;
  errors?: Record<string, string>;
}

const InputField = ({ errors, name, label, register, ...rest }: Props) => {
  const error = errors?.[name];
  return (
    <div className={clsx("field", { "has-error": error })}>
      <label className="label">{label}</label>
      <input className="input" {...register(name)} {...rest} />
    </div>
  );
};

export default InputField;
