import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  wishListItems: [],
  status: "",
  // id for setting the value for product profile ( product id to be displayed on click on imag)
};

export const wishListSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    //reducer for adding items to the cart
    addItemToWishList: (state, action) => {
      state.wishListItems.push(action.payload);
    },
    //reducer for removing items from the cart
    removeItemFromWishLsit: (state, action) => {
      state.wishListItems = state.wishListItems.filter((item) => item.id != action.payload);
    },
  },
});

export const { addItemToWishList,removeItemFromWishLsit } = wishListSlice.actions;
export default wishListSlice.reducer;
