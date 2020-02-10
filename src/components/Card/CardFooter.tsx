import React, {
  FunctionComponent,
  ChangeEvent,
  useState,
  createRef
} from "react";
import thumbsUpActive from "@Assets/icons/thumb-up-active.svg";
import Typography from "@Components/Typography/Typography";
import commentIcon from "@Assets/icons/comment.svg";
import thumbsUp from "@Assets/icons/thumb-up.svg";
import { Input } from "@Components/Input/Input";
import Button from "@Components/Button/Button";
import morty from "@Assets/images/morty.jpg";
import share from "@Assets/icons/Share.svg";
import Image from "@Components/Image/Image";
import Link from "@Components/Link/Link";
import { ICardFooter } from "./ICard";

const CardFooter: FunctionComponent<ICardFooter> = ({ post, inView }) => {
  const textRef = createRef<HTMLTextAreaElement>();
  const [allComments, setAllComments] = useState(post.comments);
  const [liked, toggleLiked] = useState(false);
  let [likes, setLikes] = useState(post.likes);
  const [comment, setComment] = useState("");
  const [error, setError] = useState(false);

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
        image: morty,
        userId: 2
      };

      setAllComments([...allComments, commentToAdd]);
      setComment("");
      setError(false);
    } else {
      setError(true);
    }
  };

  const focusTextArea = () => {
    if (textRef.current) {
      textRef.current.focus();
    }
  };

  return (
    <div className="card__footer card--section">
      <div className="flex flex--between p--bottom-md">
        <div className="flex">
          <Button
            action={() => upDownVote()}
            icon={liked ? thumbsUpActive : thumbsUp}
            className="m--right-s"
            alt
          />
          <Button
            action={() => focusTextArea()}
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
          <Typography
            text={`${likes} likes & ${allComments.length} comments`}
          />
        </div>
      </div>
      {allComments.length > 0 ? (
        <div className="card__comments p--top-md m--bottom-md border--top">
          {allComments.map(comment => (
            <div className="flex flex--v-start" key={comment.text}>
              {inView ? (
                <Link
                  href={`/profile/${comment.userId}`}
                  className="m--bottom-s"
                  label={comment.name}
                >
                  <Image
                    alt="User profile picture"
                    className="m--right-md"
                    src={comment.image}
                    profile
                  />
                </Link>
              ) : null}
              <div className="card__comment m--bottom-md">
                <Link
                  href={`/profile/${comment.userId}`}
                  className="m--bottom-s"
                  children={comment.name}
                  label={comment.name}
                />
                <Typography text={comment.text} />
              </div>
            </div>
          ))}
        </div>
      ) : null}
      <div className="border--top p--top-md">
        <Input
          className="width--100 m--bottom-md"
          placeholder="Write a comment..."
          onChange={handleComment}
          value={comment}
          error={error}
          ref={textRef}
        />
        <span className="flex flex--end">
          <Button text="Post" action={() => postComment()} />
        </span>
      </div>
    </div>
  );
};

export default CardFooter;
