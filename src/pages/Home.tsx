import React from "react";
import { Landing, Content, People, PeopleComments } from "containers";

function Home() {
  return (
    <>
      <Landing />
      <Content />
      <PeopleComments />
      <People />
    </>
  );
}

export default Home;
