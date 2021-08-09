import React, { useEffect, useState } from "react";
import clsx from "clsx";
import stylesheet from "./stylesheet.module.scss";
import { DefaultState } from "@/models/default";
import Loader from "@/components/Loader";
import Image from "@/components/Image";
import LogoImage from "@/assets/images/logo.jpg";
import Title from "@/components/Title";

interface State extends DefaultState {
  title: string;
}

export const SignIn: React.FC = () => {
  const [state, setState] = useState<State>({
    pending: true,
    title: "SignIn",
  });

  useEffect(() => {
    setState((old) => ({
      ...old,
      pending: false,
    }));
  }, []);

  return state.pending === true ? (
    <Loader />
  ) : (
    <>
      <Title name={state.title} />
      <Image image={LogoImage} alt="logo" className={clsx(stylesheet["logo"])} />
    </>
  );
};

export default SignIn;
