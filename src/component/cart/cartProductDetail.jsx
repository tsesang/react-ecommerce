import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeItem } from "./cartSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export default function CartProductDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [product, setproduct] = useState([]);

  //fetching the cart items from cart reducer
  // const cartProducts = useSelector((state) => state.cart.items);
  const cartProducts = JSON.parse(localStorage.getItem("cart"));
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
          <div key={index} className="cart-product-details-items">
            <img
              src={item.images}
              alt=""
              onClick={() => navigate(`/productProfile/${item.id}`)}
            />
            <div className="details">
              <p className="title">{item.title}</p>
              <p>product id : {item.id}</p>
              <p>color : {item.color}</p>
              <p>size : {item.size}</p>
              <p>Rs. {item.price} /-</p>
              <button className="remove" onClick={() => removeHandler(item.id)}>
                remove
              </button>
            </div>
            <div>
              <p>
                quantity{" "}
                <input
                  type="number"
                  value={item.quantity}
                  onChange={() => console.log("hello changing value ... ")}
                />
              </p>
              <p>Subtotal : Rs. {item.quantity * item.price} /-</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
