import React from "react";
import Subheadline from "../Subheadline";

const Products = () => {
  return (
    <>
      <Subheadline title={"More Products"} />
      <div className="featured-mugs w-[95%] xl:w-[65%] mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap:8 md:gap-4">
          <div className="product-card">
            <div className="h-[380px] bg-[url('./images/product-coffee-01.jpeg')] bg-cover bg-no-repeat bg-center">
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
                  Red Love Cup
                </div>
              </a>

              <div>
                <span className="text-lg text-coffee-400">$25.00</span>
                <span className="ml-2 text-gray-400 line-through">$37.00</span>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="h-[380px]  bg-[url('./images/product-coffee-02.jpeg')] bg-cover bg-no-repeat bg-center">
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

            <div className="text-center mt-8">
              <a href="#">
                <div className="text-xl mb-3 hover:text-coffee-400">
                  Black Tea Cup
                </div>
              </a>

              <div>
                <span className="text-lg text-coffee-400">$15.00</span>
                <span className="ml-2 text-gray-400 line-through">$29.00</span>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="h-[380px]  bg-[url('./images/product-coffee-03.jpeg')] bg-cover bg-no-repeat bg-center">
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

            <div className="text-center mt-8">
              <a href="#">
                <div className="text-xl mb-3 hover:text-coffee-400">
                  B&W Essentials Mug
                </div>
              </a>

              <div>
                <span className="text-lg text-coffee-400">$19.00</span>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="h-[380px]  bg-[url('./images/product-coffee-04.jpeg')] bg-cover bg-no-repeat bg-center">
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

            <div className="text-center mt-8">
              <a href="#">
                <div className="text-xl mb-3 hover:text-coffee-400">
                  Winter Style Mug
                </div>
              </a>

              <div>
                <span className="text-lg text-coffee-400">$25.00</span>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="h-[380px]  bg-[url('./images/product-coffee-05.jpeg')] bg-cover bg-no-repeat bg-center">
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

            <div className="text-center mt-8">
              <a href="#">
                <div className="text-xl mb-3 hover:text-coffee-400">
                  No handle Bar Cup
                </div>
              </a>

              <div>
                <span className="text-lg text-coffee-400">$34.00</span>
                <span className="ml-2 text-gray-400 line-through">$60.00</span>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="h-[380px]  bg-[url('./images/product-coffee-06.jpeg')] bg-cover bg-no-repeat bg-center">
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

            <div className="text-center mt-8">
              <a href="#">
                <div className="text-xl mb-3 hover:text-coffee-400">
                  Espresso Cup by Mugs.co
                </div>
              </a>

              <div>
                <span className="text-lg text-coffee-400">$40.00</span>
                <span className="ml-2 text-gray-400 line-through">$63.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
