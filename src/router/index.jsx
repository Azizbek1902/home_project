import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Savat from "../views/Savat";
import Filter from "../views/Filter";
import OneProduct from "../views/OneProduct";
import Navbar from "../components/Navbar";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/savat" element={<Savat />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/product" element={<OneProduct />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default Router;
