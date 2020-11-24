import React from "react";
import BannerImg from "assets/imgs/banner.png";

const Banner: React.FC = () => {
  return (
    <div className="md:flex container pt-8 z-20 relative">
      <div className="md:w-1/2 w-full ">
        <div className=" pt-16">
          <h1
            style={{ animationDelay: "500ms" }}
            className="font-bold fadeInUp animated text-white select-none  leading-relaxed  text-5xl text-center md:text-left"
          >
            Make development <br /> easy with us.
          </h1>
          <p
            style={{ animationDelay: "1s" }}
            className="text-white fadeInUp animated  text-md  select-none mt-2 px-4 md:px-0 text-center md:text-left"
          >
            Doing development can never be easy, and it takes time and
            resources.
            <br />
            We at EasyWork has the solution.
          </p>
        </div>
      </div>

      <img
        src={BannerImg}
        className=" md:w-1/2 w-full px-12 select-none md:px-0 mt-8 md:mt-0 md:relative  md:max-w-md"
        alt="banner"
        style={{ bottom: -66 }}
      />
    </div>
  );
};

export default Banner;
