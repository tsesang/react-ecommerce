import CartProductDetails from "./cartProductDetail";
import CartShoppingSummary from "./cartShoppingSummary";


import TopNav from "../topNav/TopNav";
import Navbar from "../navbar/Navbar";


import "./cart.css";
import { useEffect, useState } from "react";

export default function Cart() {
  //fetching the cart items from the cart reducer so that we can chekc if it is null or not
  //depending on that we are doing conditional rendering of the page
  //null - means no items in cart
  //not null - render the cartproductDetail  and cartshoppingSummary components
  // let cartProduct = useSelector((state) => state.cart.items);

  const [product,setproduct] = useState([]);
  const cartProduct = JSON.parse(localStorage.getItem('cart')||"[]");

  useEffect(()=>{
    setproduct(cartProduct)
  },[])

  return (
    <>
      <TopNav />
      <Navbar />
      <div className="cart">
        {product.length != 0 ? (
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
