import { SliderData } from "./imgData";
import "./carousel.css";
import { useState } from "react";

export default function Carousel() {
  //state for storing the current index of the slider
  const [currentIndex, setCurrentIndex] = useState(1);

  //right slider
  const rightSlider = () => {
    setCurrentIndex(
      currentIndex === SliderData.length - 1 ? 0 : currentIndex + 1
    );
  };

  //using %

  //left slider
  const leftSlider = () => {
    setCurrentIndex(
      currentIndex === 0 ? SliderData.length - 1 : currentIndex - 1
    );
  };

  return (
    <div className="carousel">
      <div className="">
        {SliderData.map((Slider, index) => {
          return Slider.type === "single" ? (
            <div key={index} className="">
              {currentIndex === index && (
                <div className="img-slider-single">
                  <img src={Slider.image} alt="imgslider data ...." />
                </div>
              )}
            </div>
          ) : (
            <div key={index} className="">
              {currentIndex === index && (
                <div className="img-slider-double">
                  <img src={Slider.image} alt="imgslider data ...." />
                  <div className="content">
                    <div>
                      <p className="title">{Slider.title}</p>
                      <p className="description">{Slider.description}</p>
                      <p className="red">Rs {Slider.price}/-</p>
                      <a href="" className="red">
                        limited offer
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <button className="btn left-btn" onClick={leftSlider}>
        {"<"}
      </button>
      <button className="btn right-btn" onClick={rightSlider}>
        {">"}
      </button>
    </div>
  );
}