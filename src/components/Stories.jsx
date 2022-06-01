import React from "react";
import Subheadline from "../Subheadline";
import StoryCard from "./StoryCard";

const Stories = () => {
  return (
    <>
      <Subheadline title={"LIFESTYLE STORIES"} />
      <div className="w-[95%] xl:w-[65%] mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4">
          <StoryCard
            caption={
              "Health Check: why do I get a headache when I haven't had my coffee?"
            }
            desc={
              "It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
            }
            time={"OCTOBER 9, 2018"}
          />
          <StoryCard
            caption={"How long does a cup of coffee keep you awake?"}
            desc={
              "It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
            }
            time={"OCTOBER 9, 2018"}
          />
          <StoryCard
            caption={
              "Recent research suggests that heavy coffee drinkers may reap health benefits."
            }
            desc={
              "It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
            }
            time={"OCTOBER 6, 2022"}
          />
        </div>
      </div>
    </>
  );
};

export default Stories;
