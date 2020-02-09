import React, { FunctionComponent } from "react";
import Typography from "@Components/Typography/Typography";
import useObserver from "@Hooks/useObserver";
import { IHeader } from "./IHeader";
import clsx from "clsx";
import "./Header.scss";

const Header: FunctionComponent<IHeader> = ({ title, subtitle, children }) => {
  const [headerRef, inView] = useObserver();

  return (
    <header
      className={clsx("header m--bottom-lg", {
        "to--animate": !inView,
        "bring--in": inView
      })}
      ref={headerRef}
    >
      <div className="header__inner flex flex--between flex--v-centre">
        <div>
          <Typography
            className="m--bottom-s"
            text={title}
            variant="h2"
            size="xl"
          />
          {subtitle ? (
            <Typography text={subtitle} size="md" variant="h3" />
          ) : null}
        </div>
        <div>{children}</div>
      </div>
    </header>
  );
};

export default Header;
