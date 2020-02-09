import React, { FunctionComponent } from "react";
import Typography from "@Components/Typography/Typography";
import { ICardBody } from "./ICard";

const CardBody: FunctionComponent<ICardBody> = ({ post }) => (
  <div className="card__body card--section p--bottom-md">
    <Typography text={post.text} />
  </div>
);
export default CardBody;
