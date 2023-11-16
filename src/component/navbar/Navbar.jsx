import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
  faUser,
  faSearch,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import { useState, useMemo } from "react";
import "./navbar.css";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

//by importing this setsearch thing here---it is doing both the setting the data for both the seraching as well as for filtering
import { setSearch } from "./navSlice";

function Navbar() {
  //state to handle the bar menu icon in mobile view
  const [visible, setVisible] = useState(false);

  //state to handle the profile menu
  const [profileVisible, setProfileVisible] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchData, setSearchData] = useState("");

  const onChangeHandler = (e) => {
    setSearchData(e.target.value);
    let timeout;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      console.log("inside the debounce function ....");
      dispatch(setSearch(searchData));
    }, 500);
    console.log("input value : ", e.target.value);
  };

  const onclickHandlerForMenuBar = () => {
    setVisible(!visible);
  };
  const onclickHandlerForProfile = () => {
    setProfileVisible(!profileVisible);
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
          visible ? "navbar-icons center visible" : "navbar-icons center"
        }
      >
        <FontAwesomeIcon
          icon={faUser}
          onClick={onclickHandlerForProfile}
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

      <div className={profileVisible ? "profile visible" : "profile"}>
        <p onClick={()=>navigate('/userProfile')}>profile</p>
        <p>coupons</p>
        <p>purchase history</p>
        <p>order history</p>
        <p>logout</p>
      </div>
    </div>
  );
}

export default Navbar;