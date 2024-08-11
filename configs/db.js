const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);

const connection = mongoose
  .connect(process.env.dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));
// or true, depending on your preference

module.exports = { connection };
