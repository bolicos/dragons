import React from "react";
import clsx from "clsx";
import { ButtonProps } from "@/models/attributes-props";
import stylesheet from "./stylesheet.module.scss";

export const Button: React.FC<ButtonProps> = ({
  color,
  className,
  children,
  ...props
}) => {
  return (
    <button className={clsx(stylesheet["button"], stylesheet["first"], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
