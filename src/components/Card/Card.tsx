import React, {
  FunctionComponent,
  createRef,
  useState,
  useEffect
} from "react";
import Typography from "@Components/Typography/Typography";
import thumbsUp from "@Assets/icons/thumb-up.svg";
import comment from "@Assets/icons/comment.svg";
import Button from "@Components/Button/Button";
import { getRandomPost } from "@Utils/posts";
import share from "@Assets/icons/Share.svg";
import close from "@Assets/icons/close.svg";
import Image from "@Components/Image/Image";
import Icon from "@Components/Icon/Icon";
import { ICard } from "./ICard";
import "./Card.scss";

const Card: FunctionComponent<ICard> = ({ src, title, action }) => {
  const cardRef = createRef<HTMLDivElement>();
  const [liked, toggleLiked] = useState(false);
  const [post, setPost] = useState(getRandomPost());
  let [likes, setLikes] = useState(0);

  const trigger = () => {
    const node = cardRef.current;

    if (node) {
      node.classList.toggle("slide--out");

      setTimeout(() => {
        node.style.display = "none";

        action && action();
      }, 500);
    }
  };

  const upDownVote = () => {
    toggleLiked(!liked);

    if (liked) {
      setLikes((likes -= 1));
    } else {
      setLikes((likes += 1));
    }
  };

  useEffect(() => {
    setLikes(Math.floor(Math.random() * 15));
  }, []);

  return (
    <div className="card m--bottom-md" ref={cardRef}>
      <div className="card--section card__header border--bottom">
        <div className="flex">
          <div className="card__image m--right-lg">
            <Image src={src} />
          </div>
          <div className="flex flex--stack flex--centre">
            <Typography text={title} bold variant="h3" size="lg" />
            <Typography
              text={`Posted ${Math.floor(Math.random() * 25)} minutes ago`}
              size="xs"
            />
          </div>
        </div>
        <span onClick={() => trigger()}>
          <Icon src={close} />
        </span>
      </div>
      <div className="card__body">
        <Typography text={post.text} />
      </div>
      <div className="card--section">
        <div className="flex">
          <Button
            action={() => upDownVote()}
            className="m--right-s"
            icon={thumbsUp}
            alt
          />
          <Button
            action={() => console.log("comment")}
            className="m--right-s"
            icon={comment}
            alt
          />
          <Button
            action={() => console.log("share")}
            className="m--right-s"
            icon={share}
            alt
          />
        </div>
        <div>
          <Typography text={`${likes} likes`} />
        </div>
      </div>
    </div>
  );
};

export default Card;
