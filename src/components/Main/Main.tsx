import React, { FunctionComponent } from "react";
import { AppProvider, AppContext } from "@Context/AppProvider/AppProvider";
import SideBar from "@Components/Sidebar/Sidebar";
import Header from "@Components/Header/Header";
import { IMain } from "./IMain";
import "./Main.scss";

const Main: FunctionComponent<IMain> = ({ Current }) => (
  <main className="main">
    <Header />
    <AppProvider
      urls={["https://rickandmortyapi.com/api/character/2"]}
      children={<SideBar context={AppContext} />}
    />
    <div className="main__inner flex">
      <Current />
    </div>
  </main>
);

export default Main;
