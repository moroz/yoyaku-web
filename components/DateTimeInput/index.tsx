import { UseFormRegister } from "react-hook-form";

interface Props {
  label: string;
  name: string;
  register: UseFormRegister<any>;
}

const DateTimeInput = ({ label, name, register }: Props) => {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="field is-grouped">
        <input type="date" className="input" {...register(`${name}.date`)} />
        <input type="time" className="input" {...register(`${name}.time`)} />
      </div>
    </div>
  );
};

export default DateTimeInput;
