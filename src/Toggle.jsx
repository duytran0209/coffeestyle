import React, { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import Cart from "./components/Cart";

const Toggle = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [openMenu, setOpenMenu] = useState(false);
  const [isMobile, setMobile] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        heigth: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    if (windowSize.width < 875) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [windowSize]);
  return (
    <ul className="md:flex md:gap-10 ml-auto text-16 font-semibold">
      {/* md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white
      w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0
      top-[-400px] transition-all ease-in duration-500 */}
      {/* md:flex md:gap-10 ml-auto text-16 font-semibold */}
      {openMenu && isMobile ? (
        <MdOutlineClose
          size={"24px"}
          className="cursor-pointer"
          onClick={handleMenu}
        />
      ) : !openMenu && isMobile ? (
        <HiOutlineMenu
          size={"24px"}
          className="cursor-pointer"
          onClick={handleMenu}
        />
      ) : (
        <>
          <li className="top-menu-item">Features</li>
          <li className="top-menu-item">Menu </li>
          <li className="top-menu-item"> Story</li>
          <li className="top-menu-item">Contact</li>
          <li className="top-menu-item">StyleGuide</li>
          <Cart text={"Cart"} number={"99+"} />
        </>
      )}
      {openMenu && (
        <div className="absolute right-8 bg-white p-8 text-center z-10 text-black text-13">
          <li className="top-menu-item">Features</li>
          <li className="top-menu-item">Menu </li>
          <li className="top-menu-item">Story</li>
          <li className="top-menu-item">Contact</li>
          <li className="top-menu-item">StyleGuide</li>
          <Cart text={"Cart"} number={"99+"} />
        </div>
      )}
    </ul>
  );
};

export default Toggle;
