import React from "react";
import style from "./style.module.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  label?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ className, label, disabled, children, ...rest }) => {
  const btnStyle: string = disabled ? style.disabled : style.btn;

  return (
    <button {...rest} className={btnStyle + " " + className}>
      {label}
      {children}
    </button>
  );
};

export default Button;
