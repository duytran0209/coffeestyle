import React from "react";

const Subheadline = ({ title, children }) => {
  return (
    <div className="border-b-2 my-16 w-[200px] mx-auto">
      <h2 className="inline-block uppercase px-4 tracking-widest text-gray-500 font-medium text-xs bg-white translate-y-[10px] translate-x-[30px] ">
        {title}
      </h2>
    </div>
  );
};

export default Subheadline;
