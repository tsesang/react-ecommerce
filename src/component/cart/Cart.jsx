import CartProductDetails from "./cartProductDetail";
import CartShoppingSummary from "./cartShoppingSummary";


import TopNav from "../topNav/TopNav";
import Navbar from "../navbar/Navbar";

import {  useSelector } from "react-redux";


import "./Cart.css";

export default function Cart() {

  const products = useSelector((state)=>state.cart.items)

  return (
    <>
      <TopNav />
      <Navbar />
      <div className="cart">
        {products.length != 0 ? (
          <>
            <h1>Shopping Cart</h1>
            <div className="cart-items">
              <CartProductDetails />
              <CartShoppingSummary />
            </div>
          </>
        ) : (
          <div className="no-item-cart">
            <div>
              <h1>No item in cart</h1>
              <img
                style={{ height: "200px", width: "200px" }}
                src="https://static.vecteezy.com/system/resources/previews/005/073/073/non_2x/no-item-in-the-shopping-cart-add-product-click-to-shop-now-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
                alt=""
              />
              <p>
                <a href="/">go back to home page</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
