import React, { useContext, FunctionComponent } from "react";
import Typography from "@Components/Typography/Typography";
import Card from "@Components/Card/Card";
import { IHome } from "./IHome";

const HomeBody: FunctionComponent<IHome> = ({ context }) => {
  const [updates] = useContext(context);

  if (!updates.length) return null;

  return (
    <div>
      <Typography
        text={`News Feed - ${updates.length} Posts`}
        className="m--bottom-md"
        variant="h1"
        size="xl"
        bold
      />
      {updates.map((user: any) => (
        <Card key={user.id} title={user.name} src={user.image} />
      ))}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          })
        }
      >
        Back to top
      </button>
    </div>
  );
};

export default HomeBody;
