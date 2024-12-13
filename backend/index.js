import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import listingRoutes from './routes/Listing.js';
import bookingRoutes from './routes/Booking.js';  // Import the booking routes

dotenv.config();
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());  // To parse JSON request bodies

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Routes
app.use('/api', listingRoutes);
app.use('/api', bookingRoutes);  // Add the booking routes

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});