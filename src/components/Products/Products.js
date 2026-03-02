import productsData from "../../data/products.json";
import "../Products/Products.css";
function Products() {
  return (
    <div className="products-container">
      {productsData.map((product) => (
        // this key is mostly going to get used to add this ele
        // to cart..
        <div key={product.id} className="product">
          {/* <img src={product.image}></img> */}
          <div className="product-name">{product.name}</div>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Products;
