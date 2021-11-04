import React, { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLButtonElement> {
  children?: React.ReactNode;
}

const SubmitButton = ({ type, children, ...rest }: Props) => {
  return (
    <button type="submit" className="button is-primary" {...rest}>
      {children ?? "Submit"}
    </button>
  );
};

export default SubmitButton;
