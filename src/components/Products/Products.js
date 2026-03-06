import productsData from "../../data/products.json";
import "../Products/Products.css";

function Product({ product }) {
  return (
    <div key={product.id} className="product">
      {/* now i will have to go assets folder 
      and get the image with this image name */}
      <img
        src={require(`../../assets/${product.image}`)}
        alt={product.name}
      ></img>
      <div className="product-name">{product.name}</div>
      <button>Add to Cart</button>
    </div>
  );
}
function Products() {
  return (
    <div className="products-container">
      {productsData.map((product) => (
        // this key is mostly going to get used to add this ele
        // to cart..
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
