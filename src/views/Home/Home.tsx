import React, { FunctionComponent } from "react";
import { AppProvider, AppContext } from "@Context/AppProvider/AppProvider";
import { randomCharacters } from "@Utils/randomCharacters";
import Body from "./HomeBody";

const Home: FunctionComponent = () => (
  <AppProvider
    urls={[`https://rickandmortyapi.com/api/character/${randomCharacters()}`]}
    children={
      <section className="view">
        <Body context={AppContext} />
      </section>
    }
  />
);

export default Home;
