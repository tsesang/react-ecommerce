import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addedItem, removeItemFromWishList } from "./WishlistSlice";
import { addItem,itemAdded } from "../cart/cartSlice";

import { useDispatch } from "react-redux";

export default function WishListProductDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const wishListProduct = useSelector((state) => state.wishList.wishListItems);

  const removewishListItem = (id) => {
    dispatch(removeItemFromWishList(id));
  };

  const addToCart = (id) => {
    const addingproduct = wishListProduct.find((item) => item.id == id);
    dispatch(addItem(addingproduct))
    dispatch(itemAdded(addingproduct))
    navigate('/addedToCart')
  };

  return (
    <div className="cart-product-details">
      {wishListProduct.map((item, index) => {
        return (
          <div key={index} className="cart-product-details-items">
            <img
              src={item.images}
              alt=""
              onClick={() => navigate("/productProfile/5")}
            />
            <div className="details">
              <p className="title">{item.title}</p>
              <p>Rs. {item.price} /-</p>
              <button
                className="remove"
                onClick={() => removewishListItem(item.id)}
              >
                remove
              </button>
              <br />
              <button
                className="add-to-cart"
                onClick={() => addToCart(item.id)}
              >
                add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
