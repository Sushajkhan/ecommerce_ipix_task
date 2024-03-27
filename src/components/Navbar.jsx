import { useEffect, useState } from "react";
import { FaBars, FaShoppingBag, FaTimes, FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/shopcart.svg";
import axios from "axios";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/categories")
      .then((response) => {
        setCategories(response.data.slice(0, 5));
      })
      .catch((error) => {
        console.error("Error fetching categories: ", error);
      });
  }, []);

  return (
    <header className="max-w-screen-2xl xl:px-28 px-4 absolute top-0 left-0 right-0 container mx-auto ">
      <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
        <a href="/" className="">
          <img src={logo} alt="" />
        </a>

        {/* account and cart btn */}
        <div className="text-lg text-black sm:flex items-center gap-4 hidden">
          <a href="/" className="flex items-center gap-2 ">
            <FaUserCircle className="w-7 h-7" /> Account
          </a>
          <a href="/" className="flex items-center gap-2 container">
            <FaShoppingBag className="w-7 h-7" /> Cart
          </a>
        </div>

        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6 text-black" />
            ) : (
              <FaBars className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </nav>
      <hr />
      {/* nav items */}
      <div className="pt-4">
        <ul className="lg:flex items-center gap-10  text-black hidden">
          {categories.map((categories) => (
            <li key={categories.id} className=" hover:text-orange-500">
              <NavLink
                to={categories.name}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {categories.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* mobile menu items */}
      <div>
        <ul
          className={`bg-black text-white px-4 py-2 rounded ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          {categories.map((categories) => (
            <li
              key={categories.id}
              className=" hover:text-orange-500 my-3 cursor-pointer"
            >
              <Link to={categories.name} onClick={toggleMenu}>
                {categories.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
