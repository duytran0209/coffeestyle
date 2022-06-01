import React from "react";
import Subheadline from "./Subheadline";
import MyVideo from "./video/coffee-video.mp4";
const Story = () => {
  return (
    <>
      <Subheadline title={"Coffee Story"} />
      <div className=" flex flex-col lg:flex-row items-center gap-8 lg:gap-4 justify-center w-[95%] lg:w-[65%] mx-auto mb-24">
        <div className="basis-1/2">
          <video
            autoPlay
            loop
            muted
            class="w-full h-full object-cover min-h-[350px]"
          >
            <source src={MyVideo} />
          </video>
        </div>

        <div className="basis-1/2 text-center lg:text-left lg:pl-6">
          <h3 className="text-3xl mb-6 leading-10">
            What is your most special coffee?
          </h3>
          <p className="text-gray-500 leading-7 mb-6">
            The French Press is a brewing method that comes closest to cupping.
            Cupping is the prescribed method by which coffee should be judged.
            Nothing separates the water from the coffee. To properly discover
            the flavours, it is best to drink the coffee this way. Everyone has
            their favourite brewing method.
          </p>
          <div>
            <a
              href="#"
              className="text-coffee-400 hover:text-coffee-600 relative after:absolute after:-bottom-2 after:left-0 after:bg-coffee-50 hover:after:bg-coffee-200 after:h-0.5 after:w-full after:transition-all after:ease-in-out after:duration-400"
            >
              Read the full Story
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
