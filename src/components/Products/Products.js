import productsData from "../../data/products.json";
import "../Products/Products.css";

function Product({ id, name, image, key, onAddToCart }) {
  return (
    <div key={id} className="product">
      {/* now i will have to go assets folder 
      and get the image with this image name */}
      <img src={require(`../../assets/${image}`)} alt={name}></img>
      <div className="product-name">{name}</div>
      <button onClick={() => onAddToCart(id, name, image)}>Add to Cart</button>
    </div>
  );
}
function Products({ onAddToCart }) {
  return (
    <div className="products-container">
      {productsData.map((product) => (
        // this key is mostly going to get used to add this ele
        // to cart..
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default Products;
