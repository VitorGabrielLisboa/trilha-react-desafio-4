import React from "react";
import styles from "./styles.module.scss";
import { useLocation } from "react-router-dom";

interface UserProps {}

export const User: React.FC<UserProps> = () => {
  const location = useLocation();
  const userEmail = location.state?.userEmail || "convidado@gmail.com";

  const newUser = (user: string): any => {
    let userName: string = user.slice(0, Array.from(user).indexOf("@"));
    return userName.charAt(0).toLocaleUpperCase() + userName.slice(1);
  };

  return (
    <div className={styles.userContainer}>
      <h2>Bem vindo, {newUser(userEmail)}</h2>
    </div>
  );
};
