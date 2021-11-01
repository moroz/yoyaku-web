import React from "react";

interface Props {
  children?: React.ReactNode;
}

const SubmitButton = ({ children }: Props) => {
  return (
    <button type="submit" className="button is-primary">
      {children ?? "Submit"}
    </button>
  );
};

export default SubmitButton;
