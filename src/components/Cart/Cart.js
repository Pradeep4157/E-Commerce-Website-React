import Modal from "../UI/Modal";
import "./Cart.css";
function CartItem({ id, name, image, quantity }) {
  return (
    <div className="cart-item">
      <div className="item-img">
        <img src={require(`../../assets/${image}`)} alt={name}></img>
      </div>
      <div className="item-info">
        <div>{name}</div>
        <div className="item-qty">
          <div>Qty : {quantity}</div>
          <div>
            <button className="yellow-button qty-button qty-plus-button">
              +
            </button>
          </div>
          <div>
            <button className="yellow-button qty-button qty-minus-button">
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
function Cart({ showCart, closeCart, cartItems }) {
  return (
    <Modal show={showCart} onClose={closeCart}>
      <div>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            quantity={item.quantity}
          ></CartItem>
        ))}
      </div>
    </Modal>
  );
}
export default Cart;
