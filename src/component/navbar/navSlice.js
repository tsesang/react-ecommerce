import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  searchData: "",
  isCategory:false
  // id for setting the value for product profile ( product id to be displayed on click on imag)
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    //reducer for adding items to the cart
    setSearch: (state, action) => {
      console.log("action.payload : ",action.payload.item)
      state.searchData = action.payload.item;
      state.isCategory=action.payload.isCategory;
    },
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
