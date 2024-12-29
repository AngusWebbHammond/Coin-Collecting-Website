const mongoose = require("mongoose");

const monarchSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    country: { type: String, required: true },
    period: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Monarch", monarchSchema);
