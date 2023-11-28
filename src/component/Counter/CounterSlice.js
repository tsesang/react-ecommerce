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
        console.log("in counter increase..........")
      state.number = state.number+1;
      console.log("state. number : ",state.number)
    //   console.log("state number : ",state.number)
    },
  },
});

export const { increase } = persistSlice.actions;
export default persistSlice.reducer;
