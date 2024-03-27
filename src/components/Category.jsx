import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/categories")
      .then((response) => {
        setCategories(response.data);
        console.log(categories);
      })
      .catch((error) => {
        console.error("Error fetching categories: ", error);
      });
  }, []);

  return (
    <div className="max-w-screen-2xl container xl:px-28 px-4 py-16">
      {/* category grid */}
      <div className="flex flex-col md:flex-row items-center gap-4 mt-8">
        <p className="font-semibold md:-rotate-90 uppercase text-center bg-black text-white md:p-1.5 p-2 rounded-sm inline-flex">
          Categories
        </p>
        {categories.length > 0 && (
          <>
            <div>
              {categories[0] && (
                <Link to="/">
                  <img
                    src={categories[0].image}
                    alt=""
                    className="w-full h-[450px] hover:scale-105 transition-all duration-200"
                  />
                </Link>
              )}
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-2">
                {categories.slice(1, 5).map((category) => (
                  <Link key={category.id} to="/">
                    <img
                      src={category.image}
                      alt=""
                      className="hover:scale-105 transition-all duration-200"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Category;
