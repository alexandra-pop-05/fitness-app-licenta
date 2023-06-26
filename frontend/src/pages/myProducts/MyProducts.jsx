import React from "react";
import { setCart } from "../../redux/cartRedux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

export const MyProducts = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
        const res = await axios.get("http://localhost:8800/api/myproducts");
        const {products} = res.data;
        setProducts(products);
    } catch (error) {
        console.log("Error fetching products.", error);
    }
  };


  return (
    <div>
      <h1>My Products</h1>
      {products.length === 0 ? (
        <p>No products purchased.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.product_id}>
              {product.name}, {product.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
