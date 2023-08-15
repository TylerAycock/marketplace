import StarRating from "../rating/StarRating";
import { Link } from "react-router-dom";
import './DetailsCard.css'

const DetailsCard = ({item, rating}) => {
  return (
    <div className="item-container">
      <div className="img-container">
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
      </div>
      <Link to={"/"}>Back</Link>
    </div>
  );
};

export default DetailsCard