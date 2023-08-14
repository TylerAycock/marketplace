import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "./product_card/ProductCard";
import './Home.css'

const Home = () => {
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

  console.log(products);

  const productList = products.map((item) => {
    return <ProductCard item={item}/>;
  });

  return <div className="prod-container">{productList}</div>;
};

export default Home;
