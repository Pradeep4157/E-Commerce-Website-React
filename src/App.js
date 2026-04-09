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

  now i have to use Context instead of passing the props everywhere.. 

      




  


*/
import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Cart from "../src/components/Cart/Cart";
import AddProduct from "./components/AddProduct/AddProduct";
import AppProvider from "./store/AppProvider.js";

function App() {
  return (
    <AppProvider>
      <Header></Header>
      <Products></Products>
      <Cart></Cart>
      <AddProduct></AddProduct>
    </AppProvider>
  );
}

export default App;
