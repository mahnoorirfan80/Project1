import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../navbar";
import Hr from "../bookingpage/Hr";
import Images from './Images'
import './listing_details.css'
import Details from '../bookingpage/Details'
function ListingDetails() {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  // Fetch the specific listing details
  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/listing/${id}`);
        setListing(response.data);
      } catch (error) {
        console.error('Error fetching listing details:', error);
      }
    };

    fetchListing();
  }, [id]);

  if (!listing) return <div>Loading...</div>;

  return (
    <>
    <Navbar/>
    <Hr />
     <div className="listing-details">
    
      <h1 listing={listing}/>
      <Images listing={listing}/>
      <Details listing={listing}/>
      <p>Hosted by: {listing.host.host_name}</p>
      <p>Price: {listing.price}</p>
   
      
    </div></>
   
  );
}

export default ListingDetails;
