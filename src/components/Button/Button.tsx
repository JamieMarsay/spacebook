import React, { FunctionComponent } from "react";
import Icon from "@Components/Icon/Icon";
import { IButton } from "./IButton";
import clsx from "clsx";
import "./Button.scss";

const Button: FunctionComponent<IButton> = ({
  className,
  action,
  icon,
  text,
  alt
}) => {
  return (
    <button
      className={clsx("button", {
        [`${className}`]: className,
        "button--alt": alt
      })}
      onClick={() => action()}
    >
      {icon ? (
        <span className="flex flex--v-centre">
          <Icon src={icon} className="m--right-xs" size="s" />
          {text}
        </span>
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
