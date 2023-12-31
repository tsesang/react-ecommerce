import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productApi";


const initialState = {
  products: [],
  status: "idle",
};

export const fetchAsync = createAsyncThunk(
  "products/fetchProduct",
  async (page) => {
    const response = await fetchProducts(page);
    return response.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = [...state.products, ...action.payload];
      });
  },
});


export default productsSlice.reducer;
