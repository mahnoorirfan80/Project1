import mongoose from 'mongoose';

// Define the schema for listings and reviews
const ListingSchema = new mongoose.Schema({
  _id: String, // Or use 'Number' if your IDs are numbers
  listing_url: String,
  name: String,
  summary: String,
  space: String,
  description: String,
  neighborhood_overview: String,
  notes: String,
  transit: String,
  access: String,
  interaction: String,
  house_rules: String,
  property_type: String,
  room_type: String,
  bed_type: String,
  minimum_nights: Number,
  maximum_nights: Number,
  cancellation_policy: String,
  last_scraped: Date,
  calendar_last_scraped: Date,
  first_review: Date,
  last_review: Date,
  accommodates: Number,
  bedrooms: Number,
  beds: Number,
  number_of_reviews: Number,
  bathrooms: Number,
  amenities: [String],
  price: Number,
  security_deposit: Number,
  cleaning_fee: Number,
  extra_people: Number,
  guests_included: Number,
  images: {
    picture_url: String
  },
  host: {
    host_id: String,
    host_name: String,
    host_is_superhost: Boolean,
    host_since: Date
  },
  address: {
    street: String,
    suburb: String,
    country: String
  },
  availability: {
    availability_30: Number,
    availability_60: Number,
    availability_90: Number,
    availability_365: Number
  },
  review_scores: {
    review_scores_rating: Number,
    review_scores_accuracy: Number,
    review_scores_cleanliness: Number,
    review_scores_checkin: Number,
    review_scores_communication: Number,
    review_scores_location: Number,
    review_scores_value: Number
  },
  reviews: [
    {
      reviewer_id: String,
      reviewer_name: String,
      comments: String,
      date: Date
    }
  ]
});

const Listing = mongoose.model('Listing', ListingSchema, 'listingsAndReviews');
export default Listing;
