import { useState } from "react";

import "./App.css";
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
