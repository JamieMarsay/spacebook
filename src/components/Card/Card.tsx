import React, {
  FunctionComponent,
  useState,
  useEffect,
  createRef
} from "react";
import Typography from "@Components/Typography/Typography";
import close from "@Assets/icons/close.svg";
import { getRandomPost } from "@Utils/posts";
import Image from "@Components/Image/Image";
import Icon from "@Components/Icon/Icon";
import { ICard } from "./ICard";
import clsx from "clsx";
import "./Card.scss";

const Card: FunctionComponent<ICard> = ({ src, title }) => {
  const [isOpen, toggleOpen] = useState(true);
  const [post, setPost] = useState();
  const cardRef = createRef();

  const trigger = () => {
    cardRef.current.classList.toggle("slide--out");

    setTimeout(() => {
      cardRef.current.style.display = "none";
    }, 500);
  };

  useEffect(() => {
    setPost(getRandomPost());
  }, []);

  return (
    <div
      className={clsx("card m--bottom-md", {})}
      onClick={() => trigger()}
      ref={cardRef}
    >
      <div className="card__heading border--bottom">
        <div className="flex">
          <div className="card__image m--right-lg">
            <Image src={src} />
          </div>
          <div className="flex flex--stack flex--centre">
            <Typography text={title} bold variant="h3" size="lg" />
            <Typography text={`Posted 15 minutes ago`} size="xs" />
          </div>
        </div>
        <Icon src={close} />
      </div>
      {post ? (
        <div className="card__body">
          <Typography text={post.text} />
        </div>
      ) : null}
    </div>
  );
};

export default Card;
