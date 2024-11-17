import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import './Card.css';

function Card({ object }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Safely access images and filter out invalid URLs
  const imageUrls = [
    object?.images?.thumbnail_url || null,
    object?.images?.medium_url || null,
    object?.images?.picture_url || null,
    object?.images?.xl_picture_url || null
  ].filter(Boolean); // Remove null or undefined values

  // Handlers for carousel navigation
  const nextSlide = () => {
    if (currentIndex < imageUrls.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="container1">
      <div className="carousel-container-images">
        {/* Previous Button */}
        <button
          id="prevButton"
          onClick={prevSlide}
          disabled={currentIndex === 0 || imageUrls.length === 0}
          style={{ display: currentIndex === 0 ? 'none' : 'block' }}
        >
          <FontAwesomeIcon icon={faBackward} size="1x" />
        </button>

        {/* Image Container */}
        <div className="image-container">
          {imageUrls.length > 0 ? (
            <img
              className="image-item"
              src={imageUrls[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
            />
          ) : (
            <p>No images available</p> // Handle missing images gracefully
          )}
        </div>

        {/* Next Button */}
        <button
          id="nextButton"
          onClick={nextSlide}
          disabled={currentIndex >= imageUrls.length - 1 || imageUrls.length === 0}
        >
          <FontAwesomeIcon icon={faForward} size="1x" />
        </button>
      </div>

      {/* Object Details */}
      <h5>{object?.name || 'Unknown Name'}</h5>
      <p>{object?.host?.host_name || 'Unknown Host'}</p>
      <p>{object?.price ? `$${object.price}` : 'Price not available'}</p>
    </div>
  );
}

export default Card;
