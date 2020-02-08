import React, { FunctionComponent } from "react";
import Typography from "@Components/Typography/Typography";
import Image from "@Components/Image/Image";
import { ICardHeader } from "./ICard";

const CardHeader: FunctionComponent<ICardHeader> = ({
  inView,
  title,
  image,
  post
}) => (
  <div className="card__image pos--rel">
    <div className="card__half">
      <div className="p--all-md">
        <Typography
          className="m--bottom-xs"
          text={title}
          variant="h2"
          size="xl"
        />
        <Typography text={`Posted ${post.posted} minutes ago`} size="md" bold />
      </div>
    </div>

    {inView ? (
      <Image src={image} />
    ) : (
      <div className="card__image--loading"></div>
    )}
  </div>
);

export default CardHeader;
