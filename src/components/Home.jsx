import ProductCard from "./cards/ProductCard";
import "./Home.css";
import ImageSlider from "./slider/ImageSlider";
import { SliderData } from "./slider/SliderData";

const Home = ({ products }) => {
  const productList = products.map((item) => {
    return <ProductCard key={item.id} item={item} />;
  });

  return (
    <>
      <ImageSlider slides={SliderData} />
      <div className="prod-container">{productList}</div>;
    </>
  );
};

export default Home;
