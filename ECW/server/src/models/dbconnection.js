const mongoose = require("mongoose");

const db_url = "mongodb://127.0.0.1:27017/ECW";

mongoose
  .connect(db_url)
  .then(() => console.log("Connected to MongoDB"))
  .catch(() => console.log("Failed to connect to MongoDB"));
