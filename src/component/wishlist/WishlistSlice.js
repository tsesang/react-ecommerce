import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  wishListItems: [],
  status: "",
  item: {},
  message: "",
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
    removeItemFromWishList: (state, action) => {
      state.wishListItems = state.wishListItems.filter(
        (item) => item.id != action.payload
      );
    },
    addedItem: (state, action) => {
      console.log("added item : ", action.payload);
      state.item = action.payload;
    },
    setMessage: (state, action) => {
      console.log("message : ", action.payload);
      state.message = action.payload;
    },
  },
});

export const {
  addItemToWishList,
  removeItemFromWishList,
  setMessage,
  addedItem,
} = wishListSlice.actions;
export default wishListSlice.reducer;
