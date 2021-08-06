import React from "react";
import { TitleProps } from "@/models/attributes-props";
import stylesheet from "./stylesheet.module.scss";

export const Title: React.FC<TitleProps> = ({ name, ...props }) => {
  return <div className={stylesheet["title"]}>TITLE</div>;
};

export default Title;
