import React from "react";
import Styles from "./Button.module.scss";

interface ButtonProps {
  id: string;
  disabled?: boolean;
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  id,
  disabled = false,
  label,
  onClick,
  size = "medium",
  variant = "primary",
}) => {
  return (
    <button
      id={id}
      disabled={disabled}
      onClick={onClick}
      className={`${Styles.button} ${Styles[size]} ${Styles[variant]}`}
      name={label}
    >
      {label}
    </button>
  );
};

export default Button;
