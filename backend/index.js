import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';  // Import the CORS package
import listingRoutes from './routes/Listing.js';  // Ensure you use .js extension for imports

dotenv.config();
const app = express();
const PORT = 3000;

// Use CORS middleware
app.use(cors());  // Allows all domains to make requests to your server
// You can configure CORS to be more restrictive if needed:
// app.use(cors({ origin: 'http://your-frontend-url.com' }));

// Connect to MongoDB using the URI from .env
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Routes
app.use('/api', listingRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
