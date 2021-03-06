import React, { Component } from "react";
import Slider from "react-slick";
import "./Names.css";
import data from "../../../data";
// import Card from "../../Card/Card";
import CardName from "../../Card/CardName";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, left: "25px", display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }

export default function Names(props) {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const choiceName = props.choiceName;
  const setChoiceName = props.setChoiceName;
  const flipTracker = props.flipTracker;
  const setFlipTracker = props.setFlipTracker;
  const cardsFlipped = props.cardsFlipped;

  return (
    <div className="carouselContainer">
      <div className="sliderWrapper">
        <Slider {...settings}>
          {data.map((data) => (
            <CardName
              name={data.name}
              choiceName={choiceName}
              setChoiceName={setChoiceName}
              key={data.id}
              className="namesCard"
              id={data.id}
              flipTracker={flipTracker}
              setFlipTracker={setFlipTracker}
              cardsFlipped={cardsFlipped}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
