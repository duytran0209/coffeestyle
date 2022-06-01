import React from "react";
import { contactUs, followUs, menuFooter } from "../data/footerData";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className=" w-[95%] xl:w-[65%] mx-auto pb-24 text-gray-500 text-sm">
      <div className="flex gap-12 md:gap-8  flex-col md:flex-row text-center md:text-left">
        <div className="basis-2/6">
          <Logo text={"CoffeeStyles."} />
          <p className="md:mb-[68px] mt-3 mb-8">
            Delivering the best coffee life since 1996. From coffee geeks to the
            real ones.
          </p>
          <span className="text-gray-400 hover:text-coffee-400">
            Tran Duy © 2022
          </span>
        </div>

        <div className="basis-1/6">
          <h3 className="uppercase font-semibold tracking-wider text-gray-600 mb-4">
            Menu
          </h3>
          <ul className="flex flex-col gap-2">
            {menuFooter.map((item) => (
              <li key={item.id} className="hover:text-coffee-400">
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="basis-1/6">
          <h3 className="uppercase font-semibold tracking-wider text-gray-600 mb-4">
            FollowUs
          </h3>
          <ul className="flex flex-col gap-3">
            {followUs.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>

        <div className="basis-2/6">
          <h3 className="uppercase font-semibold tracking-wider text-gray-600 md:mb-4 mb-8">
            Contact Us
          </h3>
          <ul className="flex flex-col gap-3">
            {contactUs.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
