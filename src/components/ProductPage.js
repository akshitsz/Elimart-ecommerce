import React, { useState } from 'react';
import './ProductPage.css';

const ProductPage = () => {


  // State to keep track of product quantity
  const [quantity, setQuantity] = useState(1);

  // Function to handle increment
  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  // Function to handle decrement
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  // Function to simulate purchase
  const handlePurchase = () => {
    alert(`You have purchased ${quantity} items.`);
  };

  return (
    <div className="product-page">
      <h1>EliteMart - Buy Products</h1>
      <div className="product-card">
        <img
          src={""}
          alt={""}
          price={""}
          className="product-image"
        />
        <h2>Product Name</h2>
        <p>$20.00</p>
        <div className="quantity-controls">
          <button onClick={decrementQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={incrementQuantity}>+</button>
        </div>
        <button className="purchase-button" onClick={handlePurchase}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
