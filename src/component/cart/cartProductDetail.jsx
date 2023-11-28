import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeItem } from "./cartSlice";
import { useEffect, useState } from "react";

import CartProduct from "./CartProduct";

export default function CartProductDetails() {
  const products = useSelector((state) => state.cart.items);

  return (
    <div className="cart-product-details">
      {products.map((item, index) => {
        return (
          <CartProduct
            item={item}
            index={index}
            product={products}
          ></CartProduct>
        );
      })}
    </div>
  );
}
