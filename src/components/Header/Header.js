import { useState } from "react";
import "./Header.css";
import "../../UI/Modal.css";

function onAddProductClick() {}

function Header() {
  const [showCart, setShowCart] = useState(false);
  function openCart() {
    setShowCart(true);
  }
  function closeCart() {
    setShowCart(false);
  }

  return (
    <header className="header">
      <h1>My React Store</h1>
      <div>
        <button
          className="yellow-button"
          onClick={onAddProductClick}
          style={{ marginRight: "20px" }}
        >
          Add Product
        </button>
        <button className="yellow-button" onClick={openCart}>
          Cart
        </button>
      </div>
      <div>
        {showCart && (
          <div className="backdrop" onClick={closeCart}>
            <div className="modal">LUND LELE !!</div>
          </div>
        )}
      </div>
    </header>
  );
}
export default Header;
