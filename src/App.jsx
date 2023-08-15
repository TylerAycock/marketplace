import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        // console.log(res.data);
        setProducts([...res.data]);
      })
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <div className="wep-page">
      <Header />
      <Routes>
        <Route index element={<Home products={products}/>} />
        <Route path={"/details/:id"} element={<ProductDetails />} />
        <Route path={'/search'} element={<Search products={products}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
