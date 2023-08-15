import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "./ProductDetails.css";
import StarRating from "./rating/StarRating";

const ProductDetails = () => {
  let { id } = useParams();

  const [item, setItem] = useState({});
  const [rating, setRating] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        // console.log(res.data);
        setItem(res.data);
        setRating(res.data.rating);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

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

export default ProductDetails;
