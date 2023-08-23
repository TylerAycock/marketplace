import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import DetailsCard from "./cards/DetailsCard";

const ProductDetails = ({setRefresh, refresh}) => {
  let { id } = useParams();
  const [item, setItem] = useState({});
  const [rating, setRating] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setItem(res.data);
        setRating(res.data.rating);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <DetailsCard item={item} rating={rating} setRefresh={setRefresh} refresh={refresh}/>
    </>
  );
};

export default ProductDetails;
