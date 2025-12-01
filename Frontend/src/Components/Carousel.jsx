import React, { useState } from "react";
// import "./carousel.css";
import "../Styles/carousel.css"

const categories = [
  {
    title: "Men",
    img: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47",
  },
  {
    title: "Women",
    img: "https://images.unsplash.com/photo-1526055619778-59c05e0b7a37",
  },
  {
    title: "Electronics",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "Jewellery",
    img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3",
  },
];

export default function CategoryCarousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % categories.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  return (
    <div className="carousel-container">
      <button onClick={prevSlide} className="carousel-btn left">❮</button>

      <div className="carousel-slide">
        <img src={categories[index].img} alt={categories[index].title} />
        <h2>{categories[index].title}</h2>
      </div>

      <button onClick={nextSlide} className="carousel-btn right">❯</button>
    </div>
  );
}
