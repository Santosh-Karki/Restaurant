import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/pic1.png";
import img2 from "../assets/img/pic2.png";
import img3 from "../assets/img/pic3.png";
import './review.css'

const AutoPlayMethods=()=> {
  const settings = {
    dots: true,
    infinite: true,
   autoplay: true,
   autoplaySpeed: 3000,
   cssEase: "linear",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="mb-16 h-96 pt-8 py-3">
    <h1 className="text-center font-semi-bold text-3xl my-10 "> What Our Customers Say</h1>
    <div className="slider-container">
    <Slider {...settings}>
      <div className="reviewcard">
      <ReviewCard img={img1} name="Sophia Azura" comments="I appreciate the attention to dietary restrictions. The staff was very accommodating and knowledgeable about allergens."/>
      </div>
      <div className="reviewcard">
      <ReviewCard img={img2} name="John Deo" comments="The menu offers a wonderful variety, catering to different tastes. There's something for everyone here." />
      </div>
      <div className="reviewcard">
      <ReviewCard img={img3} name="Victoria Zoe" comments="The food at Affogato was absolutely divine! Each dish burst with flavor, and the presentation was impeccable. A culinary experience worth savoring." />
      </div>
      
    </Slider>
  </div>
  </div>
);
}
export default AutoPlayMethods;