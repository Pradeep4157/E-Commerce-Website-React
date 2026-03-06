import Modal from "../UI/Modal";
function Cart({ showCart, closeCart }) {
  return (
    <Modal
      show={showCart}
      onClose={closeCart}
      children={<div>THIS IS THE CONTENT OF CART !!</div>}
    ></Modal>
  );
}
export default Cart;
