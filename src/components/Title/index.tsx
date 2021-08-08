import React from "react";
import { TitleProps } from "@/models/props";
import stylesheet from "./stylesheet.module.scss";

export const Title: React.FC<TitleProps> = ({
  name,
  ...props
}) => {
  return <h1 className={stylesheet["title"]}>{name}</h1>;
};

export default Title;
