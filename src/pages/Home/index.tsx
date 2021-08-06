import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import Title from "@/components/Title";
import Container from "@/components/Container";
import Image from "@/components/Image";
import WallpaperImage from "@/assets/images/kali.png";
import { ReactComponent as LogoImage } from "@/assets/images/logo.svg";
import { DefaultState } from "@/models/default";
import stylesheet from "./stylesheet.module.scss";

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
    <Container>
      <LogoImage />
      <Title name={state.title} className={stylesheet[""]} />
      <Image image={WallpaperImage} alt="wallpaper" />
    </Container>
  );
};

export default Home;
