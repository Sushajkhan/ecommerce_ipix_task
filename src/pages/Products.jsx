import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";

import axios from "axios";
import Card from "../components/Card";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all"); // Default: All

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products"
        );
        const data = response.data;
        setProducts(data);
        setFilteredItems(data); // Initially, display all items
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? products
        : products.filter((item) => item.category.name === category);

    setFilteredItems(filtered);
    setSelectedCategory(category);
  };

  const showAll = () => {
    setFilteredItems(products);
    setSelectedCategory("all");
  };
  console.log(filteredItems);
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12">
      {/* products card */}
      <div className="mt-24">
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4  flex-wrap">
            <button
              onClick={showAll}
              className={selectedCategory === "all" ? "active" : ""}
            >
              All Products
            </button>
            <button
              onClick={() => filterItems("Clothes")}
              className={selectedCategory === "Clothes" ? "active" : ""}
            >
              Clothing
            </button>
            <button
              onClick={() => filterItems("Electronics")}
              className={selectedCategory === "Electronics" ? "active" : ""}
            >
              Electronics
            </button>
            <button
              onClick={() => filterItems("Furniture")}
              className={selectedCategory === "Furniture" ? "active" : ""}
            >
              Furniture
            </button>
            <button
              onClick={() => filterItems("Shoes")}
              className={selectedCategory === "Shoes" ? "active" : ""}
            >
              Shoes
            </button>
            <button
              onClick={() => filterItems("Miscellaneous")}
              className={selectedCategory === "Miscellaneous" ? "active" : ""}
            >
              Other
            </button>
          </div>
        </div>

        {/* Render each item individually */}
        <div className="grid grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
