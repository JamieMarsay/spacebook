import React, { FunctionComponent } from "react";
import { IMain } from "./IMain";
import "./Main.scss";

const Main: FunctionComponent<IMain> = ({ Current }) => (
  <main className="main">
    <div className="main__inner flex flex--centre flex--v-centre">
      <Current />
    </div>
  </main>
);

export default Main;
