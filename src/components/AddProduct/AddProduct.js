/*
    we will show this if showProduct is true.

    so modal is going to be the parent of this component and

    all the decisions like showing or not showing this child is going 

    to be done by that and it is already implemented.. 

    now i just need to need to specify this child component and 

    give it to modal..
*/
import Modal from "../UI/Modal";
function AddProduct({ showProduct, closeProduct }) {
  return (
    <Modal show={showProduct} onClose={closeProduct}>
      <div>You can add products from here in website</div>
    </Modal>
  );
}
export default AddProduct;
