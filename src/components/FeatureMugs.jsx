import React from "react";
import Subheadline from "../Subheadline";

const FeatureMugs = () => {
  return (
    <>
      <Subheadline title={"Featured Mugs"} />
      <div className="featured-mugs w-[95%] lg:w-[65%] mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap:8 lg:gap-4">
          <div className="product-card">
            <div className="h-[400px] sm:h-[540px] bg-[url('./images/featured-mug-01.jpg')] bg-cover bg-no-repeat bg-center">
              <a href="#">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-300 relative group">
                  <div className="absolute w-[100px] bg-white py-2 px-4 top-3 right-3 text-center font-semibold text-coffee-400 whitespace-nowrap">
                    On Sales.
                  </div>

                  <div className="absolute uppercase bg-white text-gray-900 w-11/12 tracking-wider py-4 px-6 text-sm font-semibold cursor-pointer hover:bg-opacity-90 transition-all duration-300 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block text-center">
                    Explore Mug
                  </div>
                </div>
              </a>
            </div>

            <div className="text-center my-8">
              <a href="#">
                <div className="text-xl mb-3 hover:text-coffee-400">
                  Pink Premium Ceramic
                </div>
              </a>

              <div>
                <span className="text-lg text-coffee-400">$50.00</span>
                <span className="ml-2 text-gray-400 line-through">$69.00</span>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="h-[400px] sm:h-[540px] bg-[url('./images/featured-mug-02.jpg')] bg-cover bg-no-repeat bg-center">
              <a href="#">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-300 relative group">
                  <div className="absolute w-[100px] bg-white py-2 px-4 top-3 right-3 text-center font-semibold text-coffee-400 whitespace-nowrap">
                    On Sales.
                  </div>

                  <div className="absolute uppercase bg-white text-gray-900 w-11/12 tracking-wider py-4 px-6 text-sm font-semibold cursor-pointer hover:bg-opacity-90 transition-all duration-300 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block text-center">
                    Explore Mug
                  </div>
                </div>
              </a>
            </div>

            <div className="text-center my-8">
              <a href="#">
                <div className="text-xl mb-3 hover:text-coffee-400">
                  Golden Designers Mug
                </div>
              </a>

              <div>
                <span className="text-lg text-coffee-400">$75.00</span>
                <span className="ml-2 text-gray-400 line-through">$99.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureMugs;
