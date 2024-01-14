// C:\Users\DELL\Desktop\WAF-A3\ECW\server\src\models\productSchema.js

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: Buffer,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  ratings: {
    type: Number,
    default: 0,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
