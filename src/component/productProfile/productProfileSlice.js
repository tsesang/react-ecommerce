import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProductProfile } from "./ProductProfileAPI";

const initialState = {
  //initialy the product is null  this will store the product with the id
  product: {},
};

//asyn thunk for fetching the detail of the single product profile using the id we get from the useparams
export const fetchProfileAsync = createAsyncThunk(
  "products/fetchProductProfile",
  async (productId) => {
    //sending request to api
    const response = await fetchProductProfile(productId);
    return response.data;
  }
);

//reducers
export const productProfileSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProfileAsync.fulfilled, (state, action) => {
        state.product = action.payload;
        state.status = "fulfilled";
      });
  },
});

export default productProfileSlice.reducer;
