import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  searchData: "",
  filterData: "",
  // id for setting the value for product profile ( product id to be displayed on click on imag)
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    //reducer for adding items to the cart
    setSearch: (state, action) => {
      state.searchData = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
