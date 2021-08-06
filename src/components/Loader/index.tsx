import React from "react";
import stylesheet from "./stylesheet.module.scss";

export const Loader: React.FC = () => {
  return <div className={stylesheet["loader"]}>CARREGANDO</div>;
};

export default Loader;
