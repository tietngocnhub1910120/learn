const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskModel = new Schema(
  {
    title: { type: String, required: true, minLength: 1 },
    body: { type: String, required: true },
    status: {
      type: String,
      enum: ["Chuẩn bị", "Đang thực hiện", "Đã hoàn thành"],
      default: "Chuẩn bị",
    },
    poster: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskModel);
