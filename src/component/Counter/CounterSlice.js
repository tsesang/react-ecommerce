import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  number: 0,
};

export const persistSlice = createSlice({
  name: "persist",
  initialState,
  reducers: {
    //reducer for adding items to the cart
    increase: (state,action) => {
      state.number = state.number+1;
    },
  },
});

export const { increase } = persistSlice.actions;
export default persistSlice.reducer;
