import express from 'express';
import mongoose from 'mongoose';
import Booking from '../models/Booking.js';  // Ensure you have a Booking model for MongoDB
import Listing from '../models/Listing.js';

const router = express.Router();

// POST route to handle booking requests
router.post('/bookings', async (req, res) => {
  console.log('POST /bookings route hit');
  console.log('Incoming Booking Data:', req.body);

  const { listingId, checkIn, checkOut, totalPrice, customerInfo, category } = req.body;

  // Since listingId is a string (e.g., '10006546'), no need to convert to ObjectId
  // Make sure the listingId is a valid string
  if (!listingId || typeof listingId !== 'string') {
    console.log('Invalid listingId format');
    return res.status(400).json({ message: 'Invalid listingId format' });
  }

  console.log('Listing ID:', listingId); // Log the listingId

  try {
    // Fetch the listing details from the database using the string listingId
    const listing = await Listing.findOne({ listingId: listingId }); // Query by listingId (string)
    
    if (!listing) {
      console.log('Listing not found');
      return res.status(404).json({ message: 'Listing not found' });
    }

    // Validate category
    if (!['room', 'apartment'].includes(category)) {
      console.log('Invalid category');
      return res.status(400).json({ message: 'Invalid category. Must be "room" or "apartment".' });
    }

    // Create a new booking document
    const newBooking = new Booking({
      listingId: listingId,  // Store the listingId as a string in the booking
      checkIn,
      checkOut,
      totalPrice,
      customerInfo,
      category,
    });

    // Save the booking to the database
    await newBooking.save();
    console.log('Booking saved successfully');
    res.status(201).json({ message: 'Booking created successfully' });
  } catch (err) {
    console.error('Error creating booking:', err);
    res.status(500).json({ message: 'Error creating booking' });
  }
});

export default router;