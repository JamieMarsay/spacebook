import React, { FunctionComponent } from "react";
// import { AppProvider, AppContext } from "@Context/AppProvider/AppProvider";
import Header from "@Components/Header/Header";
import { IMain } from "./IMain";
import "./Main.scss";

const Main: FunctionComponent<IMain> = ({ Current }) => (
  <main className="main">
    <div className="main__inner">
      {/* <Header /> */}
      <Current />
    </div>
  </main>
);

export default Main;
