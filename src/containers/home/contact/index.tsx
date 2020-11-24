import React from "react";
import MapImg from "assets/imgs/map.png";
import Form from "./Form";
const Contact = () => {
  return (
    <div className="mt-32">
      <h2 className="text-center text-3xl text-primary font-bold">
        Contact Us
      </h2>
      <div className="container flex flex-col-reverse md:flex-row mt-16 px-0 md:px-16">
        <div className="w-full md:w-1/2 shadow-2xl rounded-lg">
          <Form />
        </div>
        <div className="w-full md:w-1/2 flex items-center">
          <img src={MapImg} alt="map" className="my-12 " />
        </div>
      </div>
    </div>
  );
};

export default Contact;
