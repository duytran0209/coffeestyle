import React from "react";

const StoryCard = ({ children, desc, caption, time, number }) => {
  return (
    <div className="story-card">
      <div className="h-[300px] bg-cover bg-no-repeat bg-center bg-[url('./images/lifestyle-story-02.jpeg')]">
        <a href="#">
          <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-300 relative group">
            <div className="absolute uppercase bg-white text-gray-900 w-11/12 tracking-wider py-4 px-6 text-sm font-semibold cursor-pointer hover:bg-opacity-90 transition-all duration-300 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block text-center">
              Read the Full Story
            </div>
          </div>
        </a>
      </div>

      <div className="text-left my-6">
        <a href="#">
          <p className="text-xl mb-3 hover:text-coffee-400">{caption}</p>
        </a>
        <h3 className="text-gray-500 leading-7 mb-3">{desc}</h3>
        <p className="text-gray-500 leading-7 uppercase text-[13px] font-semibold tracking-widest">
          {time}
        </p>
      </div>
    </div>
  );
};

export default StoryCard;
