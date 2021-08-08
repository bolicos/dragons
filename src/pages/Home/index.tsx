import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import Loader from "@/components/Loader";
import Title from "@/components/Title";
import Image from "@/components/Image";
import { DefaultState } from "@/models/default";
import LogoImage from "@/assets/images/logo.jpg";
import Button from "@/components/Button";
import Container from "@/components/Container";
import { ROUTES } from "@/helpers/system";
import stylesheet from "./stylesheet.module.scss";

interface State extends DefaultState {
  title: string;
}

const Home: React.FC = () => {
  const history = useHistory();
  const [state, setState] = useState<State>({
    pending: true,
    title: "Home",
  });

  function redirect(route: string) {
    history.push(route);
  }

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
      <Title name={state.title} />
      <Image
        image={LogoImage}
        alt="logo"
        className={clsx(stylesheet["logo"])}
      />
      <Button onClick={() => redirect(ROUTES.SIGN_IN())}>SignIn</Button>
    </Container>
  );
};

export default Home;
