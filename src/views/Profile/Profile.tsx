import React from "react";
import { AppProvider, AppContext } from "@Context/AppProvider/AppProvider";
import { useParams } from "react-router-dom";
import Body from "./ProfileBody";

const Profile = () => {
  const { userId } = useParams();

  return (
    <AppProvider
      urls={[`https://rickandmortyapi.com/api/character/${userId}`]}
      children={
        <section>
          <Body context={AppContext} />
        </section>
      }
    />
  );
};

export default Profile;
