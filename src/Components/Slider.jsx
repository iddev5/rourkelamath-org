import React from "react";
import "../Styles/Slider.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from "../Assets/slideshow/slide1.jpg";
import slide2 from "../Assets/slideshow/slide2.jpg";
import slide3 from "../Assets/slideshow/slide3.jpg";
import slide4 from "../Assets/slideshow/slide4.jpg";
import slide5 from "../Assets/slideshow/slide5.jpg";

const Slider = () => {
  return (
    <div className="slider">
      <Carousel
        infiniteLoop={true}
        autoFocus={true}
        autoPlay={true}
        showStatus={false}
        interval={3000}
        showIndicators={false}
        ariaLabel="false"
        showArrows={false}
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
        <div>
          <img src={slide5} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
