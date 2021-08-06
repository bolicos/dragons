import React, { useEffect, useState } from "react";
import { ReactComponent as LogoImage } from "@/assets/images/logo.svg";
import stylesheet from "./stylesheet.module.scss";
import { DefaultState } from "@/models/default";
import Loader from "@/components/Loader";
import Container from "#/src/components/Container";
import Title from "#/src/components/Title";

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
    <Container>
      <LogoImage />
      <Title name={state.title} className={stylesheet[""]} />
    </Container>
  );
};

export default SignIn;
