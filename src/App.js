/*
  we have productId, name and image.. 

  now there are a few doubts : 

  1) just doing some class.append shouldnt be enough ... at least store it 

    in localStorage...

  now we need to add modal for Add Product button, 

  on clicking that button showProduct should become true 

  and when it becomes true then the modal shows up.. 

  first we need to create component for this addProduct modal..

  and then if showProduct is true then render it else remove it..

  from app we will send this openCart and closeCart function..

  when the user clicks on Add Product button then we will run this

  openCart function..

  and if clicks on close or somewhere else then we will close it.. 



  


*/
import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Cart from "../src/components/Cart/Cart";
import { useState } from "react";
import AddProduct from "./components/AddProduct/AddProduct";
import initialProducts from "../src/data/products.json";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);
  const openProduct = () => setShowProduct(true);
  const closeProduct = () => setShowProduct(false);
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState(initialProducts);
  function handleAddProduct(productName) {
    const product = {
      id: products.length + 1,
      name: productName,
      image: "random_image.webp",
    };
    const updatedProducts = [...products, product];
    setProducts(updatedProducts);
    setShowProduct(false);
  }
  const handleIncreaseQuantity = (productId) => {
    const productInCartIndex = cartItems.findIndex(
      (item) => item.id === productId,
    );
    const updatedCartItems = [...cartItems];
    updatedCartItems[productInCartIndex].quantity += 1;
    setCartItems(updatedCartItems);
    console.log(productId);
  };
  const handleDecreaseQuantity = (productId) => {
    const productInCartIndex = cartItems.findIndex(
      (item) => item.id === productId,
    );
    let updatedCartItems = [...cartItems];
    if (cartItems[productInCartIndex].quantity === 1) {
      // it gets removed from the list..
      updatedCartItems = updatedCartItems.filter(
        (item) => item.id !== productId,
      );
      setCartItems(updatedCartItems);
    } else {
      // we dec the quantity of the product in cart..
      updatedCartItems[productInCartIndex].quantity -= 1;
      setCartItems(updatedCartItems);
    }
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
      <Header openCart={openCart} openProduct={openProduct}></Header>
      <Products products={products} onAddToCart={handleAddToCart}></Products>
      <Cart
        showCart={showCart}
        closeCart={closeCart}
        cartItems={cartItems}
        onIncreaseQuantity={handleIncreaseQuantity}
        onDecreaseQuantity={handleDecreaseQuantity}
      ></Cart>
      <AddProduct
        showProduct={showProduct}
        closeProduct={closeProduct}
        openProduct={openProduct}
        addProducts={handleAddProduct}
      ></AddProduct>
    </div>
  );
}

export default App;
