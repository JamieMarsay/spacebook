import React, { FunctionComponent } from "react";
import { IIcon } from "./IIcon";
import "./Icon.scss";
import clsx from "clsx";

const Icon: FunctionComponent<IIcon> = ({ src, className }) => (
  <div
    className={clsx("icon__container", {
      [`${className}`]: className
    })}
  >
    <img src={src} />
  </div>
);

export default Icon;
