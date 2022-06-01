import React from "react";
import "animate.css";
import Button from "./Button";

const Hero = ({ text, title, desc, button, children }) => {
  return (
    <div className=" h-[540px] bg-[url('./images/slider-bg.jpeg')] bg-cover bg-no-repeat bg-bottom">
      <div className="w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-40">
        <div className="mx-16 text-white text-center">
          <div className="upercase mb-6">{text}</div>
          <div className="font-medium text-5xl mb-6 animate__animated animate-bounce animate__slow">
            {title}
          </div>
          <div className="font-medium text-lg mb-10">{desc}</div>

          <div className="flex justify-center">
            <Button text={"EXPLORE OUR PRODUCTS"}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
