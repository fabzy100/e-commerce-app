import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="overflow-hidden">

     
      <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/product/:id" element={<ProductDetails />}/>
        </Routes>
        <Sidebar />
        <Footer />     
    </div>
  );
};

export default App;