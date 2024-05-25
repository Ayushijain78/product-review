import { useEffect, useState } from "react";
import "./App.css";
import Products from "./components/Products";
import ReviewForm from "./components/ReviewForm";

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const getProducts = async () => {
    const productList = await (
      await fetch("https://dummyjson.com/products")
    ).json();
    setProducts(productList.products);
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };
  const handleReviewSubmit = (reviewData) => {
    localStorage.setItem(`product_${reviewData.productId}_review`, JSON.stringify(reviewData));
    alert("product review saved successfully");
    setSelectedProduct(null);
  };
  
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <header>
      <section className="container">
        <Products products={products} onSelect={handleProductSelect} />
        {selectedProduct && (
          <ReviewForm product={selectedProduct} onSubmit={handleReviewSubmit} />
        )}
      </section>
    </header>
  );
}

export default App;
