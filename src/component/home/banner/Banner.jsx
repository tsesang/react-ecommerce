import { bannerData } from "./bannerData";
import "./Banner.css";
import { useEffect, useState } from "react";

export default function Banner() {
  const [currentSlider, setCurrentSlider] = useState(0);


  useEffect(() => {
    setInterval(() => {
      setCurrentSlider((prev) => {
        if (prev < 0) {
          return bannerData.length - 1;
        } else {
          return prev - 1;
        }
      });
    }, 3000);
  }, []);

  return (
    <div className="banner">
      <div className="banner-container">
        {
            bannerData.map((item,index)=>{
                return(
                    <div className="banner-items">
                        <img src={item.image} alt="" />
                        <p>{item.description}</p>
                        </div>
                )
            })
        }
      </div>
    </div>
  );
}
