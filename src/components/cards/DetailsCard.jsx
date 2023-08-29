import StarRating from "../rating/StarRating";
import { Link } from "react-router-dom";
import "./DetailsCard.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const DetailsCard = ({ item, rating, refresh, setRefresh }) => {
  const navigate = useNavigate();

  const addHandler = () => {
    
    const token = localStorage.getItem("userToken");
    if (token) {
      const parsedToken = JSON.parse(atob(token.split(".")[1]));
      let body = {
        email: parsedToken.email,
        id: item.id,
        title: item.title,
        price: item.price,
        img: item.image,
      };
      
      setRefresh(!refresh);

      axios
        .post("http://localhost:5050/cart", body, {
          headers: {
            authorization: token,
          },
        })
        .then((res) => {
          console.log("item sent!");
          console.log(res);
        })
        .catch((err) => console.log(err));
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="item-container">
      <div className="img-container">
      <Link to={"/"} className="back">
      <AiOutlineArrowLeft/>
      <h3>Continue Shopping</h3>
      </Link>
        <img src={item.image} alt={item.title} className="prod-img" />
      </div>
      <div className="details-container">
        <h3 className="category">{item.category}</h3>
        <h1 className="title">{item.title}</h1>
        <p className="price">${item.price}</p>
        <p className="descrip">{item.description}</p>
        <div className="ratings">
          <StarRating rating={rating.rate} />
          <p>{rating.count} Reviews</p>
        </div>
        <button
          className="add-btn"
          onClick={() => {
            addHandler();
          }}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default DetailsCard;
