// server/controllers/productController.js
const Product = require("../models/productSchema");
const Category = require("../models/categorySchema");
const addProduct = async (req, res) => {
  try {
    const { name, category_id, description, price, ratings } = req.body;
    const imageBuffer = req.file.buffer;

    // Validate category_id
    const isValidCategoryId = mongoose.Types.ObjectId.isValid(category_id);
    if (!isValidCategoryId) {
      return res.status(400).json({ error: "Invalid category_id" });
    }

    // Check if the category exists
    const categoryExists = await Category.exists({ _id: category_id });
    if (!categoryExists) {
      return res.status(400).json({ error: "Category not found" });
    }

    // Save the product to the database
    const product = new Product({
      name,
      category_id,
      description,
      image: imageBuffer,
      price,
      ratings,
    });

    await product.save();

    res.status(201).json({ message: "Product created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
async function handleRenderForm(req, res) {
  res.render("form.ejs");
}
module.exports = {
  addProduct,
  handleRenderForm,
};
// Assuming you have a Category model
