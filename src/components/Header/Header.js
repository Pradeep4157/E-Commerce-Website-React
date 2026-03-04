/*
  now we need to plan how are we going to 

  send these things in modal.. 

  because its not simple children props that we 

  send there and just store it at their places.. 

  at least that's what he said..

  what info do i have ?

  onClick with this onClick what i think is that we 

  are going to pass what ?

  in general what does it need to render that div.. 

  it needs the function 

  bhat all R bhe going to send in Modal comp ?

  close function.. 

  true or false.. 



*/

import { useState } from "react";
import "./Header.css";
import "../UI/Modal.css";
import Modal from "../UI/Modal";

function Header() {
  const [showCart, setShowCart] = useState(false);
  const [freqProduct, setAddProduct] = useState(false);
  function openCart() {
    setShowCart(true);
  }
  function closeCart() {
    setShowCart(false);
  }
  function openAddProduct() {
    setAddProduct(true);
  }
  function closeAddProduct() {
    setAddProduct(false);
  }

  return (
    <header className="header">
      <h1>My React Store</h1>
      <div>
        <button
          className="yellow-button"
          onClick={openAddProduct}
          style={{ marginRight: "20px" }}
        >
          Add Product
        </button>
        <button className="yellow-button" onClick={openCart}>
          Cart
        </button>
      </div>
      <Modal
        show={showCart}
        onClose={closeCart}
        children={<div>LUND LELE !! </div>}
      />
    </header>
  );
}
export default Header;
