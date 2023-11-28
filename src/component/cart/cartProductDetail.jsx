import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeItem } from "./cartSlice";
import { useEffect, useState } from "react";

import CartProduct from "./CartProduct";

export default function CartProductDetails() {




  const [product, setproduct] = useState([]);

  //fetching the cart items from cart reducer
  // const cartProducts = useSelector((state) => state.cart.items);
  const cartProducts = JSON.parse(localStorage.getItem("cart"));

  const editedProduct=(product)=>{
    setproduct(product)
  }

  useEffect(() => {
    setproduct(cartProducts);
  }, []);

  const removeHandler = (id) => {
    // dispatch(removeItem(item.id))
    const filteredCartItemLocalStorage = JSON.parse(
      localStorage.getItem("cart")
    ).filter((item) => item.id != id);
    localStorage.setItem("cart", JSON.stringify(filteredCartItemLocalStorage));
    setproduct(filteredCartItemLocalStorage);
  };

  return (
    <div className="cart-product-details">
      {product.map((item, index) => {
        return (
          <CartProduct item={item} index={index} removeHandler={removeHandler} editedProduct={editedProduct}></CartProduct>
        );
      })}
    </div>
  );
}
