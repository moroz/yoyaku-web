import React from "react";
import InputField from "../../../components/InputField";
import { useForm } from "react-hook-form";
import classes from "./LoginForm.module.sass";
import clsx from "clsx";
import { signIn } from "../../../api/sessionsClient";

interface SignInParams {
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<SignInParams>();

  const onSubmit = async ({ email, password }: SignInParams) => {
    const res = await signIn(email, password);
    console.log(res);
  };

  return (
    <div className={classes.loginPage}>
      <form
        className={clsx("card", classes.loginForm)}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="card-content">
          <h1 className="title">Log in</h1>
          <InputField
            name="email"
            label="Email"
            register={register}
            autoFocus
          />
          <InputField
            name="password"
            label="Password"
            register={register}
            type="password"
          />
          <button type="submit" className="button is-primary is-fullwidth">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
