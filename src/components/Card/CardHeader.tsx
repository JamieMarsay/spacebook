import React, { FunctionComponent } from "react";
import Image from "@Components/Image/Image";
import Link from "@Components/Link/Link";
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
      <Link
        className="card__link width--100"
        href={`/profile/${userId}`}
        label="To user's profile"
        children={
          <Image
            subtitle={`Posted ${post.posted} minutes ago`}
            alt="Character image"
            caption={title}
            src={image}
          />
        }
      />
    </div>
  ) : null;

export default CardHeader;
