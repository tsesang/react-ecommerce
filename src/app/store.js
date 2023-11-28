import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "../component/home/product/productSlice"; //to store the product items
import productProfileSlice from "../component/productProfile/productProfileSlice"; //product onclick store product details
import cartSlice from "../component/cart/cartSlice"; //cart items
import WishlistSlice from "../component/wishlist/WishlistSlice"; //to store the wishlist item
import searchSlice from "../component/navbar/navSlice"; // to store the filter search text

import CounterSlice from "../component/Counter/CounterSlice";
import storage from "redux-persist/lib/storage";

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: "counter",
  storage,
};

const rootReducers = combineReducers({
  product: productSlice,
  productProfile: productProfileSlice,
  cart: cartSlice,
  search: searchSlice,
  wishList: WishlistSlice,
  counter:CounterSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
      serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
  }),
});

