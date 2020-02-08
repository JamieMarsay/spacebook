import React from "react";
import Typography from "@Components/Typography/Typography";
import "./Header.scss";

const Header = () => (
  <header className="header">
    <div className="p--top-md p--bottom-md">
      <Typography text="News Feed" variant="h1" size="xxl" />
      <Typography text="12 Posts" size="lg" variant="h2" />
    </div>
  </header>
);

export default Header;
