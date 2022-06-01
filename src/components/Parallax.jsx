import React from "react";

const Parallax = () => {
  return (
    <div
      className="bg-[url('./images/bg-parallax-01.jpeg')] bg-cover bg-no-repeat bg-center h-[400px] md:h-[500px]
    mb-24 bg-fixed w-[100vw] relative left-[calc(-50vw+50%)]"
    ></div>
  );
};

export default Parallax;
