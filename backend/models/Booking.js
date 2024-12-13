import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define the schema for a Booking
const bookingSchema = new Schema(
  {
    listingId: {
      type: String ,// Reference to the Listing model
      required: true,                        // Ensure listingId is required
                              // Creates a reference to the Listing model
    },
    checkIn: {
      type: Date,                           // Store check-in date as Date type
      required: true,                        // Ensure check-in date is provided
    },
    checkOut: {
      type: Date,                           // Store check-out date as Date type
      required: true,                        // Ensure check-out date is provided
    },
    totalPrice: {
      type: Number,                         // Store total price as a Number type
      required: true,                        // Ensure total price is provided
    },
    customerInfo: {
      street: {
        type: String,                       // Store street address as String type
        required: true,                      // Ensure street is provided
      },
      apartment: {
        type: String,                       // Optional field for apartment
      },
      city: {
        type: String,                       // Store city as String type
        required: true,                      // Ensure city is provided
      },
      zip: {
        type: String,                       // Store zip as String type
        required: true,                      // Ensure zip code is provided
      },
      postalCode: {
        type: String,                       // Store postal code as String type
        required: true,                      // Ensure postal code is provided
      },
      country: {
        type: String,                       // Store country as String type
        required: true,                      // Ensure country is provided
      },
    },
    category: {
      type: String,                         // Store category (room or apartment) as String type
      enum: ['room', 'apartment'],          // Limit the category to "room" or "apartment"
      required: true,                        // Ensure category is provided
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Create and export the model based on the schema
const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;