import React from "react";
import Banner from "./Banner";
import Header from "./Header";
import RightSquare from "./RightSquare";
import Squares from "./Squares";

const Landing: React.FC = () => {
  return (
    <div className="bg-primary relative" style={{ minHeight: 550 }}>
      <div className="container">
        <Header />
        <Banner />
        <Squares />
      </div>
      <RightSquare />
    </div>
  );
};

export default Landing;
