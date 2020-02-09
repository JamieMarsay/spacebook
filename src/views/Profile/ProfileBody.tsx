import React, { useContext, Fragment, FunctionComponent } from "react";
import Header from "@Components/Header/Header";
import { IProfileBody } from "./IProfile";
import Card from "@Components/Card/Card";
import Hero from "@Components/Hero/Hero";
import { posts } from "@Utils/posts";

const ProfileBody: FunctionComponent<IProfileBody> = ({ context }) => {
  const [user] = useContext(context);

  if (!Object.keys(user).length) return null;
  const { name, image, location } = user;

  return (
    <Fragment>
      <Hero title={name} subtitle={location.name} image={image} />
      <Header title={`${name.split(" ")[0]}'s Wall`} />
      {Object.values(posts).map(post => (
        <Card title={`Posted ${post.posted} minutes ago`} post={post} />
      ))}
    </Fragment>
  );
};

export default ProfileBody;
