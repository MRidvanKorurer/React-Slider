import React, { useState } from 'react'
import SliderItem from './SliderItem';
import "./Slider.css"


const Slider = () => {
    const [currunetSlide, setCurrunetSlide] = useState(0);

    const nextSlide = () => {
        setCurrunetSlide((prevSlide) => (prevSlide + 1) % 3);
    }

    const prevSlide = () => {
        setCurrunetSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
    }

  return (
    <section className="slider">
    <div className="slider-elements">
      {
        currunetSlide === 0 && <SliderItem imageSrc="img/slider/slider1.jpg"/>
      }
      {
        currunetSlide === 1 && <SliderItem imageSrc="img/slider/slider2.jpg"/>
      }
      {
        currunetSlide === 2 && <SliderItem imageSrc="img/slider/slider3.jpg"/>
      }


      <div className="slider-buttons">
        <button onClick={prevSlide} >
          <i className="bi bi-chevron-left"></i>
        </button>
        <button onClick={nextSlide} >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
      <div className="slider-dots">
        <button onClick={() => setCurrunetSlide(0)} className={`slider-dot ${currunetSlide === 0 ? "active" : ""}`} >
          <span></span>
        </button>
        <button onClick={() => setCurrunetSlide(1)} className={`slider-dot ${currunetSlide === 1 ? "active" : ""}`}>
          <span></span>
        </button>
        <button onClick={() => setCurrunetSlide(2)} className={`slider-dot ${currunetSlide === 2 ? "active" : ""}`}>
          <span></span>
        </button>
      </div>
    </div>
  </section>
  )
}

export default Slider