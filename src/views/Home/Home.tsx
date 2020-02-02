import React, { FunctionComponent } from "react";
import Typography from "@Components/Typography/Typography";

const Home: FunctionComponent = () => (
  <section className="p--all-md">
    <Typography text="Jamie's React Boilerplate" variant="h1" />
    <Typography text="The boilerplate makes no assumptions about what components you may or may not require and so, to that end, provides 2 basic ones." />
  </section>
);

export default Home;
