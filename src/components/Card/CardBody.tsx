import React, { FunctionComponent } from "react";
import Typography from "@Components/Typography/Typography";
import { IUsesPost } from "./ICard";

const CardBody: FunctionComponent<IUsesPost> = ({ post }) => {
  return (
    <div className="p--all-md">
      <Typography text={post.text} className="m--bottom-md" />
    </div>
  );
};

export default CardBody;
