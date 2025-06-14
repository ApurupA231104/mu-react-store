import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";
import { AppContext } from "./App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Home() {
  const { cart, setCart, email } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  const API = import.meta.env.VITE_API_URL;
  const Navigate = useNavigate();
  // const products = [
  //   {
  //     id: 1,
  //     name: "Product 1",
  //     desc: "This is the description of the product",
  //     price: 45,
  //     imgUrl: "https://picsum.photos/id/1/300/300",
  //   },
  //   {
  //     id: 2,
  //     name: "Product 2",
  //     desc: "This is the description of the product",
  //     price: 50,
  //     imgUrl: "https://picsum.photos/id/2/300/300",
  //   },
  //   {
  //     id: 3,
  //     name: "Product 3",
  //     desc: "This is the description of the product",
  //     price: 75,
  //     imgUrl: "https://picsum.photos/id/3/300/300",
  //   },
  // ];
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = `${API}/api/products`;
        const res = await axios.get(url);
        setProducts(res.data);
      } catch (err) {
        setProducts([]);
      }
    };
    fetchProducts();
  }, [API]);

  const buyNow = (obj) => {
    setCart({
      id: obj.id,
      name: obj.name,
      price: obj.price,
      desc: obj.desc || obj.description,
      qty: 1,
      email: email,
    });
    Navigate("/cart");
  };
  // return (
  //   <div className="App-Home-Row">
  //     {products.map((product) => (
  //       <div>
  //         <img src={product.imgUrl} alt={product.name} />
  //         <h2>{product.name}</h2>
  //         <p>{product.desc}</p>
  //         <h4>{product.price}</h4>
  //         <p>
  //           <button onClick={() => buyNow(product)}>Buy now</button>
  //         </p>
  //       </div>
  //     ))}
  //   </div>
  // );

  return (
    <div className="App-Home-Row">
      {products.length === 0 ? (
        <div style={{ textAlign: "center", width: "100%" }}>
          <h2>Welcome to the Store!</h2>
          <p>No products available yet. Please add products to see them here.</p>
        </div>
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <img src={product.imgUrl || product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.desc || product.description}</p>
            <h4>{product.price}</h4>
            <p>
              <button onClick={() => buyNow(product)}>Buy now</button>
            </p>
          </div>
        ))
      )}
    </div>
  );
}