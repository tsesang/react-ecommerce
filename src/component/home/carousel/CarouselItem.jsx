import React from "react";

const CarouselItem = ({ Slider, index }) => {
  <div key={index} className="">
    <h1>slider child</h1>
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
  </div>;
};

export default CarouselItem;
