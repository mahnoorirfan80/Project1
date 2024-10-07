import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import './Card.css';

function Card({ object }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = object.images.length;

  // Handlers for next and previous buttons
  const nextSlide = () => {
    if (currentIndex < totalImages - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className='container'>
      <div className="carousel-container-images">
        <button
          id="prevButton"
          onClick={prevSlide}
          disabled={currentIndex === 0}
          style={{ display: currentIndex === 0 ? 'none' : 'block' }} // Hide button when on the first image
        >
          <FontAwesomeIcon icon={faBackward} size="1x" />
        </button>

        <div className="image-container">
          {/* Show images in a row */}
          {object.images.map((image, index) => (
            <img
              key={index}
              className={`image-item ${index === currentIndex ? 'active' : ''}`} // Add 'active' class for the current image
              src={image}
              alt={`Slide ${index + 1}`} // Added alt attribute for accessibility
              style={{
                display: index >= currentIndex - 1 && index <= currentIndex + 1 ? 'block' : 'none', // Show previous, current, and next images
                width: '100%', // Ensure images take full width
              }}
            />
          ))}
        </div>

        <button
          id="nextButton"
          onClick={nextSlide}
          disabled={currentIndex >= totalImages - 1}
        >
          <FontAwesomeIcon icon={faForward} size="1x" />
        </button>
      </div>
      <h5>{object.location}</h5>
      <p>{object.hostedby}</p>
      <p>{object.price}</p>
    </div>
  );
}

export default Card;
