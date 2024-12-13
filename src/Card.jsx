
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';

import './Card.css';

function Card({ object }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();

  const imageUrls = [
    object.images.thumbnail_url,
    object.images.medium_url,
    object.images.picture_url,
    object.images.xl_picture_url,
  ];

  const nextSlide = (e) => {
    e.stopPropagation(); // Prevents navigation when clicking the button
    if (currentIndex < imageUrls.length - 1) {

      setCurrentIndex(currentIndex + 1);
    }
  };


  const prevSlide = (e) => {
    e.stopPropagation(); // Prevents navigation when clicking the button

    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Function to navigate to the listing details page
  const handleImageClick = () => {
    navigate(`/listing/${object._id}`);
  };

  return (
    <div className='container1' style={{ cursor: 'pointer' }}>
      <div className="carousel-container-images">
        {/* Backward button */}
        <button
          id="prevButton"
          onClick={prevSlide}
          disabled={currentIndex === 0}
          style={{ display: currentIndex === 0 ? 'none' : 'block' }}
        >
          <FontAwesomeIcon icon={faBackward} size="1x" />
        </button>

        {/* Image */}
        <div className="image-container" style={{ transform: `translateX(-${currentIndex}%)` }}>
          <img
            className="image-item"
            src={imageUrls[currentIndex]}
            alt="Listing"
            onClick={handleImageClick} // Navigate only when clicking on the image
            style={{ cursor: 'pointer' }}
          />
        </div>

        {/* Forward button */}
        <button
          id="nextButton"
          onClick={nextSlide}
          disabled={currentIndex >= imageUrls.length - 1}
        >
          <FontAwesomeIcon icon={faForward} size="1x" />
        </button>
      </div>

      {/* Listing Details */}
      <h5>{object.name}</h5>
      <p>{object.host.host_name}</p>
      <p>{object.price}</p>
    </div>

  );
}

export default Card;
