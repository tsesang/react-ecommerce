import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { fetchProfileAsync } from "./productProfileSlice";
import { addItem } from "../cart/cartSlice";
import { addItemToWishList } from "../wishlist/WishlistSlice";

import Navbar from "../navbar/Navbar";
import TopNav from "../topNav/TopNav";

import "./ProductProfile.css";

export default function ProductProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //this is destruturing params from the /productProfile:id - routing on click on product item in homepage
  const { id } = useParams();

  //function to fetch the product on click from the home page
  useEffect(() => {
    dispatch(fetchProfileAsync(id));
  }, []);

  //state for the slider index
  const [currentSlide, setCurrentSlide] = useState(0);

  //state for storing the color of product chosen
  const [color, setColor] = useState("yellow");
  //state for storing the size of the product chosen
  const [size, setSize] = useState("M");
  //state for storing the quantity of the product chosen
  const [quantity, setQuantity] = useState(1);

  //quantity handler
  function quantityHandler(e) {
    if (e.target.value == "-" || e.target.value == "+") {
      setQuantity(quantity);
    } else {
      setQuantity(e.target.value);
    }
  }

  //function to handle the product add to cart functionality
  const addToCartHandler = () => {
    //updating the product obj by adding the color,size,quanity
    //this set thing will display item added to cart on click --- kind of notification -- conidtioanal render on cart page
      if(String(quantity).includes("-") || String(quantity).includes("+")){
        setQuantity(prev=>prev-(prev-1));
      }
    const updatedProduct = {
      ...product,
      color: color,
      size: size,
      quantity: quantity,
    };
    //dispatching the updatedProduct obj to the reducer

    dispatch(addItem(updatedProduct));
    navigate("/addedToCart");
  };

  const addToWishListHandler = () => {
    const updatedProduct = {
      ...product,
      color: color,
      size: size,
      quantity: quantity,
    };
    dispatch(addItemToWishList(updatedProduct));
    navigate("/addedToWishList");
  };

  //fetching the state product from the productProfile reducer
  const product = useSelector((state) => state.productProfile.product);

  //function for right click handler slider
  const rightClickHandler = () => {
    setCurrentSlide((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  //function for left click handler slider
  const leftClickHandler = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  //function to handle when clicked on side square img show it on slider
  const clickOnShowImgSlider = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <TopNav />
      <Navbar />

      <div className="product-Profile product-not-added-cart">
        <h1>Special Collections for you </h1>
        <div className="product-Profile-Container">
          <div className="img">
            {(product.images || []).map((item, index) => {
              return (
                <div id="index" key={index}>
                  <button
                    className="img-button"
                    onClick={() => {
                      clickOnShowImgSlider(index);
                    }}
                  >
                    <img
                      style={{
                        border: currentSlide == index ? "1px solid black" : "",
                      }}
                      src={item}
                      alt=""
                    />
                  </button>
                </div>
              );
            })}
          </div>
          <div className="slider-container">
            {(product.images || []).map((item, index) => {
              return (
                <div className="slider" key={index}>
                  {currentSlide == index && <img src={item} alt="" />}
                </div>
              );
            })}
            <button className="left-btn" onClickCapture={leftClickHandler}>
              {"<"}
            </button>
            <button className="right-btn" onClick={rightClickHandler}>
              {">"}
            </button>
          </div>
          <div className="product-details">
            <h1 className="title">{product.title}</h1>
            <div className="price-rating">
              <h3>Rs. {product.price}/-</h3>
              <p>rating ****</p>
            </div>
            <p className="desp">exclusive size online only</p>
            <p className="desp">inclusive of all taxes</p>

            <p className="desp down">
              {product.description}
              <p>created - {product.creationAt}</p>
              <p>updated - {product.updatedAt}</p>
            </p>
            <p>
              Quantity{" "}
              <input
                type="number"
                value={quantity}
                min={1}
                max={5}
                onChange={quantityHandler}
              />
            </p>
            <div className="color">
              <h4>Color</h4>
              <div className="colors">
                <div
                  onClick={() => setColor("yellow")}
                  style={{
                    backgroundColor: "yellow",
                    border: color == "yellow" ? "2px solid black" : "",
                  }}
                ></div>
                <div
                  onClick={() => setColor("palegreen")}
                  style={{
                    backgroundColor: "palegreen",
                    border: color == "palegreen" ? "2px solid black" : "",
                  }}
                ></div>
                <div
                  onClick={() => setColor("red")}
                  style={{
                    backgroundColor: "red",
                    border: color == "red" ? "2px solid black" : "",
                  }}
                ></div>
                <div
                  onClick={() => setColor("lightblue")}
                  style={{
                    backgroundColor: "lightblue",
                    border: color == "lightblue" ? "2px solid black" : "",
                  }}
                ></div>
              </div>
            </div>
            <h4 className="color">SIZE</h4>
            <div className="sizes">
              <span
                onClick={() => setSize("S")}
                style={{
                  border: size == "S" ? "2px solid black" : "",
                }}
              >
                S
              </span>
              <span
                onClick={() => setSize("M")}
                style={{
                  border: size == "M" ? "2px solid black" : "",
                }}
              >
                M
              </span>
              <span
                onClick={() => setSize("L")}
                style={{
                  border: size == "L" ? "2px solid black" : "",
                }}
              >
                L
              </span>
              <span
                onClick={() => setSize("XL")}
                style={{
                  border: size == "XL" ? "2px solid black" : "",
                }}
              >
                XL
              </span>
              <span
                onClick={() => setSize("XXL")}
                style={{
                  border: size == "XXL" ? "2px solid black" : "",
                }}
              >
                XXL
              </span>
            </div>
            <button className="cart-btn uppercase" onClick={addToCartHandler}>
              Add To Cart
            </button>
            <button
              className="cart-btn uppercase"
              onClick={addToWishListHandler}
            >
              Add To Wishlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

//  condition ? (false)home : (true) condition : true : false
