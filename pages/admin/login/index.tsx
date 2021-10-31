import React from "react";
import InputField from "../../../components/InputField";
import { useForm } from "react-hook-form";
import classes from "./LoginForm.module.sass";
import clsx from "clsx";

const Login = () => {
  const { register } = useForm();

  return (
    <div className={classes.loginPage}>
      <div className={clsx("card", classes.loginForm)}>
        <div className="card-content">
          <h1 className="title">Log in</h1>
          <InputField
            name="email"
            label="Email"
            register={register}
            autoFocus
          />
          <InputField name="password" label="Password" register={register} />
          <button type="submit" className="button is-primary is-fullwidth">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
