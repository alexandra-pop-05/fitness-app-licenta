import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { setCart } from "./cartRedux";

//get the cart from local storage
const loadCartFromLocalStorage = () => {
  try {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      return cart;
    }
  } catch (e) {
    console.log(e);
  }
  return {
    products: [],
    quantity: 0,
    total: 0,
  };
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    //set the initial state of the cart to the cart from local storage
    cart: loadCartFromLocalStorage(),
  },
});

// Load cart from local storage and dispathc the setCart action
const cart = loadCartFromLocalStorage();
store.dispatch(setCart(cart));

export default store;
