import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/search/Search";
import Cart from "./components/cart/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState(false);
  const [cart, setCart] = useState([])

  //initial API request
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        // console.log(res.data);
        setProducts([...res.data]);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5050/cart")
      .then((res) => {
        setCart([...res.data])
      })
      .catch((err) => console.log(err));
  }, [modal]);

  return (
    <div className="wep-page">
      <Header modal={modal} setModal={setModal} />
      {modal && <Cart modal={modal} setModal={setModal} cart={cart}/>}
      <Routes>
        <Route index element={<Home products={products} />} />
        <Route path={"/details/:id"} element={<ProductDetails />} />
        <Route
          path={"/search"}
          element={<Search products={products} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
