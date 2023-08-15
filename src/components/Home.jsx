import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "./product_card/ProductCard";
import './Home.css'

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=5")
      .then((res) => {
        // console.log(res.data);
        setProducts([...res.data]);
      })
      .catch((err) => console.log(err));
  }, []);

  const productList = products.map((item) => {
    return <ProductCard key={item.id} item={item}/>;
  });

  return <div className="prod-container">{productList}</div>;
};

export default Home;
