import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/search/Search";
import Cart from "./components/cart/Cart";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import Footer from "./components/Footer";

function App() {
  const [products, setProducts] = useState([]);
  const [mens, setMens] = useState([]);
  const [modal, setModal] = useState(false);
  const [cart, setCart] = useState([]);
  const [refresh, setRefresh] = useState(false);
  

  //initial API request
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        // console.log(res.data);
        setProducts([...res.data]);
      })
      .catch((err) => console.log(err));

    axios
      .get(`https://fakestoreapi.com/products/category/men's%20clothing?limit=3`)
      .then((res) => {
        setMens([...res.data]);
      })
      .catch((err) => console.log("error pulling mens clothing", err));
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      const parsedToken = JSON.parse(atob(token.split(".")[1]));
      let email = parsedToken.email;
      axios
        .get(`http://localhost:5050/cart/${email}`, {
          headers: {
            authorization: token,
          },
        })
        .then((res) => {
          setCart([...res.data]);
        })
        .catch((err) => console.log(err));
    }
  }, [modal, refresh]);

  return (
    <div className="wep-page">
      <Header modal={modal} cart={cart} setModal={setModal} />
      {modal && <Cart modal={modal} setModal={setModal} cart={cart} />}
      <Routes>
        <Route
          index
          element={
            <Home
              mens={mens}
              refresh={refresh}
              setRefresh={setRefresh}
            />
          }
        />
        <Route
          path={"/details/:id"}
          element={<ProductDetails refresh={refresh} setRefresh={setRefresh} />}
        />
        <Route path={"/search"} element={<Search products={products} />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
