import './EventSection.css'
import event1 from './eventPictures/event1.jpg'
import event2 from './eventPictures/event2.jpg'
import React, { useState, useEffect } from 'react';

const ChevronLeft = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M15 19l-7-7 7-7" />
    </svg>
  );
  
  const ChevronRight = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
  

function EventsSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const eventImages = [
      event1, event2
    ];
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % eventImages.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + eventImages.length) % eventImages.length);
    };
  
    useEffect(() => {
      const timer = setInterval(nextSlide, 5000);
      return () => clearInterval(timer);
    }, []);
  
    return (
        <section className="events-section">
        <div className="container">
          <h2 className="section-title">Recent Events</h2>
          <div className="slider-container">
            <img
              src={eventImages[currentSlide]}
              alt={`Event ${currentSlide + 1}`}
              className="slider-image"
            />
            <button 
              onClick={prevSlide}
              className="slider-button prev"
            >
              <ChevronLeft />
            </button>
            <button 
              onClick={nextSlide}
              className="slider-button next"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>
      )
}

export default EventsSection
