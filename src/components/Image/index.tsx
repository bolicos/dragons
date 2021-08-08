import React from "react";
import clsx from "clsx";
import { ImageProps } from "@/models/props";
import stylesheet from "./stylesheet.module.scss";

export const Image: React.FC<ImageProps> = ({
  className,
  image,
  alt,
  ...props
}) => {
  return (
    <img
      src={image}
      alt={alt}
      className={clsx(stylesheet["image"], className)}
      {...props}
    />
  );
};

export default Image;
