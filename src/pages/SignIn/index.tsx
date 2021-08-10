import React, { useEffect, useState, useCallback } from "react";
import clsx from "clsx";
import { useFormik } from "formik";
import jwtDecode from "jwt-decode";
import { AuthAPI } from "@/services/auth";
import { TokenModel, UserProps, Token } from "@/models/user";
import { DefaultState } from "@/models/default";
import { UserModel } from "@/models/user";
import Loader from "@/components/Loader";
import Image from "@/components/Image";
import LogoImage from "@/assets/images/logo.jpg";
import Title from "@/components/Title";
import stylesheet from "./stylesheet.module.scss";

interface State extends DefaultState {
  title: string;
  genericError: string;
}

export const SignIn: React.FC<UserProps> = ({ user, setUser, setIsSignIn }) => {
  const [state, setState] = useState<State>({
    pending: true,
    title: "SignIn",
    genericError: "",
  });

  const { handleBlur, handleSubmit, handleChange, setErrors, values } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (user: UserModel) => {
      authUser(user);
    },
  });

  const authUser = useCallback(async (user: UserModel) => {
    AuthAPI.signIn(user)
      .then((response) => {
        const payload: TokenModel = response.data;
        const token = jwtDecode<Token>(payload.token);
        const expiration = new Date(Number(token.exp).valueOf() * 1000);
        const now = new Date();

        setUser((user) => ({
          name: token.username,
          roles: token.roles,
          token: payload.token,
          isAuthenticated: expiration > now,
        }));

        setIsSignIn(true);
      })
      .catch((e) => {
        console.log("API Auth error: ", e);

        setErrors({
          username: "Usuario ou senha incorretos!",
        });
      })
      .finally(() => setState((old) => ({ ...old, pending: false })));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setState((old) => ({ ...old, pending: false }));
  }, []);

  return state.pending === true ? (
    <Loader />
  ) : (
    <>
      <Title name={state.title} />
      <Image image={LogoImage} alt="logo" className={clsx(stylesheet["logo"])} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={values.username} onChange={handleChange} onBlur={handleBlur} />
        <br />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
        <br />
        <button type="submit">SignIn</button>
        <div hidden={!!state.genericError}>{state.genericError}</div>
      </form>
    </>
  );
};

export default SignIn;
