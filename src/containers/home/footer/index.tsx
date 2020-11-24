import React from "react";
import FooterRight from "assets/svg/footer-rounded-002.svg";
import FooterLeft from "assets/svg/footer-rounded-001.svg";
import LogoImg from "assets/imgs/logo.png";
const Footer: React.FC = () => {
  return (
    <div className="mt-28  bg-primary py-10 relative overflow-hidden ">
      <div className="container md:flex relative z-20 px-6 md:px-0">
        <div className="md:w-4/12">
          <div className="flex  items-center mt-8">
            <img src={LogoImg} className="w-16 h-auto" alt="logo" />
            <p className="text-white text-xl ml-6 font-bold">Easy Work</p>
          </div>
        </div>
        <div className="md:w-3/12 ">
          <p className="font-bold text-md text-white  mt-6 md:mt-0">Address</p>
          <p className=" text-md text-white leading-relaxed font-thin">
            52-1, Jalan Awan Hiju,Taman Overseas Union, 58200 Kuala Lumpor,
            Wilayah Persekutuan Kuala Lampour
          </p>
        </div>
        <div className="md:w-3/12 ml-0 md:ml-6 mt-6 md:mt-0">
          <p className="font-bold text-md text-white">Contact</p>
          <p className=" text-md text-white font-thin">03-7451 5283</p>
          <p className="font-bold text-md text-white mt-4">Fax</p>
          <p className=" text-md text-white font-thin">13-7451 5283</p>
        </div>
      </div>
      <img
        src={FooterRight}
        alt="footer"
        className="absolute z-0 "
        style={{ top: -75, right: -176 }}
      />
      <img
        src={FooterLeft}
        alt="footer"
        className="absolute  z-0"
        style={{ top: -15, left: -176, width: 300 }}
      />
    </div>
  );
};

export default Footer;
