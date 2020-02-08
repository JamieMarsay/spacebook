import React, { FunctionComponent } from "react";
import { IImage } from "./IImage";
import clsx from "clsx";
import "./Image.scss";

const Image: FunctionComponent<IImage> = ({ src, profile }) => (
  <img className="image" src={src} />
);

export default Image;
