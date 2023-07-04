import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/authContext";

import Header from "../../components/Header";
import { Footer } from "../../components/Footer";
import PriceIcn from "../../assets/img/pricing/icons/price.svg";

export const MyProducts = () => {
  const [products, setProducts] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8800/api/myproducts", {
        headers: {
          Authorization: `Bearer ${currentUser?.access_token}`,
        },
        withCredentials: true,
      });
      setProducts(res.data);
    } catch (error) {
      console.log("Error fetching products.", error);
    }
  };

  const handleClick = () => {
    navigate("/shop");
  };

  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description;
    } else {
      return description.slice(0, maxLength) + "...";
    }
  };

  return (
    <>
      <Header />
      <div className="bg-neutral-500 py-20">
        <section className="section bg-neutral-500 text-white">
          {/* section title */}
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
            <h2 className="h2 section-title text-white">
              My Products <span className="text-primary-200">.</span>
            </h2>
          </div>
          {/* My Products */}
          <div
            className="max-w-7xl mx-auto px-4 lg:px-0 mt-8"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="300"
          >
            {products.length === 0 ? (
              <div className="flex justify-center items-center flex-col">
                <p className="text-2xl text-white">No products bought.</p>
                <button
                  onClick={handleClick}
                  className=" bg-primary-200 text-white py-2 px-4 rounded-md mt-10 "
                >
                  Buy products
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                  <div
                    key={product.product_id}
                    className="bg-gray-300 rounded-lg shadow-lg p-6 transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                  >
                    <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600"> {truncateDescription(product.description, 255)}</p>
                    <button className=" bg-primary-200 text-white py-2 px-4 rounded-md ">
                      Available Soon
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
