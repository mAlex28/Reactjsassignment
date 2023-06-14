import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = ({ setProductDetails }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>${product.price}</p>
          <button onClick={() => setProductDetails(product)}>
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
