// server/routes/productRoutes.js
const express = require("express");
const multer = require("multer");
const addproductController = require("../controllers/addproductController");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });
router.get("/", addproductController.handleRenderForm);
router.post(
  "/addproducts",
  upload.single("image"),
  addproductController.addProduct
);

module.exports = router;
