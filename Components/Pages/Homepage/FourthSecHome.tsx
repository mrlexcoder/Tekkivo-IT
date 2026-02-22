'use client';

import { useState } from 'react';
import '../../../public/Styles/HomeStyles.css';

interface MediaLogo {
  id: number;
  name: string;
  logo: string;
}

export default function FourthSecHome() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const mediaLogos: MediaLogo[] = [
    { id: 1, name: 'Bloomberg', logo: 'Bloomberg' },
    { id: 2, name: 'MC.today', logo: 'MC.today' },
    { id: 3, name: 'AIN', logo: 'AIN' },
    { id: 4, name: 'Yahoo Finance', logo: 'Yahoo Finance' },
    { id: 5, name: 'Wikipedia', logo: 'Wikipedia' },
    { id: 6, name: 'Owler', logo: 'Owler' },
  ];

  const itemsPerSlide = 5;
  const totalSlides = Math.ceil(mediaLogos.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const visibleLogos = mediaLogos.slice(
    currentSlide * itemsPerSlide,
    (currentSlide + 1) * itemsPerSlide
  );

  return (
    <section className="fourth-section">
      <div className="fourth-section-container">
        <div className="media-header">
          <h2 className="media-title">Media about us</h2>
          <div className="media-controls">
            <a href="/media" className="all-media-link">All media</a>
            <div className="slider-arrows">
              <button 
                className="slider-arrow slider-arrow-prev" 
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button 
                className="slider-arrow slider-arrow-next" 
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="media-slider">
          <div className="media-logos">
            {visibleLogos.map((media) => (
              <div key={media.id} className="media-logo-item">
                <div className="media-logo-placeholder">
                  <span className="media-logo-text">{media.logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
