import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import './Cards_grid.css';

function Cards_grid() {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(null); // Add error state

  // Fetch listings from the backend API
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/listings');
        setListings(response.data); // Ensure backend returns the expected structure
      } catch (error) {
        console.error('Error fetching listings:', error);
        setError('Failed to fetch listings. Please try again later.'); // Display user-friendly message
      }
    };

    fetchListings();
  }, []);

  return (
    <div>
      {error ? ( // Show error message if fetch fails
        <div className="error-message">{error}</div>
      ) : (
        <div className="c">
          {listings.map((item, index) => (
            <Card key={index} object={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Cards_grid;
