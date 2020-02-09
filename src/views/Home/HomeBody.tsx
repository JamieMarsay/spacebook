import React, {
  FunctionComponent,
  ChangeEvent,
  useContext,
  useState,
  Fragment
} from "react";
import rickMorty from "@Assets/images/rick-morty.png";
import Button from "@Components/Button/Button";
import Header from "@Components/Header/Header";
import Select from "@Components/Select/Select";
import { getRandomPost } from "@Utils/posts";
import Card from "@Components/Card/Card";
import Hero from "@Components/Hero/Hero";
import { IUser } from "@Types/user";
import { IHome } from "./IHome";

const HomeBody: FunctionComponent<IHome> = ({ context }) => {
  const [user, updates] = useContext(context);

  if (!Object.keys(user).length || !updates.length) return null;

  const [updateList, setUpdateList] = useState(
    updates
      .map((update: any) => ({ ...update, post: getRandomPost() }))
      .sort((a: IUser, b: IUser) => a.post.posted - b.post.posted)
  );

  const handleSort = (e: ChangeEvent<HTMLSelectElement>) => {
    const filter = e.target.value.toLowerCase();
    setUpdateList(
      [...updateList].sort((a: IUser, b: IUser) =>
        filter === "likes"
          ? b.post.likes - a.post.likes
          : a.post[`${filter}`] - b.post[`${filter}`]
      )
    );
  };

  return (
    <Fragment>
      <Hero title="News Feed" image={rickMorty} />
      <Header
        title={`${updateList.length} New posts`}
        children={
          <Select onChange={handleSort} options={["Posted", "Likes"]} />
        }
      />
      {updateList.map((user: IUser) => (
        <Card
          image={user.image}
          title={user.name}
          userId={user.id}
          post={user.post}
          key={user.id}
        />
      ))}
      <div className="centre">
        <Button
          action={() =>
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth"
            })
          }
          className="width--100"
          text="Back to top"
        />
      </div>
    </Fragment>
  );
};

export default HomeBody;
