import React from "react";
import ContentOneImg from "assets/imgs/content-001.png";
import ContentTwoImg from "assets/imgs/content-002.png";
const Content: React.FC = () => {
  return (
    <div className="container mt-20">
      <div className="flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2">
          <img src={ContentOneImg} alt="content " />
        </div>
        <div className="w-full md:w-1/2 mt-16 px-4 lg:px-16">
          <h2 className="text-primary text-2xl font-bold">
            We can give you our
            <br />
            best user experience
            <br />
            to your system
          </h2>
          <p className="text-md text-gray-400 mt-4 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="md:flex">
        <div className="w-full md:w-1/2 mt-16 px-4 lg:px-16">
          <h2 className="text-primary text-2xl font-bold">
            Easy access.
            <br />
            Whenever,wherever
            <br />
            you want
          </h2>
          <p className="text-md text-gray-400 mt-4 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img src={ContentTwoImg} alt="content " />
        </div>
      </div>
    </div>
  );
};

export default Content;
