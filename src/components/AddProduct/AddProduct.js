/*
    we will show this if showProduct is true.

    so modal is going to be the parent of this component and

    all the decisions like showing or not showing this child is going 

    to be done by that and it is already implemented.. 

    now i just need to need to specify this child component and 

    give it to modal..
*/
import Modal from "../UI/Modal";
import "./AddProduct.css";
import { useRef } from "react";
function AddProduct({ showProduct, closeProduct, addProducts }) {
  const nameRef = useRef();
  function handleSubmit(event) {
    event.preventDefault();
    addProducts(nameRef.current.value);
    console.log(nameRef.current.value);
  }
  return (
    <Modal show={showProduct} onClose={closeProduct}>
      <div className="add-product-container">
        <div className="add-product-heading">Add Product: </div>
        <div className="form-label">Enter Product Name</div>
        <form
          className="add-product-form"
          name="product name"
          onSubmit={handleSubmit}
        >
          <input className="form-input" ref={nameRef} />
          <button type="submit" className="yellow-button submit-button">
            Add Product
          </button>
        </form>
      </div>
    </Modal>
  );
}
export default AddProduct;
