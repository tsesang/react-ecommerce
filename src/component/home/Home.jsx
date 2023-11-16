
// import Carousel from "./carousel/Carousel";
import Product from "./product/Product";
import TopNav from "../topNav/TopNav";
import Navbar from "../navbar/Navbar";
import Carousel from "./carousel/carousel";
import Footer from "../footer/Footer";
export default function Home() {
  return <div className="home">
    <TopNav/>
    <Navbar/>
    <Carousel />
    <Product/>
    <Footer/>
  </div>;
}
