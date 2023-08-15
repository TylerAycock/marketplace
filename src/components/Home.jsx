import ProductCard from "./cards/ProductCard";
import './Home.css'
import Cart from "./cart/Cart";


const Home = ({products}) => {

  const productList = products.map((item) => {
    return <ProductCard key={item.id} item={item}/>;
  });

  return <>
      <Cart></Cart>
      <div className="prod-container">{productList}</div>;
  </> 
};

export default Home;
