/*
  we have productId, name and image.. 

  now there are a few doubts : 

  1) just doing some class.append shouldnt be enough ... at least store it 

    in localStorage...

  


*/
import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Cart from "../src/components/Cart/Cart";
import { useState } from "react";

function App() {
  const [showCart, setShowCart] = useState(false);
  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (productId, productName, productImage) => {
    let updatedCartItems = cartItems;
    updatedCartItems = updatedCartItems.concat({
      id: productId,
      name: productName,
      image: productImage,
      quantity: 1,
    });
    setCartItems(updatedCartItems);
  };
  return (
    <div>
      <Header openCart={openCart}></Header>
      <Products onAddToCart={handleAddToCart}>
        {console.log("App just called products..")}
      </Products>
      <Cart showCart={showCart} closeCart={closeCart}></Cart>
    </div>
  );
}

export default App;
