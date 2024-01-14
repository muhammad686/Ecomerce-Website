const express = require("express");
const cors = require("cors");
require("./models/dbconnection.js");
const Category = require("./models/catagorySchema.js");
const Product = require("./models/productSchema.js");
const addproductRoute = require("./routes/addproductRoute.js");
const server = express();
const PORT = process.env.PORT || 5000;

server.use(cors());
server.use(express.json());
server.set("view engine", "ejs");
server.use("/", addproductRoute);

server.listen(PORT, () => {
  console.log(`listening on port : http://localhost:${PORT}`);
});
