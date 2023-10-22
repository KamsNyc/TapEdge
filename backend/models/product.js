const mongoose = require ('mongoose')

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String, // URL to the product image
  },
  category: {
    type: String, // Category or type of product
  },
  rating: {
    type: Number, // Average user rating
  },
  availability: {
    type: Boolean, // You can use a boolean to represent availability (true for available, false for unavailable)
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the user who left the review
      },
      text: String,
      rating: Number,
    },
  ],
  // Add other fields specific to your product needs, e.g., product variants, availability, etc.
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
