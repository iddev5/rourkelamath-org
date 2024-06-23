import React from "react";
import "../Styles/Slider.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from "../Assets/slideshow/slide1.png";
import slide2 from "../Assets/slideshow/slide2.png";
import slide3 from "../Assets/slideshow/slide3.png";
import slide4 from "../Assets/slideshow/slide4.png";

const Slider = () => {
  return (
    <div className="slider">
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        interval={2000}
        showIndicators={false}
        ariaLabel="false"
        showArrows={true}
        showThumbs={false}
      >
        <div>
          <img src={slide1} alt="" />
        </div>
        <div>
          <img src={slide2} alt="" />
        </div>
        <div>
          <img src={slide3} alt="" />
        </div>
        <div>
          <img src={slide4} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
