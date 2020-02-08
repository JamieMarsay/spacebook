import React, { FunctionComponent, useState } from "react";
import useObserver from "@Hooks/useObserver";
import Header from "./CardHeader";
import Footer from "./CardFooter";
import { ICard } from "./ICard";
import Body from "./CardBody";
import clsx from "clsx";
import "./Card.scss";

const Card: FunctionComponent<ICard> = ({ action, user }) => {
  const { image, post } = user;
  const [closed, toggleClosed] = useState(false);
  const [slideOut, setSlide] = useState(false);
  const [cardRef, inView] = useObserver();

  const trigger = () => {
    setSlide(true);

    setTimeout(() => {
      toggleClosed(true);
      action && action();
    }, 450);
  };

  return !closed ? (
    <div
      className={clsx("card m--bottom-lg", {
        "fade fade--out": slideOut,
        // "to--animate": !inView,
        "card--closed": closed
        // "bring--in": inView
      })}
      ref={cardRef}
    >
      <Header post={post} title={user.name} inView={inView} image={image} />
      <div
        className={clsx("card__inner", {
          "to--animate": !inView,
          "bring--in": inView
        })}
      >
        <Body post={post} inView={inView} />
        <Footer post={post} inView={inView} />
      </div>
    </div>
  ) : null;
};

export default Card;
