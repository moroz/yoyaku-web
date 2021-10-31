import React from "react";
import { UseFormRegister } from "react-hook-form";

interface Props extends React.HTMLProps<HTMLInputElement> {
  label: string;
  register: UseFormRegister<any>;
}

const InputField = ({ name, label, register, ...rest }: Props) => {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <input className="input" {...register(name)} {...rest} />
    </div>
  );
};

export default InputField;
