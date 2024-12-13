import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './booking_page.css';
import Navbar from '../navbar';
import BillingAddress from './Billing_address';
import axios from 'axios';
import Hr from './Hr';

function BookingPage() {
  const location = useLocation();
  const { listing } = location.state || {}; // Default to an empty object if state is not available

  if (!listing) {
    return <div>Error: Listing data not found</div>;
  }

  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [customerInfo, setCustomerInfo] = useState({
    street: '',
    apartment: '',
    city: '',
    zip: '',
    postalCode: '',
    country: ''
  });

  const [errors, setErrors] = useState({
    checkIn: '',
    checkOut: '',
    customerInfo: ''
  });

  const handleBooking = () => {
    const newErrors = { ...errors };
  
    // Validation
    if (!checkIn) newErrors.checkIn = 'Check-in date is required';
    if (!checkOut) newErrors.checkOut = 'Check-out date is required';
    if (new Date(checkIn) >= new Date(checkOut)) {
      newErrors.checkOut = 'Check-out date must be later than check-in date';
      setTotalPrice(0); // Set total price to 0 if dates are incorrect
    }
    if (!customerInfo.street || !customerInfo.city || !customerInfo.zip || !customerInfo.country) {
      newErrors.customerInfo = 'Please fill in all billing address fields';
    }
  
    setErrors(newErrors);
  
    // If no errors, proceed with booking
    if (!newErrors.checkIn && !newErrors.checkOut && !newErrors.customerInfo) {
      const bookingData = {
        listingId: listing._id,
        checkIn,
        checkOut,
        totalPrice,
        customerInfo, // Map customerInfo directly
        category: 'room', // Provide a category (adjust as needed)
      };
  
      axios.post('http://localhost:3000/api/bookings', bookingData)
        .then(response => {
          alert('Booking successful');
        })
        .catch(error => {
          console.error('There was an error booking!', error);
        });
    }
  };

  const calculateTotalPrice = () => {
    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);

      if (checkInDate >= checkOutDate) {
        setTotalPrice(0); // Set total price to 0 if the dates are incorrect
      } else {
        const diffTime = Math.abs(checkOutDate - checkInDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        setTotalPrice(listing.price * diffDays);
      }
    }
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [checkIn, checkOut]);

  return (
    <>
      <Navbar />
      <Hr />
      <div id="heading">Request To Book</div>
      <div id="main-container">
        <div>
          <div id="dates">
            <div>
              <input
                type="date"
                value={checkIn}
                onChange={e => setCheckIn(e.target.value)}
                placeholder="Check-in Date"
              />
              {errors.checkIn && <div className="error">{errors.checkIn}</div>}
            </div>
            <div>
              <input
                type="date"
                value={checkOut}
                onChange={e => setCheckOut(e.target.value)}
                placeholder="Check-out Date"
              />
              {errors.checkOut && <div className="error">{errors.checkOut}</div>}
            </div>
          </div>

          <BillingAddress
            customerInfo={customerInfo}
            setCustomerInfo={setCustomerInfo}
            errors={errors.customerInfo}
          />
          <button id="button" onClick={handleBooking}>
            Confirm Booking
          </button>
        </div>

        <div id="price_box">
          <div id="price">Price: {listing.price} $/night</div>
          <div>Total Price: {totalPrice} $</div>
        </div>
      </div>
    </>
  );
}

export default BookingPage;
