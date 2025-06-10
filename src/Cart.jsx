import React from "react";
import { useLocation } from "react-router-dom";

export default function Cart() {
  const location = useLocation();
  const product = location.state?.product;
  return (
    <div>
      <h2>Cart</h2>
      {product ? (
        <ul>
          <li>
            {product.name} - ₹{product.price}
          </li>
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}
