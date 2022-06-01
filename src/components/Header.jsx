import React from "react";
import Logo from "./Logo";
import Toggle from "../Toggle";

const Header = () => {
  return (
    <div className="py-6 mx-10">
      <nav className="flex flex-row justify-between items-center">
        <Logo text={"CoffeeStyles."} />

        <ul className="basis-3/6 flex items-center justify-end gap-x-8 uppercase text-sm text-gray-500 font-medium w-full">
          <Toggle />
        </ul>
      </nav>
    </div>
  );
};

export default Header;
