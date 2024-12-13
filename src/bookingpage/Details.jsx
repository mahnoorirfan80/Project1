import React from 'react';
import { useNavigate } from 'react-router-dom';
import './details.css';
import Amenties from '../listing_details/Amenties';

function Details({ listing }) {
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate(`/booking/${listing._id}`, { state: { listing } }); // Pass the listing data to BookingPage
  };

  return (
    <div id="container">
      <div id="left">
        <h4>
          <span>{listing.room_type}</span>
          <span>, {listing.address.country}</span>
        </h4>
        <div id="b">
          <span>bedrooms {listing.bedrooms}</span>
          <span>. bathrooms {listing.bathrooms}</span>
        </div>
        <div id="reviews">Number of Reviews {listing.number_of_reviews}</div>
        <hr />
        <h2>About this place?</h2>
        <div id="about">{listing.description}</div>
        <hr />
        <Amenties listing={listing} />
      </div>
      <div id="price_box">
        <div id="price">
          {listing.price} $ <span id="night">night</span>
        </div>
        <hr />
        <button id="reserve_btn" onClick={handleBtnClick}>Reserve</button>
      </div>
    </div>
  );
}

export default Details;
