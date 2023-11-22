// import Carousel from "./carousel/Carousel";
import Product from "./product/Product";
import TopNav from "../topNav/TopNav";
import Navbar from "../navbar/Navbar";
import Carousel from "./carousel/carousel";

import useOnlineStatus from "../../customHook/checkOnline";

export default function Home() {
  const isOnline = useOnlineStatus();
  return (
    <>
      {isOnline ? (
        <div className="home">
          <TopNav />
          <Navbar />
          <Carousel />
          <Product />
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <marquee behavior="" direction="">
            {" "}
            <h1>please connect to internet</h1>
          </marquee>
        </div>
      )}
    </>
  );
}
