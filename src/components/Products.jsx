import React from "react";
import "./styles.css";

const Products = ({ products, onSelect }) => {
  if (products.length === 0) {
    return <p>Loading...</p>;
  }
  return (
    <ul className="product__container">
      {products.map((prod) => {
        return <li key={prod.id} onClick={()=>onSelect(prod)} className="product__list">
            <span><img className="product_image" src={prod.images[0]} width={50} height={50}/></span>
            <span>{prod.title}</span>
        </li>;
      })}
    </ul>
  );
};

export default Products;
