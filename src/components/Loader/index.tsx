import React from "react";
import clsx from "clsx";
import { LoaderProps } from "@/models/props";
import stylesheet from "./stylesheet.module.scss";

export const Loader: React.FC<LoaderProps> = ({
  color = "#9871f5",
  className,
  ...props
}) => {

  const circles = [...Array(12)].map((_, index) => {
    return (
      <div key={index}>
        <div
          className={clsx(stylesheet["div-after"], className)}
          style={{ background: color }}
        />
      </div>
    );
  });

  return (
    <div className={clsx(stylesheet["lds-spinner"], className)}>{circles}</div>
  );
};

export default Loader;
