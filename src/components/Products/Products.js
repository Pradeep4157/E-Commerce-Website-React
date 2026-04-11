import "../Products/Products.css";
import AppContext from "../../store/app-context.js";
import { useContext } from "react";
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
        <h1>Loading...</h1>
      ) : (
        products.map((product) => (
          // this key is mostly going to get used to add this ele
          // to cart..
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            handleAddToCart={handleAddToCart}
          />
        ))
      )}
    </div>
  );
}

export default Products;
