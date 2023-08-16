import ProductCard from "./cards/ProductCard";
import './Home.css'



const Home = ({products}) => {

  const productList = products.map((item) => {
    return <ProductCard key={item.id} item={item}/>;
  });

  return <>
      <div className="prod-container">{productList}</div>;
  </> 
};

export default Home;
