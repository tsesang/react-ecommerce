import WishListProductDetails from "./WishListProductDetail";
import TopNav from "../topNav/TopNav";
import Navbar from "../navbar/Navbar";

import Footer from "../footer/Footer";


import "./wishList.css";

export default function WishList() {
  //fetching the cart items from the cart reducer so that we can chekc if it is null or not
  //depending on that we are doing conditional rendering of the page
  //null - means no items in cart
  //not null - render the cartproductDetail  and cartshoppingSummary components
  // const wishListProduct = useSelector((state) => state.wishList.wishListItems);

  const wishListProduct = JSON.parse(localStorage.getItem("wishList") || "[]");

  //localstorage get the item in wishlist

  return (
    <>
      <TopNav />
      <Navbar />
      <div className="cart">
        {wishListProduct.length != 0 ? (
          <>
            <h1>wish List </h1>
            <div className="cart-items">
              <WishListProductDetails />
              <div></div>
            </div>
          </>
        ) : (
          <div className="no-item-cart">
            <div>
              <h1>No item in wishlist</h1>
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
      <Footer/>

    </>
  );
}
