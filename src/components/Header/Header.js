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
import "./Header.css";
import AppContext from "../../store/app-context.js";
import { useContext } from "react";
function Header() {
  const { openCart, openProduct } = useContext(AppContext);
  return (
    <header className="header">
      <h1>My React Store</h1>
      <div>
        <button
          className="yellow-button"
          style={{ marginRight: "20px" }}
          onClick={openProduct}
        >
          Add Product
        </button>
        <button className="yellow-button" onClick={openCart}>
          Cart
        </button>
      </div>
      {/* <Modal
        show={showCart}
        onClose={closeCart}
        children={<div>LUND LELE !!</div>}
      /> */}
    </header>
  );
}
export default Header;
