import React, { FunctionComponent } from "react";
import Typography from "@Components/Typography/Typography";
import Image from "@Components/Image/Image";
import { ICardHeader } from "./ICard";
import clsx from "clsx";

const CardHeader: FunctionComponent<ICardHeader> = ({
  inView,
  title,
  image,
  post
}) => (
  <div className="card__header">
    <div
      className={clsx("card__image", {
        "bring--in": inView,
        "to--animate": !inView
      })}
    >
      {inView ? (
        <Image src={image} />
      ) : (
        <div className="card__image--loading"></div>
      )}
      <div className="card__image-overlay">
        <div
          className={clsx("p--all-md", {
            "bring--in": inView,
            "to--animate": !inView
          })}
        >
          <Typography
            className="m--bottom-xs"
            text={title}
            variant="h2"
            size="xxl"
          />
          <Typography
            text={`Posted ${post.posted} minutes ago`}
            size="md"
            bold
          />
        </div>
      </div>
    </div>
  </div>
);

export default CardHeader;
