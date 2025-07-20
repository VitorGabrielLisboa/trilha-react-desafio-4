import React from "react";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { MdEmail, MdLock } from "react-icons/md";

import styles from "./styles.module.scss";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { Link, useNavigate } from "react-router-dom";

import * as yup from "yup";

// esquema para validar o formulário
const schema = yup
  .object({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "No mínimo 4 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  // const form = watch();
  console.log(isValid);
  const onSubmit = (formData: any) => {
    navigate("/user", { state: { userEmail: formData.email } });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
        <h2 className={styles.title}>Sign In</h2>
        <div className={styles.line}></div>
        <p className={styles.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima,
          commodi?
        </p>
        <div className={styles.inputBox}>
          <Input
            name="email"
            title="Email"
            type="email"
            erro={errors?.email?.message}
            Icon={MdEmail}
            control={control}
          />
          <Input
            name="password"
            title="Password"
            type="password"
            erro={errors?.password?.message}
            Icon={MdLock}
            control={control}
          />
          <Button title="Login" type="submit" disabled={!isValid} />
        </div>
      </form>
    </div>
  );
};
