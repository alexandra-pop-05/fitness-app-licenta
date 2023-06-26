import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct, setCart } from "../../redux/cartRedux";
import StripeCheckout from "react-stripe-checkout";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import { useEffect } from "react";
import Header from "../../components/Header";
import { Footer } from "../../components/Footer";

const KEY =
  "pk_test_51N15xgEw5NLFnyIKcsPPXDrVv74Hg1ESwxigcpzsd0czn39qzWShCxsoLbzirib2qVixrUW5P4hHvEznU9cRdFE40017ylMRzx";

const Cart = () => {
  const navigate = useNavigate();
  /* const [quantity, setQuantity] = useState(1); */
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [stripeToken, setStripeToken] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const email = currentUser?.email; //this is used for the Stripe payment email field 

  /* console.log('email', email) */
  useEffect(() => {
    // update localStorage when cart state changes
    localStorage.setItem("cart", JSON.stringify(cart));
  
    const makeRequest = async () => {
      try {
        const res = await axios.post("http://localhost:8800/api/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
          email: currentUser?.email,
        });
        console.log(res.data);

        // clear cart after payment is successful 
        dispatch(setCart({ products: [], quantity: 0, total: 0 }));
        navigate('/myProducts');
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart, navigate]);

  // STRIPE TOKEN
  const onToken = (token) => {
    setStripeToken(token);
  };

  // REMOVE PRODUCT FROM CART
  const handleRemoveFromCart = (productId) => {
    // Remove the product from the cart if the quantity is 1
    const product = cart.products.find((product) => product.product_id === productId);

    if (product) {
      dispatch(removeProduct(productId));
    } else {
      console.log("No products in the cart.");
    }
    console.log(`Removing product with id ${productId} from the cart.`);
  };

  // continue shopping button
  const handleContinueShopping = (e) => {
    e.preventDefault();
    navigate('/shop');
  };

  return (
    <>
      <Header />
      <div className="bg-neutral-500 py-20">
        <section className="section bg-neutral-500 text-white">
          {/* section title */}
          <div
            className="section-title-group max-w-[540px] mx-auto px-4 lg:px-0"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="200"
          >
            <h2 className="h2 section-title text-white mt-5">
              Shopping cart <span className="text-primary-200">.</span>
            </h2>
          </div>
          {/* Products */}
          <div
            className="max-w-7xl mx-auto px-4 lg:px-0 mt-8"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="300"
          >
            {cart.products.map((product) => (
              <div
                key={product.id}
                className="group rounded-md overflow-hidden shadow-md mb-8 bg-purple-100"
              >
                <div className="flex">
                  <div className="w-1/5">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-32 h-auto object-cover"
                    />
                  </div>
                  <div className="w-4/5 p-4">
                    <h3 className="text-gray-600 text-2xl font-bold mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-base mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-3xl font-bold text-primary-200">
                        ${product.price}
                      </div>
                      <button
                        className="btn btn-lg rounded-[1px] lg:mx-auto text-neutral-400 hover:bg-neutral-500 hover:text-white"
                        onClick={() => handleRemoveFromCart(product.product_id)}
                      >
                        Remove from Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Subtotal */}
          <div className="max-w-7xl mx-auto px-4 lg:px-0 mt-8">
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold">Subtotal:</div>
              <div className="text-xl font-bold text-primary-200">
              ${cart.total.toFixed(2)} 
              </div>
            </div>
          </div>
          {/* Checkout Button */}
          <div className="max-w-7xl mx-auto px-4 lg:px-0 mt-8 flex justify-center">
            <StripeCheckout
              name="All FIT Shop"
              billingAddress
              shippingAddress
              description={`Your total is  $${cart.total.toFixed(2)}`}
              amount={Math.round(cart.total * 100)}
              token={onToken}
              stripeKey={KEY}
            >
              <button className="btn btn-lg rounded-[1px] bg-transparent border border-primary-200 text-primary-200 hover:bg-primary-200 hover:text-white mr-4">
                Checkout
              </button>
            </StripeCheckout>
            {/* Continue Shopping Button */}
            <button
              onClick={handleContinueShopping}
              className="btn btn-lg rounded-[1px] bg-transparent border border-primary-200 text-primary-200 hover:bg-primary-200 hover:text-white"
            >
              Continue Shopping
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
