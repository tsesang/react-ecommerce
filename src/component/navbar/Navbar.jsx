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

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

//by importing this setsearch thing here---it is doing both the setting the data for both the seraching as well as for filtering
import { setSearch } from "./navSlice";
import { fetchAsync } from "../home/product/productSlice";

function Navbar() {
  //state to handle the bar menu icon in mobile view
  const [visible, setVisible] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //state to store the searching text
  const [searchData, setSearchData] = useState("");

  //this function will handle the debouncing
  //so everytime this function executes it will set teh serachdata from the  input
  //there is this setsearch action which will set the search which we will the data into the product when searching ....

  const timeRef = useRef(null);

  function onChangeHandler(e) {
    clearTimeout(timeRef.current);
    setSearchData(e.target.value);

    timeRef.current = setTimeout(() => {
      dispatch(setSearch(searchData));
    }, 500);
    console.log("email : ", searchData);
  }

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
            dispatch(setSearch(""));
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
                dispatch(setSearch(item));
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
        <FontAwesomeIcon
          icon={faHeart}
          onClick={() => navigate("/wishList")}
        ></FontAwesomeIcon>
        <span>{}</span>
        <FontAwesomeIcon
          icon={faShoppingCart}
          onClick={() => navigate("/cart")}
        ></FontAwesomeIcon>
        <span>{}</span>
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
