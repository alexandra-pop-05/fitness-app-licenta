import React, { useContext } from "react";
import { setCart } from "../../redux/cartRedux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import {AuthContext} from "../../context/authContext";

export const MyProducts = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const { currentUser} = useContext(AuthContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
       /* const token = currentUser?.access_token;
       const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
       }; */
        const res = await axios.get("http://localhost:8800/api/myproducts", /* {
          headers: {
            Authorization: `Bearer ${currentUser?.access_token}`,
          },
        } */);
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
