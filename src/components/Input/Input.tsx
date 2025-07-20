import React from "react";
import styles from "./styles.module.scss";

import { IconType } from "react-icons";
import { Control, Controller } from "react-hook-form";

interface InputProps {
  title: string;
  name: string;
  type: string;
  erro?: string;
  Icon: IconType;
  control: Control<any, any>;
}

export const Input: React.FC<InputProps> = ({
  title,
  name,
  type,
  erro,
  Icon,
  control,
}) => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputBox}>
        <Icon />
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <input
              type={type}
              placeholder={title}
              autoComplete="off"
              {...field}
            />
          )}
        />
      </div>
      {erro ? <span className={styles.errorMessage}>{erro}</span> : null}
    </div>
  );
};
