import WishListProductDetails from "./WishListProductDetail";
import TopNav from "../topNav/TopNav";
import Navbar from "../navbar/Navbar";



import "./wishList.css";
import { useSelector } from "react-redux";

export default function WishList() {

  const wishListProduct = useSelector((state)=>state.wishList.wishListItems)
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

    </>
  );
}
