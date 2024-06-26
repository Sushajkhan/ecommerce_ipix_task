import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Products from "../pages/Products";
import SingleProduct from "../components/SingleProduct";
import Users from "../pages/Users";
// import SingleProduct from "../pages/Home/SingleProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
      },
    ],
  },
]);

export default router;
