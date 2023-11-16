import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  status: "",
  // id for setting the value for product profile ( product id to be displayed on click on imag)
};

export const cartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    //reducer for adding items to the cart
    addItem: (state, action) => {
      console.log("action payload : ", action.payload);
      state.items.push(action.payload);
    },
    //reducer for removing items from the cart
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id != action.payload);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
