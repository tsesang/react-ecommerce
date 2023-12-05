// import Carousel from "./carousel/Carousel";
import Product from "./product/Product";
import TopNav from "../topNav/TopNav";
import Navbar from "../navbar/Navbar";
import Carousel from "./carousel/carousel";

export default function Home() {
  return (
    <>
      <TopNav />
      <Navbar />
      <Carousel/>
      <Product />
    </>
  );
}
