import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../component/home/product/productSlice"; //to store the product items
import productProfileSlice from "../component/productProfile/productProfileSlice"; //product onclick store product details
import cartSlice from "../component/cart/cartSlice"; //cart items
import WishlistSlice from "../component/wishlist/WishlistSlice"; //to store the wishlist item
import searchSlice from "../component/navbar/navSlice";   // to store the filter search text
export const store = configureStore({
  reducer: {
    product: productSlice,
    productProfile: productProfileSlice,
    cart: cartSlice,
    search: searchSlice,
    wishList: WishlistSlice,
  },
});

