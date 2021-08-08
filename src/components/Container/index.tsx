import React from "react";
import clsx from "clsx";
import { ContainerProps } from "@/models/props";
import stylesheet from "./stylesheet.module.scss";

const Container: React.FC<ContainerProps> = ({
  row,
  column,
  className,
  children,
  ...props
}) => {
  return (
    <div className={clsx(stylesheet["container"], className, {
      [stylesheet['row']]: row,
      [stylesheet['column']]: column
    })} {...props}>
      {children}
    </div>
  );
};

export default Container;
