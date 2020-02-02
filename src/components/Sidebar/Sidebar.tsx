import React, { useContext, FunctionComponent } from "react";
import Typography from "@Components/Typography/Typography";
import Image from "@Components/Image/Image";
import pin from "@Assets/icons/pin.svg";
import bubbles from "@Assets/icons/bubbles.svg";
import { ISidebar } from "./ISidebar";
import "./Sidebar.scss";
import Icon from "@Components/Icon/Icon";

const SideBar: FunctionComponent<ISidebar> = ({ context }) => {
  const [user] = useContext(context);

  if (!Object.keys(user).length) return null;

  return (
    <aside className="sidebar shadow--primary">
      <div className="p--all-md">
        <Image src={user.image} profile />
        <div className="p--top-lg p--right-md p--bottom-xs border--bottom">
          <Typography
            className="m--bottom-s"
            text={user.name}
            variant="h3"
            size="lg"
            bold
          />
          <span className="flex flex--v-centre">
            <Icon src={bubbles} className="m--right-s" />
            <Typography text={user.species} size="s" className="m--bottom-xs" />
          </span>
          <span className="flex flex--v-centre">
            <Icon src={pin} className="m--right-s" />
            <Typography text={user.location.name} size="s" />
          </span>
        </div>
        <Typography
          className="p--top-xl p--right-md p--bottom-xs border--bottom"
          text="Friends"
        />
      </div>
    </aside>
  );
};

export default SideBar;
