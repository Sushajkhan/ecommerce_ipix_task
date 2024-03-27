import { useContext, useState } from "react";
import { FaBars, FaShoppingBag, FaTimes, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/shopcart.svg";
import { CartContext } from "../contexts/CartContext";
import { SidebarContext } from "../contexts/SidebarContext";

const Navbar = () => {
  const { itemAmount } = useContext(CartContext);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  console.log(isOpen);
  return (
    <header className="max-w-screen-2xl xl:px-28 px-4 absolute top-0 left-0 right-0 container mx-auto ">
      <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
        <Link to="/" className="">
          <img src={logo} alt="" />
        </Link>

        {/* Users and Cart Button */}
        <div className="text-lg text-black sm:flex items-center gap-4 hidden">
          <Link to="/users" className="flex items-center gap-2 ">
            <FaUserCircle className="w-7 h-7" />
          </Link>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative"
          >
            <FaShoppingBag className="w-7 h-7" />
            <div className="bg-red-500 absolute  ml-4 mt-5 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
        </div>
      </nav>
      <hr />
    </header>
  );
};

export default Navbar;
