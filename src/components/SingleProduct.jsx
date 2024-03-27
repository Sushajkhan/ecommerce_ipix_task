import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../Contexts/CartContext";

const SingleProduct = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products"
        );
        const data = response.data;
        const product = data.filter((p) => p.id == id);
        setProducts(product[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4">
      <div className="flex items-center gap-2 pt-8 text-black">
        <Link to="/">Home</Link>
        <Link to="/products" className="font-semibold text-black">
          / Products
        </Link>
      </div>

      <div className="p-3 max-w-7xl m-auto">
        <div className="mt-6 sm:mt-10">
          <div>
            <div>
              <div className="grid gird-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max ">
                {/* Product Image */}
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={products.images}
                    alt="Product-Image"
                    className="w-full"
                  />
                </div>

                {/* Product Details */}
                <div className="flex flex-col justify-between">
                  <div>
                    {/* Product Title */}
                    <h1 className="text-3xl text-orange-500 font-semibold sm:text-4xl ">
                      {products.title}
                    </h1>

                    {/* Product Description */}
                    <p className="mt-3 text-gray-600 text-md leading-6 text-justify sm:text-left sm:mt-4 text-balance ">
                      {products.description}
                    </p>

                    {/* Product Price */}
                    <span className="text-xl mr-72  text-orange-500 font-semibold sm:text-2xl">
                      ${products.price}
                    </span>
                  </div>
                  <div className=" ">
                    {/* Add to cart button */}
                    <div className="w-full text-left my-4">
                      <button
                        className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-orange-500 text-white text-md font-bold border border-orange-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-orange-500 lg:m-0 md:px-6"
                        title="Confirm Order"
                      >
                        <button onClick={() => addToCart(products)}>
                          Add to cart
                        </button>
                        <FaArrowAltCircleRight />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
