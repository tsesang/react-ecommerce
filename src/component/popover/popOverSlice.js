import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  message: "",
  // id for setting the value for product profile ( product id to be displayed on click on imag)
};

export const popSlice = createSlice({
  name: "pop",
  initialState,
  reducers: {
    //reducer for adding items to the cart
    addMessage: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addMessage } = popSlice.actions;
export default popSlice.reducer;


