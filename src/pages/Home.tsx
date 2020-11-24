import React from "react";
import {
  Landing,
  Content,
  People,
  PeopleComments,
  Partners,
  Contact,
  Footer,
} from "containers";

function Home() {
  return (
    <>
      <Landing />
      <Content />
      <PeopleComments />
      <People />
      <Partners />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
