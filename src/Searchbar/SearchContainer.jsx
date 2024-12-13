import React, { useState } from "react";
import "./searchContainer.css";

const SearchListings = () => {
  const [searchQuery, setSearchQuery] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const handleInputChange = (e) => {
    setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    alert(`Searching for:
      Location: ${searchQuery.location}
      Check-In: ${searchQuery.checkIn}
      Check-Out: ${searchQuery.checkOut}
      Guests: ${searchQuery.guests}`);
  };

  return (
    <div className="search-listings">
      <div className="search-bar">
        <input
          type="text"
          name="location"
          placeholder="Where are you going?"
          value={searchQuery.location}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="checkIn"
          placeholder="Check-In"
          value={searchQuery.checkIn}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="checkOut"
          placeholder="Check-Out"
          value={searchQuery.checkOut}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="guests"
          placeholder="Guests"
          value={searchQuery.guests}
          min="1"
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchListings;
