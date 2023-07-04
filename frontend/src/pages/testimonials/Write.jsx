import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import TestimonialsImage from "../../assets/img/community/icons/testimonials.jpg";
import axios from "axios";

export const Write = () => {
  const [inputs, setInputs] = useState({
    text: "",
    image: "",
    name: "",
  });
  const [errors, setErrors] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    //async because we making an api req
    e.preventDefault(); //not refresh the page when clicking on the button
    try {
      const res = await axios.post(
        "http://localhost:8800/api/testimonials",
        {
          ...inputs,
          user_id: currentUser.user_id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(res);
      console.log(inputs);
      navigate("/");
      //navigate('/'); // Redirect to the Home page
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  return (
    <>
      <Header />
      <div className="relative min-h-screen flex justify-center items-center bg-neutral-500">
        <div
          className="opacity-50 hidden lg:block absolute inset-y-0 left-0  w-1/2 bg-cover bg-no-repeat "
          style={{ backgroundImage: `url(${TestimonialsImage})` }}
        ></div>
        <form
          onSubmit={handleSubmit}
          className="max-w-md w-full px-4 py-6 bg-transparent bg-gray-700 rounded-lg shadow-xl relative z-10 lg:w-1/2 lg:ml-auto lg:mr-40"
        >
          <h2 className="text-2xl font-bold text-center mb-6 text-white">
            Write a testimonial
          </h2>

          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="text"
            >
              Text:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="text"
              name="text"
              value={inputs.text}
              onChange={handleChange}
              placeholder="Enter your testimonial text"
              rows="5"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="image"
            >
              Image URL:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="image"
              type="text"
              name="image"
              value={inputs.image}
              onChange={handleChange}
              placeholder="Enter the URL of the testimonial image"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              value={inputs.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="btn btn-primary btn-lg w-full">
              Send testimonial
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};
