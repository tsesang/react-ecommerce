import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { removeItem, editItem } from "./cartSlice";

export default function CartProduct({ item, index, product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editInputValue, setEditInputValue] = useState("");

  const editUpdateHandler = (id) => {
    dispatch(editItem({ value: editInputValue, id: id }));
    setIsEditing(false);
  };

  return (
    <>
      <div key={index} className="cart-product-details-items">
        <img
          src={item.images}
          alt=""
          onClick={() => navigate(`/productProfile/${item.id}`)}
        />
        <div className="details">
          <p className="title">{item.title}</p>
          <p>product id : {item.id}</p>
          <p>product cartid : {item.cartId}</p>
          <p>color : {item.color}</p>
          <p>size : {item.size}</p>
          <p>Rs. {item.price} /-</p>
          <button
            className="remove"
            onClick={() => dispatch(removeItem(item.id))}
          >
            remove
          </button>
        </div>
        <div>
          <p>
            {isEditing ? (
              <>
                <input
                  className="edit-quantity-input"
                  type="number"
                  value={editInputValue}
                  min={1}
                  max={8}
                  onChange={(e) => setEditInputValue(e.target.value)}
                />
                <button
                  onClick={() => editUpdateHandler(item.id)}
                  className="cart-quantity-button"
                >
                  update
                </button>
              </>
            ) : (
              <>
                {" "}
                quantity {item.quantity}
                <button
                  className="cart-quantity-button"
                  onClick={() => {
                    setIsEditing(true), setEditInputValue(item.quantity);
                  }}
                >
                  edit
                </button>
              </>
            )}
          </p>
          <p>Subtotal : Rs. {item.quantity * item.price} /-</p>
        </div>
      </div>
    </>
  );
}
