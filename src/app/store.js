import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../component/home/product/productSlice";
import productProfileSlice from "../component/productProfile/productProfileSlice";
import cartSlice from "../component/cart/cartSlice";
import WishlistSlice from "../component/wishlist/WishlistSlice";
import searchSlice from "../component/navbar/navSlice";
export const store = configureStore({
  reducer: {
    product: productSlice,
    productProfile: productProfileSlice,
    cart: cartSlice,
    search: searchSlice,
    wishList: WishlistSlice,
  },
});

