import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../Home_page';
import ListingDetails from './listing_details/Listing_details';
import BookingPage from './bookingpage/Booking_page';
// import SearchContainer from './Searchbar/SearchContainer';

function App() {
  return (
  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listing/:id" element={<ListingDetails />} />
        <Route path="/booking/:id" element={<BookingPage />} />
        {/* <Route path="/search/:id" element={<SearchContainer />} /> */}
      </Routes>
    
  );
}

export default App;
