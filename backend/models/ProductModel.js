const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  designation: {
    type: String,
    required: [true, "Please enter designation ..."],
  },

  price: {
    type: Number,
    required: [true, "Please entre price"],
  },

  quantity: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Product", productSchema);
