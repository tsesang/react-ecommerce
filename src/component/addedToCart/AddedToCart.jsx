import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import TopNav from "../topNav/TopNav";
import Navbar from "../navbar/Navbar";

export default function AddedToCart() {
  //fetching the state product from the productProfile reducer
  const product = useSelector((state) => state.cart.items);

  //consider the added to cart item is the last item in cart
  const addedProduct = product[product.length - 1];

  const navigate = useNavigate()

  return (
    <>
      <TopNav />
      <Navbar />
      <div className="product-added-cart">
        <div>
          <div className="img-details">
            <div className="img">
              <img src={addedProduct.category.image} alt="" />
            </div>
            <div>
              <h3>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="check"
                ></FontAwesomeIcon>
                added to Cart
              </h3>
              <p>size {addedProduct.size}</p>
              <p>quanity {addedProduct.quantity}</p>
            </div>
          </div>
          <div className="button-details">
            <div>
              <button onClick={() => navigate("/cart")}>Go to Cart</button>
            </div>
            <div>
              <p>Your order is eligible for FREE Delivery. </p>
              <p>Select this option at checkout. Details</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
