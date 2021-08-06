import React from "react";
import clsx from "clsx";
import { ContainerProps } from "@/models/attributes-props";
import stylesheet from "./stylesheet.module.scss";

export const Container: React.FC<ContainerProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={clsx(stylesheet["container"], className)} {...props}>
      {children}
    </div>
  );
};

export default Container;
