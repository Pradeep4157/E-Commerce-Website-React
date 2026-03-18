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
function AddProduct({ showProduct, closeProduct }) {
  return (
    <Modal show={showProduct} onClose={closeProduct}>
      <div className="add-product-container">
        <div className="add-product-heading">Add Product: </div>
        <form className="add-product-form" onSubmit={() => {}}>
          <div className="form-label">Enter Product Name</div>
          <input className="form-input" />
        </form>
        <button type="submit" class="yellow-button submit-button">
          Add Product
        </button>
      </div>
    </Modal>
  );
}
export default AddProduct;
