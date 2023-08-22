import ProductCard from "./cards/ProductCard";
import "./Home.css";
import ft from "../assets/ft-photo.jpeg";

const Home = ({ products }) => {
  const productList = products.map((item) => {
    return <ProductCard key={item.id} item={item} />;
  });

  return (
    <>
      <div className="ft-product" style={{ 
      backgroundImage: `url(${ft})` 
    }}>
      <div className="ft-info">
      <h3>Fjallraven - Foldsack</h3>
      <p>Unembellished backpack with a simple and functional design</p>
      <button>Shop Now</button>
      </div>
    </div>
      <div className="prod-container">{productList}</div>;
    </>
  );
};

export default Home;
