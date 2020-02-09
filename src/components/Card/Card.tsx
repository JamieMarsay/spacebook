import React, { FunctionComponent } from "react";
import useObserver from "@Hooks/useObserver";
import Header from "./CardHeader";
import Footer from "./CardFooter";
import { ICard } from "./ICard";
import Body from "./CardBody";
import clsx from "clsx";
import "./Card.scss";

const Card: FunctionComponent<ICard> = ({ title, image, post, userId }) => {
  const [cardRef, inView] = useObserver();

  return (
    <div className="card m--bottom-lg" ref={cardRef}>
      <Header
        userId={userId}
        inView={inView}
        title={title}
        image={image}
        post={post}
      />
      <div
        className={clsx("card__inner", {
          "to--animate": !inView,
          "bring--in": inView
        })}
      >
        <Body post={post} />
        <Footer post={post} inView={inView} />
      </div>
    </div>
  );
};

export default Card;
