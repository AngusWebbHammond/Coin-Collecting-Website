const mongoose = require("mongoose");

const coinSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    value: String,
    frontImage: String,
    backImage: String,
    date: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Coins", coinSchema);
