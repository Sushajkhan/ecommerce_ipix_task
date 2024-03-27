import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white shadow-md rounded-lg max-w-sm">
        <Link to={`/shop/${item.id}`} className="block">
          <img
            className="rounded-t-lg p-8"
            src={item.images[0]}
            alt="product image"
          />
          <div className="px-5 pb-5">
            <h3 className="text-gray-900 font-semibold text-md tracking-tight">
              {item.title}
            </h3>
            <div className="flex items-center mt-2.5 mb-5">
              {item.category.name}
            </div>
          </div>
        </Link>
        <div className="px-5 pb-5">
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900">
              ${item.price}
            </span>
            <a
              href="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
