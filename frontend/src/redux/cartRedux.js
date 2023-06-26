import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    //setCart is used to set the cart from the database
    setCart: (state, action) => {
      const { products, quantity, total } = action.payload;
      state.products = products;
      state.quantity = quantity;
      state.total = total;
    },
    addProduct: (state, action) => {
      const existingProduct = state.products.find(
        //find the product with the id from the payload in the cart
        (product) => product.product_id === action.payload.product_id
      );

      if (existingProduct) {
        //if the product exists in cart, cannot add the same product again
        console.log("Product already in cart");
        return;
      } else {
        state.quantity += 1;
        state.products.push(action.payload); //payload=the new product
        state.total += parseFloat(action.payload.price);
      }
      //save the cart in local storage so that it persists after refresh
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeProduct: (state, action) => {
      const product = state.products.find(
        //find the product with the id from the payload
        (product) => product.product_id === action.payload
      );

      if (product) {
        //if the product exists, remove it from the cart)
        state.quantity -= 1;
        state.products = state.products.filter(
          (product) => product.product_id !== action.payload
        );
        state.total -= parseFloat(product.price);
      }
      //save the cart in local storage so that it persists after refresh
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { setCart, addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
