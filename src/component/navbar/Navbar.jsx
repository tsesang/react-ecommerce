import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
  faUser,
  faSearch,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import { useRef, useState } from "react";
import "./navbar.css";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//by importing this setsearch thing here---it is doing both the setting the data for both the seraching as well as for filtering
import { setSearch } from "./navSlice";

//custom hook fro deboucing
import useDebounce from "../../hooks/useDebounce";

function Navbar() {
  //state to handle the bar menu icon in mobile view
  const [visible, setVisible] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //state to store the searching text
  const [searchData, setSearchData] = useState("");

  const productInCart = useSelector((state)=>state.cart.items)

  function onChangeHandler(e) {
    setSearchData(e.target.value);
  }

  function Callbackfunction(debounceValue) {
    dispatch(setSearch({ item: debounceValue, isCategory: false }));
  }

  const debounceValue = useDebounce(Callbackfunction, searchData, 500);

  const onclickHandlerForMenuBar = () => {
    setVisible(!visible);
  };

  const sections = ["cloth", "furniture", "electronic", "shoe"];
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img
          src="https://cdn.worldvectorlogo.com/logos/uniqlo-1.svg"
          alt=""
          onClick={() => {
            dispatch(setSearch({ item: "", isCategory: false }));
            navigate("/");
          }}
        />
      </div>
      <div className="navbar-section center">
        {sections.map((item, index) => {
          return (
            <span
              key={index}
              onClick={() => {
                navigate("/");
                dispatch(setSearch({ item: item, isCategory: true }));
              }}
            >
              {item}
            </span>
          );
        })}
      </div>
      <div className="navbar-search center">
        <input
          type="text"
          placeholder="search by keywords"
          value={searchData}
          onChange={onChangeHandler}
        />
        <FontAwesomeIcon
          className="icon-search"
          icon={faSearch}
        ></FontAwesomeIcon>
      </div>

      <div
        className={
          visible
            ? "navbar-icons center visible"
            : "navbar-icons center not-visible"
        }
      >
        <FontAwesomeIcon
          icon={faUser}
          onClick={() => navigate("/userProfile")}
        ></FontAwesomeIcon>
        <div>
        <FontAwesomeIcon
          icon={faHeart}
          onClick={() => navigate("/wishList")}
        ></FontAwesomeIcon>
        </div>
        <div>
        <FontAwesomeIcon
          icon={faShoppingCart}
          onClick={() => navigate("/cart")}
        ></FontAwesomeIcon>
        <span className="product-count">{productInCart ? productInCart.length : 0}</span>
        </div>
      </div>
      <FontAwesomeIcon
        icon={faBars}
        onClick={onclickHandlerForMenuBar}
        className="bars"
      ></FontAwesomeIcon>
    </div>
  );
}

export default Navbar;
