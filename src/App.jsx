import "./App.css";
import ProductProfile from "./component/productProfile/ProductProfile";
import Home from "./component/home/Home";
import Cart from "./component/cart/Cart";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./component/pageNotFound/NotFound";
import WishList from "./component/wishlist/WishList";
import AddedToCart from "./component/addedToCart/AddedToCart";
import AddedToWishList from "./component/addedToWishList/AddedToWishList";
import UserProfile from "./component/userProfile/UserProfile";
import NoProductFound from "./component/NoProductFound";

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishList" element={<WishList />} />
          <Route path="/productProfile/:id" element={<ProductProfile />} />
          <Route path="addedToCart" element={<AddedToCart/>}></Route>
          <Route path="addedToWishList" element={<AddedToWishList/>}></Route>
          <Route path="userProfile" element={<UserProfile/>}></Route>
          <Route path="/*" element={<NotFound />}></Route>
          <Route path="/noProductFound" element={<NoProductFound/>}></Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
