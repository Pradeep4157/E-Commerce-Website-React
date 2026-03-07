import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Cart from "../src/components/Cart/Cart";
import { useState } from "react";

function App() {
  const [showCart, setShowCart] = useState(false);
  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);
  const [showProduct, setShowProduct] = useState(false);
  const openProduct = () => setShowProduct(true);
  const closeProduct = () => setShowProduct(false);
  const [cartItems, setCartItems] = useState([]);
  return (
    <div>
      <Header openCart={openCart} openProduct={openProduct}></Header>
      <Products showProduct={showProduct} closeProduct={closeProduct}>
        {console.log("App just called products..")}
      </Products>
      <Cart showCart={showCart} closeCart={closeCart}></Cart>
    </div>
  );
}

export default App;
