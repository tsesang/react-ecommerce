import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeItemFromWishLsit } from "./WishlistSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export default function WishListProductDetails() {
  const navigate = useNavigate();

  const [product, setProduct] = useState([]);

  //fetching the cart items from cart reducer
  // const wishListProducts = useSelector((state) => state.wishList.wishListItems);
  const wishListProducts = JSON.parse(localStorage.getItem("wishList"));

  useEffect(() => {
    setProduct(wishListProducts);
  }, []);

  const removeHandler = (id) => {
    const filterWishList = JSON.parse(localStorage.getItem("wishList")).filter(
      (item) => item.id != id
    );
    localStorage.setItem("wishList", JSON.stringify(filterWishList));
    setProduct(filterWishList);
  };

  return (
    <div className="cart-product-details">
      {product.map((item, index) => {
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
              <button className="remove" onClick={() => removeHandler(item.id)}>
                remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
