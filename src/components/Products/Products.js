import "../Products/Products.css";
import AppContext from "../../store/app-context.js";
import { useContext } from "react";
import Loader from "../UI/Loader.js";
function Product({ id, name, image, key, handleAddToCart }) {
  return (
    <div key={id} className="product">
      {/* now i will have to go assets folder 
      and get the image with this image name */}
      <img src={require(`../../assets/${image}`)} alt={name}></img>
      <div className="product-name">{name}</div>
      <button onClick={() => handleAddToCart(id, name, image)}>
        Add to Cart
      </button>
    </div>
  );
}
function Products() {
  const { products, handleAddToCart, loading } = useContext(AppContext);
  return (
    <div className="products-container">
      {loading ? (
        <Loader />
      ) : (
        Object.keys(products).map((product) => (
          // this key is mostly going to get used to add this ele
          // to cart..
          <Product
            key={product}
            id={products[product].id}
            name={products[product].name}
            image={products[product].image}
            handleAddToCart={handleAddToCart}
          />
        ))
      )}
    </div>
  );
}

export default Products;
