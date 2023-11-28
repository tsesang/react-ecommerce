import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CartProduct({ item, index, removeHandler,editedProduct }) {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editInputValue, setEditInputValue] = useState("");

  const editUpdateHandler = (id) => {
    const cartProduct = JSON.parse(localStorage.getItem("cart"));

    const updatedCart = cartProduct.map((item) => {
      if (item.id == id) {
        return { ...item, quantity: editInputValue };
      } else {
        return item;
      }
    });
    console.log("after edit : ", updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setIsEditing(false);
    editedProduct(updatedCart)
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
          <p>color : {item.color}</p>
          <p>size : {item.size}</p>
          <p>Rs. {item.price} /-</p>
          <button className="remove" onClick={() => removeHandler(item.id)}>
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
                <button onClick={() => editUpdateHandler(item.id)} className="cart-quantity-button">
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
