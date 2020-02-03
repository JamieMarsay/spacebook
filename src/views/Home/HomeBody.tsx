import React, {
  FunctionComponent,
  useContext,
  useState,
  Fragment
} from "react";
import Typography from "@Components/Typography/Typography";
import pickleRick from "@Assets/images/picklerick.gif";
import Button from "@Components/Button/Button";
import Card from "@Components/Card/Card";
import { IHome } from "./IHome";

const HomeBody: FunctionComponent<IHome> = ({ context }) => {
  const [updates] = useContext(context);

  if (!updates.length) return null;
  const [updateList, setUpdateList] = useState(updates);

  const removeUpdate = (idToRemove: number) => {
    setUpdateList(
      updateList.filter((i: { id: number }) => i.id !== idToRemove)
    );
  };

  return (
    <div className="m--bottom-xl">
      <Typography
        text={`News Feed - ${updateList.length} Posts`}
        className="m--bottom-md"
        variant="h1"
        size="xl"
        bold
      />
      {updateList.length > 0 ? (
        <Fragment>
          {updateList.map((user: any) => (
            <Card
              action={() => removeUpdate(user.id)}
              title={user.name}
              src={user.image}
              key={user.id}
            />
          ))}
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
    </div>
  );
};

export default HomeBody;
