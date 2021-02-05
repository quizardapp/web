import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
}

const TextField: React.FC<Props> = ({ label, className, ...rest }) => {
  return (
    <div className={className}>
      <label htmlFor="">{label}</label>
      <input {...rest}></input>
    </div>
  );
};

export default TextField;
