import React, { useContext, Fragment, FunctionComponent } from "react";
import Typography from "@Components/Typography/Typography";
import Sidebar from "@Components/Sidebar/Sidebar";
import bubbles from "@Assets/icons/bubbles.svg";
import Header from "@Components/Header/Header";
import person from "@Assets/icons/person.svg";
import Image from "@Components/Image/Image";
import pin from "@Assets/icons/pin.svg";
import { IProfileBody } from "./IProfile";
import Link from "@Components/Link/Link";
import Card from "@Components/Card/Card";
import Icon from "@Components/Icon/Icon";
import Hero from "@Components/Hero/Hero";
import { posts } from "@Utils/posts";
import { IUser } from "@Types/user";

const ProfileBody: FunctionComponent<IProfileBody> = ({ context }) => {
  const [user, users] = useContext(context);

  if (!Object.keys(user).length || !users.length) return null;
  const { name, image, location } = user;

  return (
    <Fragment>
      <Hero title={name} subtitle={location.name} image={image} />
      <Header
        title={`${name}'s Wall`}
        children={
          <nav>
            <Link children="Home" href="/home" label="Home" />
          </nav>
        }
      />

      <div className="row">
        <div className="col-lg-3 flex flex--stack">
          <Sidebar
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            className="m--bottom-md"
            title="Bio"
            children={
              <Fragment>
                <span className="flex flex--v-centre m--bottom-s">
                  <Icon src={bubbles} className="m--right-xs" />
                  <Typography
                    text={`${user.gender} ${user.species}`}
                    size="s"
                  />
                </span>
                <span className="flex flex--v-centre m--bottom-s">
                  <Icon src={pin} className="m--right-xs" />
                  <Typography text={user.location.name} size="s" />
                </span>
                <span className="flex flex--v-centre m--bottom-s">
                  <Icon src={person} className="m--right-xs" />
                  <Typography text={user.status} size="s" />
                </span>
              </Fragment>
            }
          />
          <Sidebar
            title={`${users.length} Friends`}
            className="m--bottom-md"
            children={
              <div className="row">
                {users.map((user: IUser) => (
                  <div className="col-lg-4" key={user.id}>
                    <Link
                      href={`/profile/${user.id}`}
                      label={user.name}
                      children={
                        <Image
                          className="m--bottom-md"
                          src={user.image}
                          alt={user.name}
                          profile
                        />
                      }
                    />
                  </div>
                ))}
              </div>
            }
          />
          <Sidebar className="m--bottom-md" title="Photos" />
        </div>
        <div className="col-lg-7">
          {Object.values(posts).map((post, index) => (
            <Card
              title={`Posted ${post.posted} minutes ago`}
              post={post}
              key={index}
            />
          ))}
        </div>
        <div className="col-lg-2">
          <Sidebar title="Something else" />
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileBody;
