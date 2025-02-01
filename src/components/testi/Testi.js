import React, { useState } from "react";
import "./testi.css";

const Testi = () => {
  const testimonials = [
    {
      quote:
        "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
      name: "ESM el ep",
      position: "mmin jenaaj",
    },
    {
      quote:
        "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.”",
      name: "Jane Doe",
      position: "CEO at TechCop",
    },
    {
      quote:
        "“A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.”",
      name: "John Smith",
      position: "Marketing Specialist",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="testimonials-container" id="testimonials">
      <div className="testimonials-header">
        <h4>TESTIMONIALS</h4>
        <h2>What People Say About Us.</h2>
      </div>
      <div className="testimonials-carousel">
        <button className="carousel-btn prev" onClick={goToPrev}>
          &#10094;
        </button>
        <div className="testimonial-card">
          <p className="testimonial-quote">{testimonials[currentIndex].quote}</p>
          <h4 className="testimonial-name">{testimonials[currentIndex].name}</h4>
          <p className="testimonial-position">{testimonials[currentIndex].position}</p>
        </div>
        <button className="carousel-btn next" onClick={goToNext}>
          &#10095;
        </button>
      </div>
      <div className="testimonials-navigation">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`nav-dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testi;
