import React from "react";

const Logo = ({ text, children }) => {
  return (
    <div className="logo basis-2/6 text-center text-xl font-semibold cursor-pointer">
      {text}
    </div>
  );
};

export default Logo;
