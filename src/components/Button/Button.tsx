import React from "react";
import styles from "./styles.module.scss";

interface ButtonProps {
  title: string;
  onclick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onclick,
  type,
  disabled,
}) => {
  return (
    <button
      type={type}
      onClick={onclick}
      className={styles.button}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
