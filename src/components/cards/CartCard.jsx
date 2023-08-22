import "./CartCard.css";
import axios from "axios";

const CartCard = ({ item, modal, setModal}) => {
  let { id, img, price, prodId, title} = item;

  const clickHandler = () => {
    axios
      .delete(`http://localhost:5050/cart/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
     setModal(!modal);
  };

  return (
    <div key={prodId} className="cart-card">
      <img src={img} alt={title} className="cart-img" />
      <div className="details">
        <h3>{title}</h3>
        <hr />
        <p>${price}</p>
        <button className="remove-btn" onClick={clickHandler}>
          remove selection
        </button>
      </div>
    </div>
  );
};
export default CartCard;
