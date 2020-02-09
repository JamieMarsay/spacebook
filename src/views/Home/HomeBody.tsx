import React, {
  FunctionComponent,
  useContext,
  useState,
  Fragment
} from "react";
import Typography from "@Components/Typography/Typography";
import pickleRick from "@Assets/images/picklerick.gif";
import Button from "@Components/Button/Button";
import Header from "@Components/Header/Header";
import Select from "@Components/Select/Select";
import { getRandomPost } from "@Utils/posts";
import Card from "@Components/Card/Card";
import Hero from "@Components/Hero/Hero";
import { todaysDate } from "@Utils/date";
import { IHome } from "./IHome";

const HomeBody: FunctionComponent<IHome> = ({ context }) => {
  const [user, updates] = useContext(context);

  if (!Object.keys(user).length) return null;

  if (user && !updates.length) return null;
  const [sort, setSort] = useState("posted");
  const [updateList, setUpdateList] = useState(
    updates
      .map((update: any) => ({ ...update, post: getRandomPost() }))
      .sort((a: any, b: any) => a.post.posted - b.post.posted)
  );

  const removeUpdate = (idToRemove: number) => {
    setUpdateList(
      updateList.filter((i: { id: number }) => i.id !== idToRemove)
    );
  };

  const handleSort = (e: any) => {
    const filter = e.target.value.toLowerCase();
    setSort(filter);
    setUpdateList(
      updateList.sort((a: any, b: any) =>
        e.target.value === "Likes"
          ? b.post.likes - a.post.likes
          : a.post[`${filter.toLowerCase()}`] -
            b.post[`${filter.toLowerCase()}`]
      )
    );
  };

  return (
    <Fragment>
      <Hero title="News Feed" subtitle={`${todaysDate}`} />
      <Header
        title={`${updateList.length} New posts`}
        children={
          <Select onChange={handleSort} options={["Posted", "Likes"]} />
        }
      />

      {updateList.length > 0 ? (
        <Fragment>
          {updateList.map((user: any) => (
            <Card
              action={() => removeUpdate(user.id)}
              user={user}
              key={user.id}
            />
          ))}
          <div className="centre">
            <Button
              className="width--100"
              text="Back to top"
              action={() =>
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth"
                })
              }
            />
          </div>
        </Fragment>
      ) : (
        <div className="flex flex--v-centre flex--centre flex--stack">
          <Typography
            className="m--top-xl m--bottom-xl"
            text="You're all caught up!"
            variant="h2"
            size="lg"
            bold
          />
          <img style={{ width: "250px" }} src={pickleRick} />
        </div>
      )}
    </Fragment>
  );
};

export default HomeBody;
