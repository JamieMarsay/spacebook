import React, {
  FunctionComponent,
  createRef,
  useState,
  Fragment,
  ChangeEvent
} from "react";
import thumbsUpActive from "@Assets/icons/thumb-up-active.svg";
import Typography from "@Components/Typography/Typography";
import commentIcon from "@Assets/icons/comment.svg";
import { TextArea } from "@Components/Input/Input";
import thumbsUp from "@Assets/icons/thumb-up.svg";
import Button from "@Components/Button/Button";
import morty from "@Assets/images/morty.jpg";
import share from "@Assets/icons/Share.svg";
import close from "@Assets/icons/close.svg";
import Image from "@Components/Image/Image";
import { ICard } from "./ICard";
import "./Card.scss";

const Card: FunctionComponent<ICard> = ({ src, title, action, post }) => {
  const cardRef = createRef<HTMLDivElement>();
  const [allComments, setAllComments] = useState(post.comments);
  const [liked, toggleLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [error, setError] = useState(false);
  let [likes, setLikes] = useState(post.likes);

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

  const handleComment = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const postComment = () => {
    if (comment.length) {
      const commentToAdd = {
        name: "Morty Smith",
        text: comment,
        image: morty
      };

      setAllComments([...allComments, commentToAdd]);
      setComment("");
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="card m--bottom-md" ref={cardRef}>
      <div className="card--section m--bottom-md">
        <div className="flex">
          <div className="card__image m--right-lg">
            <Image src={src} />
          </div>
          <div className="flex flex--stack flex--centre">
            <Typography text={title} bold variant="h3" size="lg" />
            <Typography text={`Posted ${post.posted} minutes ago`} size="xs" />
          </div>
        </div>
        <Button
          className="m--right-s"
          action={() => trigger()}
          icon={close}
          alt
        />
      </div>
      <div className="card__body">
        <Typography text={post.text} />
      </div>
      <div className="card--section card__header border--bottom">
        <div className="flex">
          <Button
            action={() => upDownVote()}
            icon={liked ? thumbsUpActive : thumbsUp}
            className="m--right-s"
            alt
          />
          <Button
            action={() => console.log("comment")}
            className="m--right-s"
            icon={commentIcon}
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
      <div className="card__footer">
        {allComments.length > 0
          ? allComments.map((comment: string) => (
              <span className="flex border--bottom p--top-s p--bottom-s flex--v-centre">
                <div className="card__image m--right-md">
                  <Image src={morty} />
                </div>
                <div>
                  <Typography
                    className="m--bottom-xs"
                    text={comment.name}
                    bold
                  />
                  <Typography text={comment.text} />
                </div>
              </span>
            ))
          : null}
        <TextArea
          className="width--100 m--top-md m--bottom-md"
          placeholder="Write a comment..."
          onChange={handleComment}
          value={comment}
          error={error}
        />
        <span className="flex flex--end">
          <Button text="Post" action={() => postComment()} alt />
        </span>
      </div>
    </div>
  );
};

export default Card;
