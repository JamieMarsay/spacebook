import React, { FunctionComponent } from "react";
import { ILink } from "./ILink";
import "./Link.scss";

const Link: FunctionComponent<ILink> = ({ href, children, label }) => (
  <a className="link" href={href} aria-label={label}>
    {children}
  </a>
);

export default Link;
