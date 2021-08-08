import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Loader from "@/components/Loader";
import Title from "@/components/Title";
import Image from "@/components/Image";
import { DefaultState } from "@/models/default";
import LogoImage from "@/assets/images/logo.jpg";
import stylesheet from "./stylesheet.module.scss";
import Button from "#/src/components/Button";

interface State extends DefaultState {
  title: string;
}

export const Home: React.FC = () => {
  const [state, setState] = useState<State>({
    pending: true,
    title: "Home",
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
        <Image
          image={LogoImage}
          alt="logo"
          className={clsx(stylesheet["logo"])}
        />
      <Button>SignIn</Button>
    </>
  );
};

export default Home;
