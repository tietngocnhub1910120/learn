const mongoose = require("mongoose");
const { Schema } = mongoose;

const userModel = new Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true, minLength: 6 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userModel);
