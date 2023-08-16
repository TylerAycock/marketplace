import Modal from "./Modal";
import { useState } from "react";

const Cart = ({ modal, setModal, cart }) => {
  console.log(cart);
  const [total, setTotal] = useState(0);

  // const display = cart?.map((item) => {
  //   setTotal((total += +item.price));
  //   return (
  //     <div key={item.id}>
  //       <h3>{item.title}</h3>
  //       <img src={item.img} alt={img.title} />
  //     </div>
  //   );
  // });

  return (
    <Modal>
      <h2>Shopping Cart</h2>
      <p>${total}</p>
      <button>Purchase</button>
      <button onClick={() => setModal(!modal)}>Keep Shopping</button>
    </Modal>
  );
};

export default Cart;
