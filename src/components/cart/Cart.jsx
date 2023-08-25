import Modal from "./Modal";
import afterPay from "../../assets/Afterpay_Logo_Black.png";
import "./Cart.css";
import CartCard from "../cards/CartCard";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Cart = ({ modal, setModal, cart }) => {
  const navigate = useNavigate();
  let itemDisplay = [];
  let cost = 0;
  let money = cost.toFixed(2);

  if (cart.length === 0) {
    console.log("emtpy cart");
  } else {
    itemDisplay = cart.map((item) => {
      return (
        <CartCard item={item} key={item.id} modal={modal} setModal={setModal} />
      );
    });

    cost = cart
      .map((item) => {
        return item.price;
      })
      .reduce((a, b) => {
        return a + b;
      });

    money = cost.toFixed(2);
  }

  const clickHandler = () => {
    setModal(!modal);
    navigate("/login");
  };

  return localStorage.getItem("userToken") ? (
    <Modal moddal={modal} setModal={setModal}>
      {cart.length === 0 ? (
        <div className="empty">
          <h1 className="empty-msg">Cart is empty</h1>
          <button onClick={() => setModal(!modal)} className="cart-btn">
            Keep Shopping
          </button>
        </div>
      ) : (
        <div className="cart-container">
          <div className="item-box">
            <h1 className="bag">Your Bag: ${money}</h1>
            <div className="cncl-group">
              <AiOutlineArrowLeft className="cncl-arrow"/>
              <button onClick={() => setModal(!modal)} className="cncl-btn">
                Continue Shopping
              </button>
            </div>
            <div className="item-cards">{itemDisplay}</div>
          </div>
          <div className="cost-box">
            <h2 className="qualify">You qualify for free 2-Day Shipping!</h2>
            <section className="cost-section">
              <p>{cart.length} Item(s) Subtotal</p>
              <p> {money}</p>
            </section>
            <section className="cost-section">
              <p>Shipping </p>
              <p className="tbd">TBD</p>
            </section>
            <section className="pay-method">
              <img src={afterPay} alt="afterpay logo" className="afterpay" />
              available for orders between $35 - $1000{" "}
              <button className="info-btn">i</button>
            </section>
            <button className="cart-btn">Purchase</button>
          </div>
        </div>
      )}
    </Modal>
  ) : (
    <Modal>
      <div className="empty">
        <h1 className="empty-msg">Login to check cart</h1>
        <button
          className="cart-btn"
          onClick={() => {
            clickHandler();
          }}
        >
          Login/Register
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
