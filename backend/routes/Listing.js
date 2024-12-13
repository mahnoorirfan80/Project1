import express from 'express';
import Listing from '../models/Listing.js';  // Ensure the correct file extension (.js)

const router = express.Router();

// Fetch the first 3 listings
router.get('/listings', (req, res) => {
  Listing.find()
    .limit(3) // Limit the number of listings to 3
    .then((listings) => {
      if (listings.length > 0) {
        res.json(listings);
      } else {
        res.status(404).json({ message: 'No listings found' });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: 'Error fetching listings' });
    });
});
router.get('/listing/:id', async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (listing) {
      res.json(listing);
    } else {
      res.status(404).json({ message: 'Listing not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching listing' });
  }
});
export default router;  // Use export default to export the router
