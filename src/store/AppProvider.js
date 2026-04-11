import { useState, useEffect } from "react";
import initialProducts from "../data/products.json";
import AppContext from "./app-context";

const AppProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);
  const openProduct = () => setShowProduct(true);
  const closeProduct = () => setShowProduct(false);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [products, setProducts] = useState(initialProducts);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://react-store-c20d8-default-rtdb.firebaseio.com/products.json",
        );
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);
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
      setCartItems(updatedCartItems);
    }
  };
  return (
    <AppContext.Provider
      value={{
        products,
        showCart,
        closeCart,
        cartItems,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
        showProduct,
        closeProduct,
        openProduct,
        handleAddProduct,
        handleAddToCart,
        openCart,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
