import React, { FunctionComponent } from "react";
import { ILink } from "./ILink";
import clsx from "clsx";
import "./Link.scss";

const Link: FunctionComponent<ILink> = ({ href, children, label, className }) => (
  <a className={clsx("link", {
    [`${className}`]: className
  })} href={href} aria-label={label}>
    {children}
  </a>
);

export default Link;
