import React, { useState } from "react";
import ProductList from "./Components/ProductList";
import ProductDetails from "./Components//ProductDetails";
import "./assets/css/styles.css";

const App = () => {
  const [productDetails, setProductDetails] = useState(null);

  return (
    <div>
      <h1>Product List</h1>
      {productDetails ? (
        <ProductDetails product={productDetails} />
      ) : (
        <ProductList setProductDetails={setProductDetails} />
      )}
    </div>
  );
};

export default App;
