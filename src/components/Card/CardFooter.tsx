import React, {
  FunctionComponent,
  ChangeEvent,
  useState,
  createRef
} from "react";
import thumbsUpActive from "@Assets/icons/thumb-up-active.svg";
import Typography from "@Components/Typography/Typography";
import commentIcon from "@Assets/icons/comment.svg";
import { TextArea } from "@Components/Input/Input";
import thumbsUp from "@Assets/icons/thumb-up.svg";
import Button from "@Components/Button/Button";
import morty from "@Assets/images/morty.jpg";
import share from "@Assets/icons/Share.svg";
import Image from "@Components/Image/Image";
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
        image: morty
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
        <div className="card__comments">
          {allComments.map(comment => (
            <div
              className="flex flex--v-start border--top p--top-md p--bottom-md"
              key={comment.text}
            >
              <div className="card__comment-image m--right-md">
                {inView ? <Image src={morty} /> : null}
              </div>
              <div className="card__comment">
                <Typography className="m--bottom-xs" text={comment.name} bold />
                <Typography text={comment.text} />
              </div>
            </div>
          ))}
        </div>
      ) : null}
      <div className="border--top p--top-md">
        <TextArea
          placeholder="Write a comment..."
          onChange={handleComment}
          className="width--100"
          value={comment}
          error={error}
          ref={textRef}
        />
        <span className="flex flex--end">
          <Button text="Post" action={() => postComment()} alt />
        </span>
      </div>
    </div>
  );
};

export default CardFooter;
