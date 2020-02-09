import React, { FunctionComponent } from "react";
import Image from "@Components/Image/Image";
import { ICardHeader } from "./ICard";
import clsx from "clsx";

const CardHeader: FunctionComponent<ICardHeader> = ({
  userId,
  title,
  image,
  post
}) =>
  image ? (
    <div className="card__header">
      <a
        className={clsx("card__link width--100", {})}
        aria-label="To user's profile"
        href={`/profile/${userId}`}
      >
        <Image
          subtitle={`Posted ${post.posted} minutes ago`}
          alt="Character image"
          caption={title}
          src={image}
        />
      </a>
    </div>
  ) : null;

export default CardHeader;
