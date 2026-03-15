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
  const handleIncreaseQuantity = () => {
    console.log("Quantity Increased..");
  };
  const handleDecreaseQuantity = () => {
    console.log("Quantity Decreased..");
  };
  const handleAddToCart = (productId, productName, productImage) => {
    // let updatedCartItems = cartItems;
    // updatedCartItems = updatedCartItems.concat({
    //   id: productId,
    //   name: productName,
    //   image: productImage,
    //   quantity: 1,
    // });
    // instead of all this we can use spread operator to spread
    // the array and just append at the end of the array..
    const productInCartIndex = cartItems.findIndex(
      (item) => item.id === productId,
    );
    if (productInCartIndex === -1) {
      const cartItem = {
        id: productId,
        name: productName,
        image: productImage,
        quantity: 1,
      };
      setCartItems((cartItems) => [...cartItems, cartItem]);
    } else {
      // inc the value in the cart..
      var updatedCartItems = [...cartItems];
      updatedCartItems[productInCartIndex].quantity += 1;
    }

    // setCartItems(updatedCartItems);
  };
  return (
    <div>
      <Header openCart={openCart}></Header>
      <Products onAddToCart={handleAddToCart}></Products>
      <Cart
        showCart={showCart}
        closeCart={closeCart}
        cartItems={cartItems}
        onIncreaseQuantity={handleIncreaseQuantity}
        onDecreaseQuantity={handleDecreaseQuantity}
      ></Cart>
    </div>
  );
}

export default App;
