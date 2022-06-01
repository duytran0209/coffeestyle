import React from "react";

const SubscribeUs = () => {
  return (
    <div class="w-full max-w-screen-2xl h-[350px] bg-[#1d1f2e] flex flex-col justify-center items-center mb-24">
      <div class="flex justify-center items-center px-6 xs:px-0 mb-6">
        <div class="w-8 h-px bg-gray-700"></div>
        <div class="uppercase mx-4 tracking-widest text-gray-400 font-bold text-xs text-center">
          Sign up and get free coffee bags
        </div>
        <div class="w-8 h-px bg-gray-700"></div>
      </div>
      <div class="text-4xl text-white mb-6">Coffee Updates</div>
      <div class="form">
        <div class="flex flex-col md:flex-row justify-center items-center gap-3">
          <div class="text-center">
            <input
              type="email"
              placeholder="tranduy10a@gmail.com"
              class="px-6 py-4 w-[350px] xs:max-w-full bg-inherit border-[1px] border-gray-700 outline-none text-white leading-5 hover:border-gray-300 duration-500 focus:border-gray-300 placeholder:uppercase placeholder:text-xs placeholder:tracking-widest placeholder:font-semibold"
            />
          </div>
          <button
            type="submit"
            class="text-center uppercase tracking-wider py-4 px-8 text-[13px] font-semibold cursor-pointer hover:bg-opacity-95 bg-white text-gray-900 w-max max-h-[54px]"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeUs;
