import React, { FunctionComponent } from "react";
import Typography from "@Components/Typography/Typography";
import { ISidebar } from "./ISidebar";
import "./Sidebar.scss";
import clsx from "clsx";

const Sidebar: FunctionComponent<ISidebar> = ({
  className,
  children,
  subtitle,
  title
}) => (
  <aside
    className={clsx("sidebar", {
      [`${className}`]: className
    })}
  >
    <div className="p--all-md">
      <Typography className="m--bottom-s" text={title} variant="h3" size="lg" />
      {subtitle ? (
        <Typography text={subtitle} className="m--bottom-md" size="s" />
      ) : null}
      {children}
    </div>
  </aside>
);

export default Sidebar;
