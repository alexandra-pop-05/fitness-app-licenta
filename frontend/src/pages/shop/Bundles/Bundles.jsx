import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import PriceIcn from "../../../assets/img/pricing/icons/price.svg";
import { BsCheckCircleFill } from "react-icons/bs";
import { addProduct } from "../../../redux/cartRedux";
import { useDispatch } from "react-redux";  
import { AuthContext } from "../../../context/authContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";


export const Bundles = () => {
  const { productId } = useParams();
  const [bundleData, setBundleData] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  useEffect(() => {
    const getBundleData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/subscriptions/${productId}`
        );
        const data = res.data[0];
        setBundleData(data);
      } catch (err) {
        console.log(err);
      }
    };
    getBundleData();
  }, [productId]);

  if (!bundleData) {
    // Handle the case when bundleData is not available
    return <div>Loading...</div>;
  }

  const { name, image, description, list, price } = bundleData;

  const handleAddToCart = () => {
    if(currentUser) {
      //UPDATE CART
      dispatch(addProduct(bundleData, quantity));
      // IF PRODUCT IS ADDED TO CART, CONSOLE LOG IT
      if (quantity >= 1) {
        console.log(`Adding product ${bundleData.name} with id ${productId} to the cart.`);  
      }
    } else {
      // Handle the case when the user is not logged in
      navigate("/login");
    }
  };

  return (
    <>
      <Header />
      <section className="section bg-neutral-500">
        <div
          className="section-title-group max-w-[540px] mx-auto px-4 lg:px-0"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="200"
        >
          <img
            className="mt-28 mb-0"
            src={PriceIcn}
            alt="Price Icon"
            style={{ filter: "invert(1)", fill: "white" }}
          />
          <h2 className="h4 section-title text-white">
            {name} <span className="text-primary-200">.</span>
          </h2>
        </div>
        <div className="flex">
          <div className="w-1/2" data-aos="fade-right" data-aos-delay="900">
            <img
              src={image}
              alt=""
              className="max-w-lg rounded-md shadow-inherit ml-0 w-full lg:ml-24"
            />
          </div>
          <div
            className="w-1/2 bg-neutral-500 p-4 text-white"
            data-aos="fade-down"
            data-aos-delay="600"
          >
            <p className="mb-4">{description}</p>
            {list && (
              <ul className="ml-6 mb-4">
                {list.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <BsCheckCircleFill alt="Check Icon" className="mr-2" />
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="flex items-center justify-between mt-14">
              <div className="btn btn-lg text-xl font-bold rounded-[1px] lg:mx-auto text-primary-200 border border-neutral-100">
                ${price}
              </div>
              <button
                onClick={handleAddToCart}
                className="btn btn-lg rounded-[1px] lg:mx-auto hover:bg-primary-200 hover:text-neutral-500 border border-neutral-100"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
