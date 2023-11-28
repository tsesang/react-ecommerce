import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { removeItemFromWishList } from "./WishlistSlice";

import { useDispatch } from "react-redux";

export default function WishListProductDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const wishListProduct = useSelector((state) => state.wishList.wishListItems);

  const removewishListItem = (id) => {
    dispatch(removeItemFromWishList(id))
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
              <p>{item.id}</p>
              <p>color : {item.color}</p>
              <p>size : {item.size}</p>
              <p>Rs. {item.price} /-</p>
              <button
                className="remove"
                onClick={() => removewishListItem(item.id)}
              >
                remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
