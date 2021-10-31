import React from "react";
import InputField from "../../../components/InputField";
import { useForm } from "react-hook-form";
import classes from "./LoginForm.module.sass";
import clsx from "clsx";
import { signIn } from "../../../api/sessionsClient";
import { useNotSignedIn } from "../../../hooks/useAuth";
import { useRouter } from "next/router";
import { useApolloClient } from "@apollo/client";

interface SignInParams {
  email: string;
  password: string;
}

const Login = () => {
  useNotSignedIn();
  const { register, handleSubmit } = useForm<SignInParams>();
  const router = useRouter();
  const client = useApolloClient();

  const onSubmit = async ({ email, password }: SignInParams) => {
    try {
      const res = await signIn(email, password);
      if (res.status === "OK") {
        await client.clearStore();
        router.push("/admin/slots");
      }
    } catch (e) {}
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
