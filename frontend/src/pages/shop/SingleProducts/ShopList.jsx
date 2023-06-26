import { current } from "@reduxjs/toolkit";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/authContext";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../redux/cartRedux";

export const ShopList = () => {
  const [index, setIndex] = useState(null);
  const [plans, setPlans] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const response = await fetch("http://localhost:8800/api/products/");
      const data = await response.json();
      setPlans(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleSeeMore = async (product_id) => {
    try {
      const res = await axios.get(
        `http://localhost:8800/api/products/${product_id}`
      );
      const productData = res.data[0];

      navigate(`/shop/products/${product_id}`, { state: productData });
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddToCart = (product_id) => {
    const selectedProduct = plans.find((plan) => plan.product_id === product_id);
    if (currentUser) {
      //UPDATE CART
      dispatch(addProduct(selectedProduct, quantity));
      // IF PRODUCT IS ADDED TO CART, CONSOLE LOG IT
      if (quantity > 1) {
        console.log(
          `Adding ${quantity} products with id ${product_id} to the cart.`
        );
      } 
    }else {
      navigate("/login");
    }
  };

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
      {plans.map((plan, currentIndex) => {
        return (
          <div
            onClick={() => setIndex(currentIndex)}
            key={currentIndex}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="400"
            className={"group rounded-md overflow-hidden shadow-md"}
          >
            <img
              src={plan.image}
              alt={plan.name}
              className="w-full h-64 object-cover transition duration-300 transform group-hover:scale-105"
            />
            <div className="p-6">
              <h3
                className={`${
                  currentIndex === index ? "text-primary-200" : "text-gray-600"
                } text-2xl font-bold mb-2`}
              >
                {plan.name}
              </h3>
              <p
                className={`${
                  currentIndex === index ? "text-neutral-300" : "text-gray-600"
                } text-base mb-4`}
              >
                {plan.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold text-primary-200">
                  ${plan.price}
                  <span className="text-lg font-medium ml-2">/month</span>
                </div>
                <button
                  className="text-2xl text-primary-200 ml-28 border-none bg-transparent p-0 cursor-pointer hover:text-neutral-400"
                  onClick={() => handleSeeMore(plan.product_id)}
                >
                  see more
                </button>
                <button
                  onClick={() => handleAddToCart(plan.product_id)}
                  className={`${
                    currentIndex === index
                      ? "border border-neutral-500"
                      : "border border-neutral-500"
                  } btn btn-lg rounded-[1px] lg:mx-auto hover:bg-neutral-500 hover:text-white `}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
